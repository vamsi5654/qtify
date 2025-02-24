import React from "react";
import styles from "./AlbumCard.module.css";
import { Chip } from "@mui/material";

function AlbumCard({ albumImage, albumName, follows }) {
  return (
    <div className={styles.card}>
      <img src={albumImage} alt={albumName} className={styles.albumImage} />
      <div className={styles.info}>
        <Chip label={`${follows} Follows`} className={styles.chip} />
        <h3 className={styles.albumName}>{albumName}</h3>
      </div>
    </div>
  );
}

export default AlbumCard;
