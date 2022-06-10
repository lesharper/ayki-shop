import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import styles from "./cart.module.css"
import {XIcon} from "@heroicons/react/solid";
import {useRecoilValue} from "recoil";
import {basketSelector} from "../../store/selectors/basket";
import {Link} from "react-router-dom";
import {BASE_URL} from "../../constants";

const Cart = ({openCart, setOpenCart}) => {

    const cartVariants = {
        hidden: {
            y: -1000,
            transition: {duration: 1}
        },
        visible: {
            y: 0,
            transition: {duration: 1}

        },
        exit: {
            y: -1000,
            transition: {duration: 1}
        }
    }

    const basket = useRecoilValue(basketSelector)

    const productsInBasket = basket.map((product, key) =>
        <Link to={`/catalog/${product.id}`} className={styles.item} key={key} onClick={() => setOpenCart(false)}>
            <img src={`${BASE_URL}/${product.photos[0].image}`} className="h-[400px] object-cover" alt="photo"/>
            <div className={styles.details}>
                <span>{product.title}</span>
                <span>{product.price} ₽</span>
            </div>
        </Link>
    )
    return (
        <AnimatePresence onExitComplete={() => setOpenCart(false)}>
            {
                openCart &&
                <motion.div className={styles.cart} variants={cartVariants} initial='hidden' animate='visible' exit='exit'>
                    <div className="flex w-full h-[150px] items-center justify-between p-10">
                        <span className="text-6xl uppercase font-bold">Корзина</span>
                        <XIcon className={styles.icon} onClick={() => setOpenCart(false)}/>
                    </div>

                    <div className="flex justify-around w-full">
                        <section className={styles.list}>
                            {productsInBasket}
                        </section>

                        <div className="sticky top-10 flex flex-col bg-black h-[500px] w-[500px] text-white">
                            <span className="text-2xl p-10 bg-zinc-800 uppercase">Итого: 0 ₽</span>
                            <div className="flex flex-col justify-between items-center h-full p-5">
                                <input type="text" className="p-3 w-[400px]  outline-none text-black rounded-md" placeholder='Номер карты'/>
                                <button className="w-full p-5 bg-zinc-800 uppercase hover:bg-zinc-700">Оплатить</button>
                            </div>

                        </div>
                    </div>

                </motion.div>
            }
        </AnimatePresence>

    );
}

export default Cart;
