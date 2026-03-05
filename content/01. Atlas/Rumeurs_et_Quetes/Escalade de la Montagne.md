---
questObtained: 
questStatus: Not Started
questGiver: "[[Keegan Velryn]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Targos/Targos]]"
questSessionObtained: 
questNotes: 
questLootAvail: 50 po par personne
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

**[[Keegan Velryn]]** est désespéré. Son mari, le guide **[[Garret]]**, a disparu alors qu'il escortait un groupe d'aventuriers inexpérimentés sur les pentes du **[[Cairn de Kelvin]]**.

Les personnages devront affronter le froid extrême et des Yétis pour retrouver les survivants.



### Obtenir la quête
- Aller à la **[[La Maison de Keegan]]** à [[Targos]].

### Récompenses
- 50 po par personne de la part de l'Orateur si Garret revient vivant.

### Étapes de la quête
- [ ] Atteindre le camp de base du Cairn.
- [ ] Trouver les survivants dans la grotte des Yétis.
- [ ] Escorter Garret jusqu'à Targos.