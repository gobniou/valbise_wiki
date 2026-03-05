---
NoteIcon: npc
tags:
  - npc
  - Category/NPC
race: Naine d'écu
gender: Femme
alignment: Neutre Bonne
location: "[[Bryn Shander]]"
voice: Grave, rocailleuse, avec une pause après chaque phrase.
title: Chasseuse de primes à la retraite
status: Alive
---

# `=this.file.name`

> [!infobox]+
> # `=this.file.name`
> ![[Portrait - Hlin Fleau-des-trolls.png|cover]]
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
**Apparence :** > [!quote] "La justice de Valbise est devenue aussi froide que son vent. Si les lois ne punissent plus les tricheurs, mon marteau le fera."

* **Traits marquants :** Une naine d'un certain âge, aux cheveux gris tressés avec des anneaux de fer. Elle porte une armure de cuir usée mais entretenue et un bouclier cabossé.
* **Maniérisme :** Elle ne boit jamais son alcool d'un trait, elle le sirote en observant la porte de la taverne. Elle a tendance à tapoter son marteau de guerre lorsqu'elle est impatiente.

## 🧠 PERSONNALITÉ & RÔLE
* **Idéal :** **Justice.** "Peu importe qui vous êtes, si vous brisez l'équilibre, vous devez payer."
* **Lien :** Elle se sent responsable de la sécurité des Dix-Cités, même si elle n'est plus officiellement en service.
* **Défaut :** **Méfiance.** Elle a du mal à faire confiance aux autorités locales qu'elle juge corrompues ou incompétentes.

**Rôle dans l'histoire :**
Hlin est le donneur de quête pour **[[Tueur au Cœur de Glace]]**. C'est elle qui remarque le schéma derrière les meurtres et oriente les PJ vers Sephek Kaltro.

## 🕵️ SECRETS ET INFORMATIONS
%% #secret 
**Ce que Hlin sait :**
* **Le Tueur :** Elle est persuadée que Sephek Kaltro est le meurtrier, mais elle est trop vieille pour le traquer seule.
* **L'Indice :** Elle a remarqué que Sephek ne porte jamais de vêtements d'hiver, même par -40°C.
* **Récompense :** Elle dispose d'une petite bourse de 100 po mise de côté pour celui qui fera justice.
%%

## ⚔️ COMBAT & STATISTIQUES
* **Bloc de stats :** Vétéran (**Veteran**) - version naine.
* **Équipement notable :** Marteau de guerre, bouclier, une vieille amulette des nains d'écu.

---
**Notes de session :**
* ```

---

### Ce qui a changé :
1. **Propriété Voix :** Tu peux maintenant définir si ton PNJ a un accent, une voix aiguë ou s'il bégaie directement dans le haut de la fiche.
2. **Correction Callout :** Le bloc `[!quote]` est maintenant bien séparé pour éviter les bugs d'affichage.
3. **Maillage :** Le lien vers la quête du tueur est prêt.

Est-ce que ce template te convient pour la suite ? Si oui, **souhaites-tu que je te prépare un lot de PNJs essentiels (Duvessa Shane, Trovus, Tali, etc.) ?**