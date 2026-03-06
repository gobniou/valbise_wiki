---
questObtained: 
questStatus: Not Started
questGiver: "[[Oarus Masthew]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Termalaine/Termalaine]]"
questSessionObtained: 
questNotes: 
questLootAvail: 50 po + un sac de tourmalines
questLookEarned: 
NoteIcon: quest
obsidianUIMode: preview
tags:
  - quest
---

# `=this.file.name`

> [!infobox]+
> # `=this.file.name`
> ###### Quest Details
> Type |  Stat |
> ---|---|
> Date de début | `INPUT[datePicker:questObtained]` |
> Status | `INPUT[inlineSelect(option(Not Started), option(In Progress), option(Complete)):questStatus]` |
> Donneur de quête | `INPUT[suggester(optionQuery(#npc)):questGiver]` |
> Emplacement | `INPUT[suggester(optionQuery(#Category/Settlement)):questLocationObtained]` |
> Session concernée | `INPUT[suggester(optionQuery(#journal)):questSessionObtained]` |
> Loot possible | `INPUT[suggester(optionQuery(#item)):questLootAvail]` |
> Loot acquis | `INPUT[suggester(optionQuery(#item)):questLookEarned]` |

La **[[La Mine de Gemmes]]** de Termalaine est envahie par des créatures. L'orateur **[[Oarus Masthew]]** demande aux PJ de la nettoyer. En réalité, une tribu de Kobolds et un Grell ont pris possession des lieux.

### Obtenir la quête
- Parler à Oarus au **[[Bureau de l'Orateur]]**.

### Récompenses
- 50 po + 10% de réduction chez les marchands locaux.

### Étapes de la quête
- [ ] Entrer dans la mine.
- [ ] Négocier ou combattre les Kobolds.
- [ ] Vaincre le Grell.