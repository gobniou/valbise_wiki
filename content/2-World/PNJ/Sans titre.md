```dataviewjs
const base = "https://dvlivephoto.synology.me/open.html?file=";

// === PNJ ===
dv.header(2, "PNJ");
{
  const pages = dv.pages()
    .where(p => p.file && (p.file.tags?.includes("PNJ") || p.file.folder.startsWith("2-World/PNJ")))
    .sort(p => p.file.name);
  const lines = pages.map(p => {
    const rel = p.file.path.replace(/\.md$/,"");
    return `- [${p.file.name}](${base + encodeURIComponent(rel)})`;
  });
  dv.paragraph(lines.join("\n") || "_Aucun PNJ trouvé_");
}

// === Lieux ===
dv.header(2, "Lieux");
{
  const pages = dv.pages()
    .where(p => p.file && (p.file.tags?.includes("Lieu") || p.file.folder.startsWith("2-World/Lieux")))
    .sort(p => p.file.name);
  const lines = pages.map(p => {
    const rel = p.file.path.replace(/\.md$/,"");
    return `- [${p.file.name}](${base + encodeURIComponent(rel)})`;
  });
  dv.paragraph(lines.join("\n") || "_Aucun lieu trouvé_");
}

// === Quêtes ===
dv.header(2, "Quêtes");
{
  const pages = dv.pages()
    .where(p => p.file && (p.file.tags?.includes("Quete") || p.file.folder.startsWith("3-Quetes")))
    .sort(p => p.file.name);
  const lines = pages.map(p => {
    const rel = p.file.path.replace(/\.md$/,"");
    return `- [${p.file.name}](${base + encodeURIComponent(rel)})`;
  });
  dv.paragraph(lines.join("\n") || "_Aucune quête trouvée_");
}
```