---
questObtained: 
questStatus: Not Started
questGiver: "[[Hlin Fléau-des-trolls]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Bryn Shander/Bryn Shander]]"
questSessionObtained: 
questNotes: 
questLootAvail: 100 po
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

**[[Hlin Fléau-des-trolls]]**, une naine chasseuse de primes, a remarqué une série de meurtres étranges. Les victimes ont toutes triché à la loterie des sacrifices. Elle soupçonne **[[content/03.Le Bestiaire/Sephek Kaltro]]**, un garde de la caravane de **[[Le Comptoir de Torg]]**.



### Obtenir la quête
- Rencontrer Hlin dans une taverne de n'importe quelle cité (souvent Bryn Shander).

### Récompenses
- 100 pièces d'or.

### Étapes de la quête
- [ ] Localiser la caravane de Torg.
- [ ] Enquêter sur Sephek Kaltro.
- [ ] Éliminer le tueur.