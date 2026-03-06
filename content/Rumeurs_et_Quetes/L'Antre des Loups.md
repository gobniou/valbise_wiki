---
questObtained: 
questStatus: Not Started
questGiver: "[[Edgra Durridge]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Brèche de Dougan/Brèche de Dougan]]"
questSessionObtained: 
questNotes: 
questLootAvail: Bottes des Terres de l'Hiver (Boots of the Winterlands)
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

Deux enfants ont été enlevés par des loups d'hiver doués de parole à [[Brèche de Dougan]]. L'oratrice **[[Edgra Durridge]]** est prête à tout pour les récupérer. Les loups exigent une rançon en nourriture, mais ils cachent un secret plus sombre dans leur tanière.

### Obtenir la quête
- Parler à Edgra au centre du village ou au **[[Le Casier]]**.

### Récompenses
- Une paire de **Bottes des Terres de l'Hiver**.
- Des pierres précieuses d'une valeur totale de 50 po.

### Étapes de la quête
- [ ] Suivre les traces de loups dans la toundra.
- [ ] Négocier ou combattre les loups d'hiver **Korgak** et **Garn**.
- [ ] Ramener les enfants sains et saufs.