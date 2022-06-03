import React, {useState} from 'react';
import {useRecoilValue} from "recoil";

import styles from "./table.module.css";
import {productsSelector} from "../../store/selectors/products";
import Modal from "../Modal/Modal";
import AddProduct from "../Controls/AddProduct";

const TProducts = () => {
    const products = useRecoilValue(productsSelector)
    const [openAddModal, setOpenAddModal] = useState(false)

    const tableBody = products.map((product, key) =>
        <tr key={key}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price} ₽</td>
            <td>{product.category_id}</td>
            <td>{product.sex_id}</td>
        </tr>
    )


    return (
        <div>
            <Modal active={openAddModal} setActive={setOpenAddModal}>
               <AddProduct/>
            </Modal>
            <table className={styles.table}>
                <thead className={styles.header}>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Категория</th>
                    <th>Пол</th>
                </tr>
                </thead>
                <tbody className={styles.body}>
                {tableBody}
                </tbody>
            </table>
            <div className={styles.control}>
                <button onClick={() => setOpenAddModal(true)}>Добавить</button>
            </div>
        </div>
    );
}

export default TProducts;
