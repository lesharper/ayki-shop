import React from 'react';
import {useRecoilValue} from "recoil";
import {productsSelector} from "../../store/selectors/products";
import {useParams} from "react-router";
import ImageTabs from "../../components/ImageTabs/ImageTabs";
import {HeartIcon, ShoppingBagIcon} from "@heroicons/react/outline";
import styles from "./product.module.css"

const Product = () => {

    const {id} = useParams()
    const products = useRecoilValue(productsSelector)
    const product = products.filter(item => item.id === id)[0]
    return (
        <div className="flex items-center h-screen">

                <ImageTabs images={product.photos}/>

                <div className={styles.info}>
                   <span className={styles.title}>{product.title}</span>
                   <span className={styles.price}>{product.price} ₽</span>
                   <span className={styles.description}>{product.description}</span>

                    <div className={styles.detail_container}>
                        <button className={styles.btnB}>
                            <ShoppingBagIcon className={styles.icon}/>
                            В корзину
                        </button>
                        <button className={styles.btnT}>
                            <HeartIcon className={styles.icon}/>
                            В избранные
                        </button>
                    </div>

                </div>
        </div>
    );
}

export default Product;
