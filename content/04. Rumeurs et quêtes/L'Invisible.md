---
questObtained: 
questStatus: Not Started
questGiver: "[[Trovus]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Caer-Konig/Caer-Konig]]"
questSessionObtained: 
questNotes: 
questLootAvail: Équipement de chardalyn + récompense de l'orateur
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

Des vols mystérieux frappent **[[Caer-Konig]]**. L'orateur **[[Trovus]]** soupçonne des fantômes, mais ce sont des **Duergars** invisibles qui volent du fer et du chardalyn pour leur forteresse.



### Obtenir la quête
- Trouver Trovus ivre au **[[Hameçons, Ligne et Plomb]]**.

### Étapes de la quête
- [ ] Suivre les traces dans la neige.
- [ ] Trouver l'avant-poste Duergar.
- [ ] Récupérer les biens volés.