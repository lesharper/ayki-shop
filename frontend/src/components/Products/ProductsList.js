import React from 'react';
import styles from "./products.module.css"
import {useRecoilValue} from "recoil";
import {catalogSelector} from "../../store/selectors/catalog";
import ProductItem from "./ProductItem";

const ProductsList = () => {

    const catalog = useRecoilValue(catalogSelector)

    return (
        <div className="flex justify-center w-full bg-white p-5 flex-wrap content-start">
            {catalog.map((product, key) => <ProductItem key={key} product={product}/>)}
        </div>
    );
}

export default ProductsList;
