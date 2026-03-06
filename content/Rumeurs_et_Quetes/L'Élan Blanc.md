---
questObtained: 
questStatus: Not Started
questGiver: "[[Nivil Loushk]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Bois Isolé/Bois Isolé]]"
questSessionObtained: 
questNotes: 
questLootAvail: L'auberge [[Déglingué]] (The Ramshackle) offerte par la ville.
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

Un élan géant aux bois blancs comme le givre terrorise les bûcherons de [[Bois Isolé]]. L'orateur **[[Nivil Loushk]]** promet aux personnages la propriété de l'auberge abandonnée **[[Déglingué]]** s'ils parviennent à abattre la bête.

L'enquête mène les joueurs dans la forêt, où ils découvriront un ancien **Tombeau Elfique**. L'élan n'est que l'instrument d'une druidesse du givre nommée **[[Ravisin]]**, qui cherche à venger sa sœur en punissant les Dix-Cités.

[Image of an ancient elven stone tomb in a snowy forest clearing with glowing runes]

### Obtenir la quête
- Rencontrer l'Orateur à l'Hôtel de Ville de [[Bois Isolé]].
- Entendre les rumeurs au **[[Le Menteur Chanceux]]**.

### Récompenses
- Propriété de l'auberge **[[Déglingué]]**.
- Accès au tombeau elfique (objets magiques potentiels).

### Étapes de la quête
- [ ] Traquer l'élan dans la forêt.
- [ ] Découvrir le Tombeau Elfique.
- [ ] Vaincre l'élan et/ou [[Ravisin]].