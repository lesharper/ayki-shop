import React from 'react';
import {ShoppingCartIcon} from "@heroicons/react/solid";
import styles from "./cart_icon.module.css";

const CartIcon = ({setOpenCart}) => {
    return (
        <div className={styles.container} onClick={() => setOpenCart(true)}>
            <ShoppingCartIcon className={styles.icon}/>
            <sup>0</sup>
        </div>

    );
}

export default CartIcon;
