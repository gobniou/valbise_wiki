---
NoteIcon: npc
tags:
  - npc
  - Category/NPC
race: Humain (Possédé)
gender: Homme
alignment: Neutre Mauvais
location: "[[Le Comptoir de Torg]]"
voice: Froide, monotone, comme si chaque mot lui coûtait un effort.
title: Garde de caravane / Tueur d'Auril
status: Alive
---

# `=this.file.name`

> [!infobox]+
> # `=this.file.name`
> ![[Portrait - Sephek Kaltro.png|cover]]
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
Sephek est un homme grand et mince, aux traits anguleux. Malgré le froid polaire, il ne porte qu'une chemise de laine légère et un gilet de cuir, sans manteau ni gants. Ses yeux sont d'un bleu surnaturel, presque brillants.

* **Traits marquants :** Il ne tremble jamais de froid. Sa peau est pâle, presque translucide. Il dégage une odeur d'ozone et de glace ancienne.
* **Maniérisme :** Il reste souvent immobile pendant de longues minutes, fixant le vide. Il ne cligne que très rarement des yeux.

## 🧠 PERSONNALITÉ & RÔLE
* **Idéal :** **Purge.** "Ceux qui ne sacrifient pas assez à la Vierge de Glace ne méritent pas la chaleur de la vie."
* **Lien :** Il est l'instrument de la volonté d'Auril à travers l'esprit du druide du givre qui l'habite.
* **Défaut :** **Arrogance divine.** Il se croit intouchable tant que l'hiver perdure.

**Rôle dans l'histoire :**
Sephek est le tueur en série recherché par Hlin Fléau-des-trolls. Il exécute ceux qui ont triché à la loterie des sacrifices dans les Dix-Cités.

%% 
## 🕵️ SECRETS ET INFORMATIONS
* **Secret :** Il est possédé par l'esprit de **Ravisin**, ou du moins par un esprit lié à son cercle de druides. Il est techniquement mort-vivant mais son corps est préservé par le froid magique.
* **Capacité :** Il peut fabriquer des armes de glace instantanément.
* **Information :** S'il est vaincu, son corps fond en une flaque d'eau glacée, ne laissant que ses vêtements et son équipement derrière lui.
%%

## ⚔️ COMBAT & STATISTIQUES

> [!statblock]+ Sephek Kaltro
> **CA :** 12 | **PV :** 75 (10d8 + 30) | **Vitesse :** 9m
> ---
> **STR** 14 (+2) | **DEX** 14 (+2) | **CON** 16 (+3) | **INT** 10 (+0) | **WIS** 14 (+2) | **CHA** 11 (+0)
> ---
> **Immunités :** Froid
> **Sens :** Perception passive 12
> **Langues :** Commun, Druidique
> **Puissance (FP) :** 3 (700 XP)
> ---
> **Régénération :** Sephek récupère 5 PV au début de son tour s'il est dans un environnement froid et s'il a au moins 1 PV.
> ---
> ### Actions
> **Multiattaque :** Il effectue deux attaques d'Épée Longue de Glace.
> **Épée Longue de Glace :** *Attaque au corps à corps :* +4 au toucher, rallonge 1.5m, une cible. *Dégâts :* 6 (1d8 + 2) tranchants + 5 (1d10) de froid.
> **Cimeterre de Glace (Lancer) :** *Attaque à distance :* +4 au toucher, portée 6/18m. *Dégâts :* 5 (1d6 + 2) tranchants + 3 (1d6) de froid.

---
**Notes de session :**
* ```

---

### Pourquoi c'est plus "complet" :
1. **Bloc Statistique Visuel :** J'utilise un bloc `[!statblock]` qui simule l'apparence d'un manuel de monstre. C'est lisible et compact.
2. **Capacités Spéciales :** Pour Sephek, j'ai inclus sa **Régénération** et ses dégâts de froid supplémentaires, qui sont ses marques de fabrique.
3. **Autonomie :** Tu n'as plus besoin de chercher le bloc de stat "Vétéran" ou "Espion" ailleurs, tout est là.

**Est-ce que tu veux que je reprenne les PNJ précédents (Duvessa, Hlin, Naerth) pour leur ajouter leur bloc de statistiques respectif ?** (Note : Duvessa et Naerth sont des "Nobles", donc leurs stats sont assez simples, mais c'est toujours utile).