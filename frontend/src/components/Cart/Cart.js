import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import styles from "./cart.module.css"
import {XIcon} from "@heroicons/react/solid";
import Loader from "../Loader/Loader";

const Cart = ({openCart, setOpenCart}) => {

    const cartVariants = {
        hidden: {
            y: -1000,
            transition: {duration: 1}
        },
        visible: {
            y: 0,
            transition: {duration: 1}

        },
        exit: {
            y: -1000,
            transition: {duration: 1}
        }
    }

    return (
        <AnimatePresence onExitComplete={() => setOpenCart(false)}>
            {
                openCart &&
                <motion.div className={styles.cart} variants={cartVariants} initial='hidden' animate='visible' exit='exit'>
                    <XIcon className={styles.icon} onClick={() => setOpenCart(false)}/>
                    <span className="text-6xl uppercase font-bold">Корзина</span>
                </motion.div>
            }
        </AnimatePresence>

    );
}

export default Cart;
