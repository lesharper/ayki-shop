import React from 'react';
import styles from "./redirect-button.module.css"

const RedirectButton = ({image, text}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image} style={{background: `url(${image})`}}/>
            <span className={styles.text}>{text}</span>
        </div>
    );
}

export default RedirectButton;
