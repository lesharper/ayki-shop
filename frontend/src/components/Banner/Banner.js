import React from 'react';
import styles from "./banner.module.css"
import clothes from "../../img/clothes.png"
import {motion} from "framer-motion"

const textVariants = {
    hidden: {
        scale: 0,
        y: 500,
        opacity: 0},
    visible: {
        scale: 1,
        y: 0,
        opacity: 1
    },
}

const Banner = () => {
    return (
        <div className={styles.banner}>
            <motion.div className={styles.text} variants={textVariants} initial='hidden' animate='visible'>
                <span>Совершенство в мелочах</span>
                <span>Создайте свой стиль с нами</span>
            </motion.div>
            <img src={clothes} alt='clothes' className={styles.image}/>
        </div>
    );
}

export default Banner;
