import React from 'react';
import styles from "./products.module.css"
import test_img from "../../img/test_img.jpg"

const ProductItem = ({product}) => {
    return (
        <div className={styles.item}>
            <img src={test_img} alt="photo"/>
            <div className={styles.details}>
                <span>{product.title}</span>
                <span>{product.price} ₽</span>
            </div>
        </div>
    );
}

export default ProductItem;
