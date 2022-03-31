import React from 'react';
import styles from "./banner.module.css"
import clothes from "../../img/clothes.png"

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.text}>
                <span className="text-2xl">Совершенство в мелочах</span>
                <span className="text-xl">С нами вы сможете взглянуть на себя по - новому</span>
            </div>
            <img src={clothes} alt='clothes' className={styles.image}/>
        </div>

    );
}

export default Banner;
