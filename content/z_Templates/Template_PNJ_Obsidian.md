---
type: PNJ
lieu: test
faction: dz
revealed: true
---

# {{title}}

## 🧾 Informations générales
**Rôle :**  
**Race :**  
**Sexe :**  
**Lieu principal :** [[{{title}}]]  
**Faction associée :**  

---

## 👁️ Vue Joueurs
> ⚠️ Cette section se met à jour automatiquement selon les informations cochées plus bas.  
> Les joueurs ne voient **que les éléments marqués comme révélés `[x]`**.

```dataview
LIST texte
FROM ""
WHERE file.path = this.file.path
FLATTEN file.tasks AS t
WHERE t.completed
FLATTEN t.text AS texte

```

---

## 📜 Informations détaillées (MJ)
> Coche les éléments que les joueurs ont découverts pour les rendre visibles dans la **Vue Joueurs**.

### Apparence
- [x] Apparence générale : (ex : blonde, yeux verts)
- [x] Détails marquants : (ex : cicatrice, tenue, voix...)

### Relations
- [ ] Travaille pour [[Nom de la faction]]
- [ ] A aidé les PJ lors de [[Session 03]]
- [ ] En conflit avec [[Autre PNJ]]

### Secrets
- [ ] C’est un démon déguisé
- [ ] Manipule [[Eirik le Clerc]] dans l’ombre
- [ ] Possède un [[Grimoire de Krill]]

### Histoire personnelle
- [ ] Originaire de [[Huvud]]
- [ ] A perdu sa famille à cause des [[Mages Noirs]]
- [ ] Rêve de rejoindre [[L’Académie]]

---

## 🧩 Notes MJ
> 🔒 Ces éléments ne sont **jamais** destinés aux joueurs.  
> Mets ici tes rappels, motivations cachées, liens secrets, ou pistes de développement.

- Objectif caché :  
- Lien avec la trame principale :  
- Risque / potentiel de corruption :  

---

## 🧙‍♂️ Apparitions
- [[Session 01]] — première rencontre
- [[Session 05]] — discussion sur les Mages Noirs
