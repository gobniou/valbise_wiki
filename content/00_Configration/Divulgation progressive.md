- **Principe** : Tout ce qui est entouré par `%% #secret` et `%%` est invisible pour vos joueurs sur le wiki.
    
- **Action MJ** : Lorsqu'une information est découverte en jeu, il vous suffit de déplacer le texte **en dehors** des balises `%%` ou de supprimer les balises.
    
- **Sécurité** : Puisque Quartz génère un site statique, le texte caché n'est jamais envoyé au navigateur du joueur. Il n'existe pas dans le code source de la page web.

**Date :** 3 Mars 2026 **Étape validée :** Granularité des Secrets & Nettoyage des Citations.

- **Logique de Secret par Ligne :** On place désormais chaque information sensible sur sa propre ligne entre `%% #secret %%`.
    
- **Action MJ :** Pour divulguer, supprimez simplement les `%%` de la ligne concernée.
    
- **Citations :** Formatage strict en `` pour éviter les bugs d'affichage en mode lecture.