#!/bin/bash
# === Sync des fiches marquées #publié depuis Valbise_MJ vers le vault joueur ===

MJ_DIR="$HOME/Documents/Valbise_MJ"
PJ_DIR="$HOME/Documents/Campagne - Valbise (PJ)"
LOG_FILE="$HOME/Documents/Scripts/sync_valbise.log"

echo "[$(date '+%F %T')] Début de la synchronisation..." >> "$LOG_FILE"

# Parcours des fichiers .md contenant le tag #publié
find "$MJ_DIR" -type f -name "*.md" | while read -r file; do
  if grep -Eq "#publié|#publie" "$file"; then
    # Calcul du chemin relatif
    rel_path="${file#$MJ_DIR/}"
    dest_file="$PJ_DIR/$rel_path"
    dest_dir=$(dirname "$dest_file")

    mkdir -p "$dest_dir"
    cp "$file" "$dest_file"

    echo "[$(date '+%F %T')] Copié : $rel_path" >> "$LOG_FILE"
  fi
done

echo "[$(date '+%F %T')] Fin de la synchro." >> "$LOG_FILE"