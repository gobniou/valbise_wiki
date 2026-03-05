---
questObtained: 
questStatus: Not Started
questGiver: "[[Imdra Arlaggath]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Havre-du-Levant/Havre-du-Levant]]"
questSessionObtained: 
questNotes: 
questLootAvail: 200 po ou un Sac de Contenance (Bag of Holding)
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

La Capitaine **[[Imdra Arlaggath]]** s'inquiète de la disparition de plusieurs pêcheurs près des grottes au sud de [[Havre-du-Levant]]. Les rumeurs parlent d'une sorcière des glaces et de créatures aquatiques. En réalité, une harpie et une guenaude de mer ont élu domicile dans les grottes, terrorisant la côte.

### Obtenir la quête
- Parler à la Capitaine à l'**[[Hôtel de Ville]]** ou au **[[Site d'Exécution]]**.

### Récompenses
- 200 pièces d'or offertes par la ville.
- %% #secret **Trésor caché :** Les PJ peuvent trouver un *Sac de Contenance* dans le chaudron de la guenaude s'ils survivent à la rencontre. %%

### Étapes de la quête
- [ ] Atteindre les grottes au bord du lac Dinneshere.
- [ ] Explorer les tunnels glacés.
- [ ] Vaincre la guenaude de mer **Maud Chizlebon**.