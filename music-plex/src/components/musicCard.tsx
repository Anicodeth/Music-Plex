import React from 'react';
import styles from "../styles/musicCard.module.css"

export default function MusicCard(props:any) {
    const { artist, songTitle, imageUrl } = props;

    return (
        <div className={styles['card-container']}>
            <div className={styles['card-image']}>
                <img className={styles['image']} src={imageUrl} alt={`Cover for ${songTitle}`} />
            </div>
            <div className={styles['card-content']}>
                <h4 className={styles['content-title']}>{artist}</h4>
                <p className={styles['content-text']}>{songTitle}</p>
            </div>
        </div>
    );
}
