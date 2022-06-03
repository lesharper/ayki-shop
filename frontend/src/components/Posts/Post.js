import React from 'react';
import {motion} from "framer-motion";
import styles from "./post.module.css"

const Post = ({image, title, text, variant}) => {

    const imageVariants = {
        hidden: {
            width: 0,
        },
        visible: {
            width: "500px",
            transition: {
                duration: 0.4
            }
        }
    }

    const textVariants = {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1
        },
    }

    return (
        <div className={styles.post}>

            {variant === 'left' &&
                <motion.img src={image} alt="post"
                            className={styles.image}
                            variants={imageVariants}
                            initial='hidden'
                            whileInView='visible'
                            viewport={{amount: 0.1, once: true}}/>
            }

            <div className={styles.text_wrapper}>
                <motion.span className={styles.title} variants={textVariants} initial='hidden' whileInView='visible'
                             viewport={{amount: 0.3, once: true}}>{title}</motion.span>
                <motion.span
                    className={styles.description}
                    variants={textVariants} initial='hidden' whileInView='visible'
                    viewport={{amount: 0.1, once: true}}>{text}</motion.span>
            </div>

            {variant === 'right' &&
                <motion.img src={image} alt="post" className={styles.image}
                        variants={imageVariants} initial='hidden' whileInView='visible'
                        viewport={{amount: 0.1, once: true}}/>
            }

        </div>
    );
}

export default Post;
