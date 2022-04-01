import React from 'react';
import styles from "./banner.module.css"
import clothes from "../../img/clothes.png"
import {motion} from "framer-motion"

const imgVariants = {
    hidden: {scale: 0},
    visible: {scale: 1},
}
const textVariants = {
    hidden: {scale: 0},
    visible: {scale: 1},
}

const Banner = () => {
    return (
        <div className={styles.banner}>
            <motion.div className={styles.text} variants={textVariants} initial='hidden' animate='visible'>
                <span className="text-2xl">Совершенство в мелочах</span>
                <span className="text-xl">С нами вы сможете взглянуть на себя по - новому</span>
            </motion.div>
            <motion.img src={clothes} alt='clothes' className={styles.image} variants={imgVariants} initial='hidden'
                        animate='visible'/>
        </div>
    );
}

export default Banner;
