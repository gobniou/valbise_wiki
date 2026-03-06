---
NoteIcon: npc
tags:
  - npc
  - Category/NPC
race: Humain
gender: Homme
alignment: Loyal Bon
location: "[[Bryn Shander]]"
voice: Militaire, ferme, ne perd pas de temps en fioritures.
title: Shérif de Bryn Shander
status: Alive
---

# `=this.file.name`

> [!infobox]+
> # `=this.file.name`
> ![[Portrait_Markham.png|cover]]
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
Le Shérif Markham est un homme au visage carré et à la mâchoire solide. Il commande la milice de la ville avec une efficacité qui lui vaut le respect de tous, même de Naerth.

* **Traits marquants :** Un manteau de fourrure d'ours blanc massif qui le rend encore plus imposant.
* **Maniérisme :** Croise toujours les bras sur son torse en écoutant un rapport.

## 🧠 PERSONNALITÉ & RÔLE
* **Idéal :** **Ordre.** "Les murs de Bryn Shander protègent les gens, ma milice protège les murs."
* **Lien :** Son respect indéfectible pour l'Oratrice [[Duvessa Shane]].
* **Défaut :** **Surcharge.** Il tente de tout gérer seul et commence à montrer des signes d'épuisement.

**Rôle dans l'histoire :**
Principal contact pour les affaires de sécurité. Il peut fournir des renforts ou des ressources si les PJ prouvent leur valeur.

%% 
## 🕵️ SECRETS ET INFORMATIONS
* **Information :** Il soupçonne la présence d'espions du Zhentarim dans sa propre milice mais manque de preuves pour agir sans créer d'émeute.
%%

## ⚔️ COMBAT & STATISTIQUES

```ad-statblock
title: Markham Southwell
*Medium humanoid (human), Lawful Good*

- **Armor Class** 15 (chain shirt)
- **Hit Points** 65 (10d8 + 20)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|14 (+2)|14 (+2)|11 (+0)|12 (+1)|12 (+1)|

- **Skills** Athletics +5, Intimidation +3, Perception +3
- **Challenge** 3 (700 XP)

## Actions

***Multiattack.*** Markham makes two melee attacks.

***Longsword.*** *Melee Weapon Attack:* +5 to hit. *Hit:* 7 (1d8 + 3) slashing.