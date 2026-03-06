---
questObtained:
questStatus: In Progress
questGiver: 3 nains d'Écu
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Bryn Shander/Bryn Shander]]"
questSessionObtained:
questNotes:
questLootAvail: une pierre précieuse d'une valeur de 50 po par personne
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

Les personnages peuvent récupérer cette quête s'ils commencent l'aventure à [[2-World/Lieux/Les 10-Cités/Bryn Shander/Bryn Shander]] ou peu après leur arrivée en ville. Elle commence lorsque les personnages apprennent qu'un groupe de Nains d'Écu a été contraint d'abandonner un traîneau chargé de lingots de fer qu'il transportait depuis les mines situées au pied du Cairn de Kelvin. Les lingots appartiennent au clan des Marteaudeguerre et sont marqués du symbole emblématique du clan, une chope moussante. Les nains demandent aux personnages de récupérer le traîneau et de livrer les lingots en toute sécurité à Lames de Fer Noir, ce pour quoi chaque personnage recevra une pierre précieuse en guise de paiement. Les personnages qui accomplissent cette quête gagnent également une remise de 10 % sur les marchandises achetées au Lames de Fer Noir - un petit remerciement de la part du propriétaire reconnaissant de l'établissement.

Les choses se compliquent lorsque des gobelins trouvent le traîneau avant les personnages. Ceux-ci doivent soit combattre les gobelins, soit leur soutirer les lingots par la ruse ou la discrétion. Pour compliquer encore les choses, les gobelins ont un chariot tiré par des ours polaires affamés. Les ours ne sont pas très regardants sur ce qu'ils mangent, donc des personnages astucieux pourraient penser à les retourner contre les gobelins.
### Obtenir la quête

- Apprendre la rumeur en se baladant dans [[2-World/Lieux/Les 10-Cités/Bryn Shander/Bryn Shander]]

### Récompenses

- une pierre précieuse d'une valeur de 50 po par personne
