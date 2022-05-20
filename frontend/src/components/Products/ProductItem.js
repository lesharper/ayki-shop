import React from 'react';
import styles from "./products.module.css"
import default_img from "../../img/default_image.svg"

const ProductItem = ({product}) => {
    return (
        <div className="flex flex-col h-[400px] w-[300px] bg-zinc-300  m-5 shadow-md rounded-md cursor-pointer">

            <div className="flex justify-between h-1/5  p-4 bg-zinc-400">
                <span>{product.category}</span>
                <span>{product.title}</span>
            </div>

            <div className="flex justify-center items-center h-4/5 w-full">
                <img src={default_img} alt="default" className="h-36"/>
            </div>

            <div className="flex justify-between bg-zinc-400 h-1/5 p-4">
                <span>Цена:</span>
                <span>{product.price}</span>
            </div>


        </div>
    );
}

export default ProductItem;
