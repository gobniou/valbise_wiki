---
questObtained: 
questStatus: Not Started
questGiver: "[[Hettie]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Caer-Dineval/Caer-Dineval]]"
questSessionObtained: 
questNotes: 
questLootAvail: Informations sur les Duergars + Amulette de Chardalyn
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

Le village de [[2-World/Lieux/Les 10-Cités/Caer-Dineval/Caer-Dineval]] est sous l'emprise silencieuse d'un culte. Des chevaliers en armure noire occupent **[[2-World/Lieux/Les 10-Cités/Caer-Dineval/Le Caer]]** (le château) et retiennent l'orateur prisonnier. Ces cultistes sont dévoués à **Levistus** et luttent secrètement contre les Duergars.

### Obtenir la quête
- Discuter avec les habitants méfiants à **[[2-World/Lieux/Les 10-Cités/Caer-Dineval/L'Ascension Difficile]]**.
- Tenter d'entrer dans le château.

### Récompenses
- Alliance temporaire avec le culte contre les Duergars.
- Accès aux informations sur la forteresse de **[[Xardorok Sunblight]]**.

### Étapes de la quête
- [ ] S'infiltrer dans [[2-World/Lieux/Les 10-Cités/Caer-Dineval/Le Caer]].
- [ ] Rencontrer **Kadroth**, le chef du culte.
- [ ] Libérer l'Orateur ou pactiser avec les Épées Noires.