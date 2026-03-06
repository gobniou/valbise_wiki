---
NoteIcon: npc
tags:
  - npc
  - Category/NPC
race: Draconide (Argent)
gender: Homme
alignment: Neutre Bon
location: "[[Caer-Konig]]"
voice: Éraillée, souvent interrompue par un hoquet ou un rire nerveux.
title: Orateur de Caer-Konig
status: Alive
---

# `=this.file.name`

> [!infobox]+
> # `=this.file.name`
> ![[Portrait_Trovus.png|cover]]
> ###### Détails Personnage
> Type | Stat |
> ---|---|
> Race | `INPUT[text:race]` |
> Sexe | `INPUT[text:gender]` |
> Alignement | `INPUT[text:alignment]` |
> Voix | `INPUT[text:voice]` |
> Localisation | `INPUT[suggester(optionQuery(#Category/Settlement)):location]` |
> Statut | `INPUT[inlineSelect(option(Alive), option(Dead), option(Missing)):status]` |

## 👤 DESCRIPTION
Trovus est un draconide d'argent imposant, mais il a l'air perpétuellement épuisé. Ses écailles sont ternes et il sent souvent la bière forte de Glen.

* **Traits marquants :** Il porte toujours une armure de plaques dépareillée et un vieux tabard de milicien de Neverwinter.
* **Maniérisme :** Il a tendance à oublier les noms des gens ou la raison pour laquelle il est entré dans une pièce à cause de son état d'ébriété.

## 🧠 PERSONNALITÉ & RÔLE
* **Idéal :** **Protection.** Malgré ses problèmes d'alcool, il se soucie sincèrement des habitants de Caer-Konig.
* **Lien :** Sa fierté d'ancien capitaine de la milice, un passé qu'il regrette de ne pas honorer davantage.
* **Défaut :** **Alcoolisme.** Il noie ses souvenirs et son sentiment d'impuissance dans la boisson.

**Rôle dans l'histoire :**
Donneur de la quête [[L'Invisible]]. Il a besoin d'aide pour résoudre les vols mystérieux dans sa ville, car il n'est plus en état de le faire seul.

%% 
## 🕵️ SECRETS ET INFORMATIONS
* **Information :** Trovus a vu des "ombres grises" (des nains duergars invisibles) près du fort en ruine, mais il a été tourné en dérision.
* **Aide :** Si les PJ l'aident à rester sobre quelques heures, il peut s'avérer être un combattant redoutable.
%%

## ⚔️ COMBAT & STATISTIQUES

```ad-statblock
title: Trovus
*Medium humanoid (dragonborn), Neutral Good*

- **Armor Class** 16 (broken plate)
- **Hit Points** 58 (9d8 + 18)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|13 (+1)|14 (+2)|10 (+0)|11 (+0)|10 (+0)|

- **Saving Throws** Str +5, Con +4
- **Skills** Athletics +5, Intimidation +2
- **Damage Resistances** cold
- **Senses** passive Perception 10
- **Languages** Common, Draconic
- **Challenge** 3 (700 XP)

## Traits

***Cold Breath (1/Day).*** Trovus exhales a 15-foot cone of ice. Each creature in that area must make a DC 12 Constitution saving throw, taking 7 (2d6) cold damage on a failed save, or half as much damage on a successful one.

***Drunk.*** Trovus has disadvantage on attack rolls and ability checks unless he has taken a short rest without drinking.

## Actions

***Multiattack.*** Trovus makes two longsword attacks.

***Longsword.*** *Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) if used with two hands.