import React, {startTransition, useState} from 'react';
import {useRecoilRefresher_UNSTABLE, useRecoilValue} from "recoil";

import styles from "./table.module.css";
import {productsSelector} from "../../store/selectors/products";
import Modal from "../Modal/Modal";
import AddProduct from "../Controls/AddProduct";
import {PencilAltIcon, PlusCircleIcon, XIcon} from "@heroicons/react/solid";
import {deleteProduct} from "../../requests/product";

const TProducts = () => {
    const products = useRecoilValue(productsSelector)
    const [openAddModal, setOpenAddModal] = useState(false)

    const refreshProducts = useRecoilRefresher_UNSTABLE(productsSelector);

    const tableBody = products.map((product, key) =>
        <>
            <tr key={key} className={styles.wrow}>
                <td className={styles.column}>{product.id}</td>
                <td className={styles.column}>{product.title}</td>
                <td className={styles.column_description}>{product.description}</td>
                <td className={styles.column}>{product.price} ₽</td>
                <td className={styles.column}>{product.category_id}</td>
                <td className={styles.column}>{product.sex_id}</td>
                <td className={styles.column}><PencilAltIcon className={styles.icon}/></td>
                <td className={styles.column}><XIcon className={styles.icon} onClick={() => deleteProductHandler(product.id)}/></td>
            </tr>
        </>

    )

    const deleteProductHandler = async (id) => {
        await deleteProduct(id)
        startTransition(() => {
            refreshProducts()
        })
    }

    return (
        <div>
            <Modal active={openAddModal} setActive={setOpenAddModal}>
               <AddProduct/>
            </Modal>
            <table className={styles.table}>
                <thead className={styles.header}>
                <tr>
                    <th className={styles.column}>ID</th>
                    <th className={styles.column}>Название</th>
                    <th className={styles.column_description}>Описание</th>
                    <th className={styles.column}>Цена</th>
                    <th className={styles.column}>Категория</th>
                    <th className={styles.column}>Пол</th>
                    <th className={styles.column}>Изменить</th>
                    <th className={styles.column}>Удалить</th>
                </tr>
                </thead>
            </table>
            <table className={styles.table}>
                <div className={styles.scroll_container}>
                    <tbody className={styles.body}>
                    {tableBody}
                    </tbody>
                </div>
            </table>
            <div className={styles.control}>
                <button onClick={() => setOpenAddModal(true)}>Добавить</button>
            </div>
        </div>
    );
}

export default TProducts;
