import React, {startTransition} from 'react';
import {useRecoilRefresher_UNSTABLE, useRecoilValue} from "recoil";
import {productsSelector} from "../../store/selectors/products";
import {useParams} from "react-router";
import ImageTabs from "../../components/ImageTabs/ImageTabs";
import {HeartIcon, ShoppingBagIcon} from "@heroicons/react/outline";
import styles from "./product.module.css"
import {addInBasket} from "../../requests/basket";
import {basketSelector} from "../../store/selectors/basket";

const Product = () => {

    const {id} = useParams()
    const products = useRecoilValue(productsSelector)
    const product = products.filter(item => item.id === id)[0]

    const refreshBasket = useRecoilRefresher_UNSTABLE(basketSelector);

    const addBasketHandler = async () => {
        const response = await addInBasket({product_id: id})
        startTransition(() => {
            refreshBasket()
        })
        console.log(response)
    }

    const addFavoriteHandler = async () => {
        console.log('Norm test')
    }
    return (
        <div className={styles.page}>

                <ImageTabs images={product.photos}/>

                <div className={styles.info}>
                   <span className={styles.title}>{product.title}</span>
                   <span className={styles.price}>{product.price} ₽</span>
                   <span className={styles.description}>{product.description}</span>

                    <div className={styles.detail_container}>
                        <button className={styles.btnB} onClick={addBasketHandler}>
                            <ShoppingBagIcon className={styles.icon}/>
                            В корзину
                        </button>
                        <button className={styles.btnT} onClick={addFavoriteHandler}>
                            <HeartIcon className={styles.icon}/>
                            В избранные
                        </button>
                    </div>

                </div>
        </div>
    );
}

export default Product;
