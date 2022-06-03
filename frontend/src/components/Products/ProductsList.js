import React from 'react';
import styles from "./products.module.css"
import {useRecoilValue} from "recoil";
import {productsSelector} from "../../store/selectors/products";
import ProductItem from "./ProductItem";

const ProductsList = () => {

    const catalog = useRecoilValue(productsSelector)

    return (
        <div className="flex justify-center w-full bg-white p-5 flex-wrap content-start bg-yellow-600">
            {catalog.map((product, key) => <ProductItem key={key} product={product}/>)}
        </div>
    );
}

export default ProductsList;
