import React from 'react';
import styles from "./products.module.css"
import {useRecoilValue} from "recoil";
import {productsSelector} from "../../store/selectors/products";
import ProductItem from "./ProductItem";
import {useParams} from "react-router";

const ProductsList = () => {

    const catalog = useRecoilValue(productsSelector)

    const {query, sex} = useParams()

    console.log(query, sex)
    return (
        <div className={styles.list}>
            {catalog.map((product, key) => <ProductItem key={key} product={product}/>)}
        </div>
    );
}

export default ProductsList;
