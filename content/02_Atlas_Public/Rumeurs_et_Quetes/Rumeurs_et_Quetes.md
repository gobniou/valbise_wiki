`BUTTON[button_quest]`

```dataview
TABLE WITHOUT ID link(file.name) AS "Quest Name", questStatus AS "Status", questGiver AS "Quest Giver", questLocationObtained AS "Location", questSessionObtained AS "Session", questLootAvail AS "Available Rewards", questLookEarned AS "Acquired Rewards"
from "2-Campagne" AND #quest
where questStatus = "In Progress"
```

```meta-bind-button
label: Nouvelle Quête
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplateQuest.md"
    fileName: Nouvelle Quête
```




