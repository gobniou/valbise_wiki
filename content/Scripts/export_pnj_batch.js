// Scripts/export_pnj_batch.js
// Lance-le via une note: <%* await tp.user.export_pnj_batch("2-World/PNJ","Exports/pnj") %>
// ou remplace les chemins ci-dessous et appelle sans arguments.

module.exports = async (tp, SOURCE = "2-World/PNJ", OUT = "Exports/pnj") => {
  // ------- API Obsidian (global) -------
  const vault = app.vault;
  const cache = app.metadataCache;

  // ------- utilitaires -------
  const readFile = async (f) => await vault.read(f);
  const fm = (f) => cache.getFileCache(f)?.frontmatter || {};
  const toInt = (v) => { if (v==null) return null; const n = parseInt(String(v).replace(/[^\d-]/g,""),10); return Number.isNaN(n)?null:n; };
  const mod = (s) => (s==null?null:Math.floor((s-10)/2));
  const firstPara = (md) => {
    const m = md.match(/\(Description::\s*(.+?)\)\s*$/m);
    if (m) return `<p>${m[1].trim()}</p>`;
    const p = md.split(/\n{2,}/).find(x => x && !x.startsWith("#") && !x.startsWith("---"));
    return p ? `<p>${p.replace(/\n/g," ")}</p>` : "";
  };
  const abilitiesFrom = (md) => {
    const arr=[];
    if (/\*\*Attaques multiples\.\*\*/.test(md))
      arr.push({name:"Attaques multiples",action:`&{template:default} {{name=Attaques multiples}} {{Effet=Effectue **3 attaques** : 1 Morsure et 2 Griffes.}}`});
    const mors = md.match(/\*\*Morsure\.\*\*([\s\S]*?)(?:\n\n|\n#|$)/m);
    if (mors){
      const bonus=(mors[0].match(/\+(\d+)\s*pour toucher/i)||[])[1]||"7";
      const base =(mors[0].match(/(\d+d\d+\+\d+|\d+d\d+)/)||[])[1]||"1d6+4";
      const cold =((mors[0].match(/\+ (\d+d\d+)\s*dégâts.*froid/i)||[])[1])||"2d8";
      arr.push({name:"Morsure",action:`&{template:default} {{name=Morsure}} {{Jet d'attaque=[[1d20+${bonus}]]}} {{Dégâts=Perforants [[${base}]] + Froid [[${cold}]]}} {{Portée=1,5 m • 1 cible}}`});
    }
    const grif = md.match(/\*\*Griffes\.\*\*([\s\S]*?)(?:\n\n|\n#|$)/m);
    if (grif){
      const bonus=(grif[0].match(/\+(\d+)\s*pour toucher/i)||[])[1]||"7";
      const base =(grif[0].match(/(\d+d\d+\+\d+|\d+d\d+)/)||[])[1]||"2d6+4";
      const cold =((grif[0].match(/\+ (\d+d\d+)\s*dégâts.*froid/i)||[])[1])||"2d8";
      const effm = grif[0].match(/JS\s*CON\s*DD\s*([0-9]+)/i);
      const eff  = effm?`{{Effet si froid=JS CON DD ${effm[1]} → désavantage attaques (fin du prochain tour)}}`:"";
      arr.push({name:"Griffes",action:`&{template:default} {{name=Griffes}} {{Jet d'attaque=[[1d20+${bonus}]]}} {{Dégâts=Tranchants [[${base}]] + Froid [[${cold}]]}} ${eff} {{Portée=1,5 m • 1 cible}}`});
    }
    return arr;
  };
  const slug = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9_-]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"").toLowerCase();

  // ------- création du dossier OUT -------
  await vault.adapter.mkdir(OUT).catch(()=>{});

  // ------- fichiers à exporter -------
  const files = vault.getMarkdownFiles().filter(f => f.path.startsWith(SOURCE + "/"));

  let ok=0, ko=0;
  for (const file of files) {
    try {
      const front = fm(file);
      const body  = await readFile(file);
      const name  = front?.aliases?.[0] || front?.title || file.basename;

      const data = {
        name,
        hp:  toInt(front?.hp),
        ac:  toInt(front?.ac),
        speed: null,
        init: mod(toInt(front?.Dex)),
        str: toInt(front?.For),
        dex: toInt(front?.Dex),
        con: toInt(front?.Con),
        int: toInt(front?.Int),
        wis: toInt(front?.Sag),
        cha: toInt(front?.Cha),
        bio_html: firstPara(body),
        abilities: abilitiesFrom(body)
      };

      await vault.adapter.write(`${OUT}/${slug(file.basename)}.json`, JSON.stringify(data, null, 2));
      ok++;
    } catch(e){
      console.error("Export PNJ error", file.path, e);
      ko++;
    }
  }

  new Notice(`Export PNJ : ${ok} ok, ${ko} err. → ${OUT}`);
  return "";
};