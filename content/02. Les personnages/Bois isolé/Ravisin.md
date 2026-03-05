---
NoteIcon: npc
tags:
  - npc
  - Category/NPC
race: Elfe (Druide du Givre)
gender: Femme
alignment: Neutre Mauvaise
location: "[[Bois Isolé]]"
voice: Sifflante, emplie de haine et de ressentiment.
title: Druidesse du Givre
status: Alive
---

# `=this.file.name`

> [!infobox]+
> # `=this.file.name`
> ![[Portrait_Ravisin.png|cover]]
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
Ravisin est une elfe aux yeux aussi blancs que la neige, vêtue de peaux de bêtes et portant un bâton de bois de fer givré.

* **Traits marquants :** Des motifs de givre semblent gravés à même sa peau sur son visage.
* **Maniérisme :** Elle parle souvent à ses animaux éveillés comme s'ils étaient des égaux, mais traite les humanoïdes avec mépris.

## 🧠 PERSONNALITÉ & RÔLE
* **Idéal :** **Vengeance.** Elle veut faire souffrir les habitants des Dix-Cités pour la mort de sa sœur, Vurnis.
* **Lien :** Sa loyauté va exclusivement à Auril, la Vierge de Glace.
* **Défaut :** **Obsession.** Sa haine l'aveugle et la pousse à des actions risquées.

**Rôle dans l'histoire :**
C'est l'antagoniste derrière la quête [[L'Élan Blanc]]. Elle utilise sa magie pour éveiller des animaux et attaquer les colonies.

%% 
## 🕵️ SECRETS ET INFORMATIONS
* **Secret :** Ravisin est l'une des rares druidesses à savoir comment Auril maintient l'hiver éternel. Elle possède un fragment de chardalyn corrompu.
* **Information :** Elle a éveillé le Plésiosaure de Bremen et l'Élan Blanc.
%%

## ⚔️ COMBAT & STATISTIQUES

```ad-statblock
title: Ravisin (Frost Druid)
*Medium humanoid (elf), Neutral Evil*

- **Armor Class** 13 (leather armor)
- **Hit Points** 67 (9d8 + 27)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|14 (+2)|16 (+3)|12 (+1)|16 (+3)|11 (+0)|

- **Saving Throws** Int +3, Wis +5
- **Skills** Nature +3, Perception +5, Survival +5
- **Senses** darkvision 60 ft., passive Perception 15
- **Languages** Common, Druidic, Elvish
- **Challenge** 5 (1,800 XP)

## Traits

***Spellcasting.*** Ravisin is a 9th-level spellcaster. Her spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). She has the following druid spells prepared:
Cantrips (at will): *druidcraft, frostbite, resistance*
1st level (4 slots): *animal friendship, cure wounds, fog cloud, ice knife*
2nd level (3 slots): *barkskin, moonbeam, spike growth*
3rd