import React from 'react';
import styles from "./products.module.css"
import {BASE_URL} from "../../constants";
import {Link} from "react-router-dom";

const ProductItem = ({product}) => {

    return (
        <Link to={`/catalog/${product.id}`} className={styles.item}>
            <img src={`${BASE_URL}/${product.photos[0].image}`} className="h-[400px] object-cover" alt="photo"/>
            <div className={styles.details}>
                <span>{product.title}</span>
                <span>{product.price} ₽</span>
            </div>
        </Link>
    );
}

export default ProductItem;
