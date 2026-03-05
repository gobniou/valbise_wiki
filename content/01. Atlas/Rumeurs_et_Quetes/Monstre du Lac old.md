---
questObtained:
questStatus: In Progress
questGiver: "[[Grynsk Berylbore]]"
questLocationObtained: "[[z_Templates/2-World/Lieux/Les 10-Cités/Bremen/Bremen]]"
questSessionObtained:
questNotes:
questLootAvail: 5 pc par poissonun parchemin de sort d'amitié avec les animaux (optionnel)une bourse contenant 5 po (optionnel)
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

Les personnages peuvent obtenir cette quête juste après leur arrivée à [[z_Templates/2-World/Lieux/Les 10-Cités/Bremen/Bremen]] ou s'ils commencent l'aventure là-bas. La quête commence près des quais, où les personnages tombent sur un Nains d'Écu qui les prend pour des pêcheurs en quête de travail. Toute interaction avec le nain est interrompue par un demi-elfe qui prétend qu'un monstre vivant dans le Maer Dualdon a attaqué et coulé des bateaux de pêche. Le demi-elfe est un chercheur local qui a recueilli les récits de témoins de ces attaques et a conclu qu'il s'agit d'une sorte de bête inhabituelle.

Les personnages qui recherchent le monstre du lac découvrent qu'il s'agit d'un plésiosaure éveillé. Un druide du givre (voir annexe C) a récemment lancé un sort d'éveil sur la créature, lui conférant une Intelligence de 10 et la capacité de communiquer dans la langue commune. En retour, le druide attend du plésiosaure qu'il attaque les bateaux de pêche de Bremen, privant ainsi les pêcheurs de leur gagne-pain et forçant finalement les villageois à partir. Le plésiosaure se sent obligé d'obéir aux souhaits du druide, de peur de perdre ce cadeau magique que représente la conscience. Par conséquent, il attaque tous les habitants de Bremen qui pêchent dans son domaine.

### Obtenir la quête

- Se balader près des quais de [[z_Templates/2-World/Lieux/Les 10-Cités/Bremen/Bremen]]

### Récompenses

- 5 pc par poisson
- un parchemin de sort d'amitié avec les animaux *(optionnel)*
- une bourse contenant 5 po *(optionnel)*
