---
type: PNJ
lieu:
faction:
revealed: true
---

# {{title}}

## 🧾 Informations générales
**Rôle :**  
**Race :**  Humain
**Sexe :**  
**Lieu principal :** [[{{title}}]]  
**Faction associée :**  

---

## 👁️ Vue Joueurs
> ⚠️ Cette section se met à jour automatiquement selon les informations cochées plus bas.  
> Les joueurs ne voient **que les éléments marqués comme révélés `[x]`**.

```dataview
LIST
FROM "02 - Personnages/PNJ"
WHERE file.name = this.file.name
FLATTEN file.lists AS infos
WHERE infos.checked
FLATTEN infos.text AS texte
RETURN texte
