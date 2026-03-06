---
questObtained:
questStatus: In Progress
questGiver: "[[content/03.Le Bestiaire/Tali]]"
questLocationObtained: "[[2-World/Lieux/Les 10-Cités/Bremen/Bremen]]"
questSessionObtained:
questNotes:
questLootAvail: une sacoche contenant 5 pierres précieuses (10 po chacune)
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

Les personnages récupèrent cette quête en arrivant à [[2-World/Lieux/Les 10-Cités/Bremen/Bremen]]. En se promenant près des quais gelés, ils rencontrent **[[content/03.Le Bestiaire/Tali]]**, un chercheur demi-elfe (ou une chercheuse, selon votre préférence) qui étudie la faune locale. Tali s'inquiète des rapports récents faisant état d'un "monstre" qui terrorise les pêcheurs sur le lac Maer Dualdon, coulant les barques et brisant les filets.

Tali propose aux personnages de louer une barque et de s'aventurer sur le lac pour trouver la créature. Plutôt que de simplement la tuer, Tali demande aux personnages d'observer son comportement et, si possible, de découvrir pourquoi elle est devenue si agressive.



L'enquête révèle que le monstre est un **Plésiosaure** qui a été "éveillé" magiquement par une druidesse du givre nommée **[[Ravisin]]**. La créature est désormais dotée d'une intelligence humaine et parle le Commun. Elle agit par colère et solitude, se sentant obligée de servir les intérêts d'Auril. Les personnages peuvent choisir de combattre la bête ou d'utiliser la diplomatie pour la convaincre de cesser ses attaques et de quitter les eaux de Bremen.

### Obtenir la quête

- Parler à **[[content/03.Le Bestiaire/Tali]]** sur les quais de [[2-World/Lieux/Les 10-Cités/Bremen/Bremen]].
- Entendre les pêcheurs se plaindre à la **[[Place des Cinq-Tavernes]]**.

### Récompenses

- Une sacoche contenant **5 pierres précieuses** d'une valeur de 10 po chacune.
- La reconnaissance des pêcheurs de Bremen (peut faciliter l'obtention d'informations futures).
- %% #secret **Bonus :** Si la créature est épargnée et convaincue de partir, Tali offre également un *Sac de Conservation* (Bag of Holding) s'il s'agit d'une version généreuse de la campagne, ou une recommandation auprès de l'Orateur. %%

### Étapes de la quête

- [ ] Louer une barque aux quais.
- [ ] Explorer les eaux du Maer Dualdon.
- [ ] Survivre à la rencontre avec le Plésiosaure.
- [ ] Faire un rapport à Tali.