// Exporte la note courante en JSON “PNJ 2014 enrichi” → Exports/pnj/<slug>.json
module.exports = async () => {
  const vault = app.vault, cache = app.metadataCache, ws = app.workspace;
  const OUT = "Exports/pnj";
  const file = ws.getActiveFile(); if (!file) { new Notice("Aucune note active"); return ""; }
  const fm = cache.getFileCache(file)?.frontmatter || {};
  const md = await vault.read(file);

  const pick = (obj, keys) => { for (const k of keys) if (obj?.[k]!=null) return obj[k]; return null; };
  const pickNum = v => { if (v==null) return null; const m=String(v).match(/-?\d+/); return m?parseInt(m[0],10):null; };
  const score = k => pickNum(pick(fm, [k,k.toLowerCase(),k.toUpperCase()]));
  const listFrom = (k) => {
    const v = pick(fm,[k,k.toLowerCase(),k.toUpperCase()]);
    if (!v) return [];
    if (Array.isArray(v)) return v.map(String);
    return String(v).split(/[,;/•|]/).map(s=>s.trim()).filter(Boolean);
  };

  // Bio : (Description:: ... ) sinon 1er paragraphe
  let bio_html = "";
  const mDesc = md.match(/\(Description::\s*(.+?)\)/m);
  if (mDesc) bio_html = `<p>${mDesc[1].trim()}</p>`;
  else {
    const para = md.split(/\n{2,}/).find(p => p && !p.startsWith("#") && !p.startsWith("---"));
    if (para) bio_html = `<p>${para.replace(/\n/g," ")}</p>`;
  }

  // Traits/Actions (markdown → tableau simple)
  const extractBlocks = (header) => {
    const rx = new RegExp(`^#?\\s*${header}[\\s\\S]*?(?=\\n#|\\n$)`, "mi");
    const m = md.match(rx); if (!m) return [];
    const block = m[0];
    const items = [...block.matchAll(/\*\*(.+?)\.\*\*\s*([\s\S]*?)(?=\n\*\*|\n#|$)/g)];
    return items.map(mm => ({ name: mm[1].trim(), text: mm[2].trim().replace(/\n+/g,' ') }));
  };

  const traits  = extractBlocks("Traits");
  const actions = extractBlocks("Actions");

  // Abilities Roll20 “cliquables” (générique, pas dépendant des repeating sections)
  const abilFromAction = (name, text, defType="Dégâts") => {
    // bonus pour toucher
    const bonus = (text.match(/\+(\d+)\s*pour toucher/i)||[])[1];
    // premier paquet de dégâts
    const mainDmg = (text.match(/(\d+d\d+\+\d+|\d+d\d+)/)||[])[1];
    // un éventuel second paquet (froid, feu…)
    const extra = (text.match(/\+\s*(\d+d\d+)\s*dégâts.*?(froid|feu|acide|nécrotique|radiant|tonnerre|poison|psychique)/i)||[]);
    const extraDice = extra[1], extraType = extra[2];
    const portee = (text.match(/portée\s*([^.,;]+)/i)||[])[1];

    let degType = "tranchants";
    if (/perforant/i.test(text)) degType = "perforants";
    else if (/contondant/i.test(text)) degType = "contondants";

    const chunks = [
      `{{name=${name}}}`,
      bonus ? `{{Jet d'attaque=[[1d20+${bonus}]]}}` : "",
      mainDmg ? `{{${defType}=${degType} [[${mainDmg}]]}}` : "",
      (extraDice && extraType) ? `{{Supplément=${extraType} [[${extraDice}]]}}` : "",
      portee ? `{{Portée=${portee.trim()}}}` : ""
    ].filter(Boolean).join(" ");

    return {
      name,
      action: `&{template:default} ${chunks}`
    };
  };

  const abilities = [];
  if (actions.length) {
    // Multiattaque en tête si trouvée
    const multi = actions.find(a => /attaques multiples/i.test(a.name));
    if (multi) abilities.push({ name: "Attaques multiples", action: `&{template:default} {{name=Attaques multiples}} {{Effet=${multi.text}}}` });
    // Autres
    actions.filter(a => !/attaques multiples/i.test(a.name))
           .forEach(a => abilities.push(abilFromAction(a.name, a.text)));
  }

  const data = {
    // champs “généraux”
    name: (fm.aliases?.[0]) || fm.title || file.basename,
    cr: pickNum(pick(fm,["FP","fp","cr"])),
    role: pick(fm,["Rôle","role","Role"]) || null,
    status: pick(fm,["Statut","statut","status"]) || null,
    type: pick(fm,["Classe","Type"]) || null,

    // caracs & combat
    hp:  pickNum(pick(fm,["hp","HP"])),
    ac:  pickNum(pick(fm,["ac","CA"])),
    str: score("For"), dex: score("Dex"), con: score("Con"),
    int: score("Int"), wis: score("Sag"), cha: score("Cha"),
    saves: {
      str: pickNum(pick(fm,["JS_FOR","save_str"])),
      dex: pickNum(pick(fm,["JS_DEX","save_dex"])),
      con: pickNum(pick(fm,["JS_CON","save_con"])),
      int: pickNum(pick(fm,["JS_INT","save_int"])),
      wis: pickNum(pick(fm,["JS_SAG","save_wis"])),
      cha: pickNum(pick(fm,["JS_CHA","save_cha"]))
    },
    skills: listFrom("Compétences"),        // “Perception +2, Discrétion +5…”
    senses:  listFrom("Sens"),              // “Vision dans le noir 18 m, PP 12”
    languages: listFrom("Langues"),         // “Géant, Commun”
    hp_formula: pick(fm,["hp_formula","HP_formula","formule","Formule"]), 
    speed_text: pick(fm,["Vitesse","vitesse"]) || null,

    // lore
    bio_html,

    // règles spéciales
    resistances: listFrom("Résistances"),
    immunities: listFrom("Immunités"),
    vulnerabilities: listFrom("Vulnérabilités"),

    // pour Roll20
    traits,           // {name,text}[]
    actions,          // {name,text}[]
    abilities         // macros cliquables prêtes à coller
  };

  await vault.adapter.mkdir(OUT).catch(()=>{});
  const slug = (data.name||file.basename).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"").toLowerCase();
  await vault.adapter.write(`${OUT}/${slug}.json`, JSON.stringify(data, null, 2));
  new Notice(`Exporté : Exports/pnj/${slug}.json`);
  return "";
};