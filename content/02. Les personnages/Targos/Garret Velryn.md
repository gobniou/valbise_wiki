---
NoteIcon: npc
tags:
  - npc
  - Category/NPC
race: Humain
gender: Homme
alignment: Neutre Bon
location: "[[2-World/Lieux/Les 10-Cités/Targos/Targos]]"
voice: Assurée, calme, typique d'un montagnard.
title: Guide de Haute Montagne
status: Missing
---

# `=this.file.name`

> [!infobox]+
> # `=this.file.name`
> ![[Portrait_Garret.png|cover]]
> ###### Détails Personnage
> Type | Stat |
> ---|---|
> Race | `INPUT[text:race]` |
> Sexe | `INPUT[text:gender]` |
> Alignement | `INPUT[text:alignment]` |
> Voix | `INPUT[text:voice]` |
> Localisation | `INPUT[suggester(optionQuery(#Category/Settlement)):location]` |
> Statut | `INPUT[inlineSelect(option(Alive), option(Dead), option(Missing)):status]` |

**Rôle dans l'histoire :**
Objectif de la quête [[Escalade de la Montagne]]. Il est le meilleur guide pour le [[Cairn de Kelvin]].