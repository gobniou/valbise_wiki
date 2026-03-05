---
NoteIcon: npc
tags:
  - npc
  - Category/NPC
race: Humain (Possédé)
gender: Homme
alignment: Neutre Mauvais
location: "[[Le Comptoir de Torg]]"
voice: Monotone, glaciale, comme le craquement d'un glacier.
title: Tueur de la Vierge de Glace
status: Alive
---

# `=this.file.name`

> [!infobox]+
> # `=this.file.name`
> ![[Portrait_Sephek_Kaltro.png|cover]]
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
Sephek est un homme élancé dont la peau est d'une pâleur cadavérique. Malgré le froid mordant de Valbise, il ne porte jamais de vêtements d'hiver, se contentant d'une simple chemise en toile fine. 

* **Traits marquants :** Ses yeux sont d'un bleu surnaturel, presque incandescents. Il ne tremble jamais, même au milieu d'un blizzard.
* **Maniérisme :** Il a tendance à fixer les gens sans ciller pendant de longues secondes avant de répondre.

## 🧠 PERSONNALITÉ & RÔLE
* **Idéal :** **Purification.** Il croit fermement que ceux qui trichent avec les sacrifices d'Auril doivent être éliminés pour apaiser la déesse.
* **Lien :** Il est lié à l'esprit d'un druide du givre qui habite son corps.
* **Défaut :** **Détachement.** Il n'éprouve aucune empathie humaine, se voyant comme un simple outil de la nature.

**Rôle dans l'histoire :**
Antagoniste de la quête [[Tueur au Cœur de Glace]]. Il voyage avec la caravane de Torg pour chasser ses victimes dans chaque cité.

%% 
## 🕵️ SECRETS ET INFORMATIONS
* **Secret :** Sephek est techniquement mort. Son corps est animé par l'esprit d'un druide du givre, ce qui explique son immunité au froid et ses capacités de régénération.
* **Information :** S'il est tué, son corps se liquéfie instantanément en une flaque d'eau glacée, ne laissant aucune preuve matérielle derrière lui.
%%

## ⚔️ COMBAT & STATISTIQUES

```ad-statblock
title: Sephek Kaltro
*Medium undead (human), Neutral Evil*

- **Armor Class** 12
- **Hit Points** 75 (10d8 + 30)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|14 (+2)|16 (+3)|10 (+0)|14 (+2)|11 (+0)|

- **Saving Throws** Wis +4
- **Skills** Perception +4, Stealth +4
- **Damage Immunities** cold
- **Senses** passive Perception 14
- **Languages** Common, Druidic
- **Challenge** 3 (700 XP)

## Traits

***Regeneration.*** Sephek regains 5 hit points at the start of his turn if he is in contact with snow or ice and has at least 1 hit point.

***Innate Spellcasting.*** Sephek's innate spellcasting ability is Wisdom (spell save DC 12). He can innately cast the following spells, requiring no material components:
At will: *misty step* (only in snowy/icy terrain)

## Actions

***Multiattack.*** Sephek makes two attacks with his ice longsword.

***Ice Longsword.*** *Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d8 + 2) slashing damage plus 5 (1d10) cold damage.

***Ice Dagger.*** *Ranged Weapon Attack:* +4 to hit, range 20/60 ft., one target. *Hit:* 4 (1d4 + 2) piercing damage plus 3 (1d6) cold damage.