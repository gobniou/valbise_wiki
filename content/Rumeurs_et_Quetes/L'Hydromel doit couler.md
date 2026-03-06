---
questObtained: 
questStatus: Not Started
questGiver: "[[Citoyens de Bon Hydromel]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Bon Hydromel/Bon Hydromel]]"
questSessionObtained: 
questNotes: 
questLootAvail: Soutien politique + or
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

Un géant a volé les fûts d'hydromel et tué l'orateur. Les PJ doivent suivre les traces jusqu'à une grotte où un Verbeeg et un Ogre se sont installés.

### Étapes de la quête
- [ ] Suivre les traces de pas géantes.
- [ ] Infiltrer la caverne du Verbeeg.
- [ ] Ramener l'hydromel en ville.