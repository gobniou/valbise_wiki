---
NoteIcon: npc
tags:
  - npc
  - Category/NPC
race: Humaine
gender: Femme
alignment: Neutre Bonne
location: "[[Havre-du-Levant]]"
voice: Haute, autoritaire, avec un accent traînant des régions côtières.
title: Capitaine de la Milice de Havre-du-Levant
status: Alive
---

# `=this.file.name`

> [!infobox]+
> # `=this.file.name`
> ![[Portrait_Imdra.png|cover]]
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
Imdra est une femme d'action qui ne se sent à l'aise qu'avec une épée à la main. Elle supervise les exécutions et la défense de Havre-du-Levant avec une rigueur absolue.

* **Traits marquants :** Porte une armure de plaques gravée qui semble trop lourde pour une personne ordinaire.
* **Maniérisme :** Elle vérifie constamment la garde de son épée du pouce.

## 🧠 PERSONNALITÉ & RÔLE
* **Idéal :** **Devoir.** "La loi est le seul rempart contre la folie de cet hiver."
* **Lien :** Les pêcheurs de Havre-du-Levant, qu'elle considère comme sa famille étendue.
* **Défaut :** **Sévérité.** Elle a parfois du mal à faire la part des choses entre la survie et la cruauté.

**Rôle dans l'histoire :**
Donneuse de la quête [[Maudite Sorcellerie]]. Elle est l'autorité militaire locale.

%% 
## 🕵️ SECRETS ET INFORMATIONS
* **Inquiétude :** Elle est secrètement hantée par l'exécution de Dzaan, se demandant si elle a brûlé un homme ou une illusion.
%%

## ⚔️ COMBAT & STATISTIQUES

```ad-statblock
title: Imdra Arlaggath
*Medium humanoid (human), Neutral Good*

- **Armor Class** 18 (plate)
- **Hit Points** 65 (10d8 + 20)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|10 (+0)|14 (+2)|12 (+1)|12 (+1)|13 (+1)|

- **Skills** Athletics +6, Perception +3
- **Challenge** 3 (700 XP)

## Actions

***Multiattack.*** Imdra makes two melee attacks.

***Greatsword.*** *Melee Weapon Attack:* +6 to hit. *Hit:* 11 (2d6 + 4) slashing.