---
questObtained: 
questStatus: Not Started
questGiver: "[[Copper Knobberknocker]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Bryn Shander/Bryn Shander]]"
questSessionObtained: 
questNotes: 
questLootAvail: Lanterne de Révélation (Lantern of Revealing)
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

Cette quête "fil rouge" peut être obtenue n'importe où mais commence idéalement à [[Bryn Shander]]. Le gnome **[[Copper Knobberknocker]]** cherche à étudier les **Chwingas**, de petits esprits élémentaires, pour comprendre l'origine du froid surnaturel.

### Obtenir la quête
- Parler à Copper à la **[[Maison du Seigneur du Matin]]**.

### Récompenses
- Une **Lanterne de Révélation**.

### Étapes de la quête
- [ ] Repérer un Chwinga dans l'une des Dix-Cités.
- [ ] Utiliser les astuces de Copper pour l'approcher sans l'effrayer.
- [ ] Rapporter les observations au gnome.