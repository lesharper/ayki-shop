import React from 'react';
import {ShoppingCartIcon} from "@heroicons/react/solid";
import styles from "./cart_icon.module.css";
import {useRecoilValue} from "recoil";
import {basketSelector} from "../../store/selectors/basket";

const CartIcon = ({setOpenCart}) => {

    const basket = useRecoilValue(basketSelector)
    return (
        <div className={styles.container} onClick={() => setOpenCart(true)}>
            <ShoppingCartIcon className={styles.icon}/>
            <sup>{basket.length}</sup>
        </div>

    );
}

export default CartIcon;
