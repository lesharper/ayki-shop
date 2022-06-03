import React, {useState} from 'react';
import { useRecoilValue} from "recoil";
import {categoriesSelector} from "../../store/selectors/categories";
import styles from "./table.module.css"
import Modal from "../Modal/Modal";
import AddCategory from "../Controls/AddCategory";
const TCategories = () => {

    const categories = useRecoilValue(categoriesSelector)
    const [openAddModal, setOpenAddModal] = useState(false)
    const tableBody = categories.map((category, key) =>
        <tr key={key}>
            <td>{category.id}</td>
            <td>{category.category}</td>
        </tr>
    )

    console.log(categories)

    return (
        <div>
            <Modal active={openAddModal} setActive={setOpenAddModal}>
                <AddCategory/>
            </Modal>
            <table className={styles.table}>
                <thead className={styles.header}>
                <tr>
                    <th>ID</th>
                    <th>Категория</th>
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


export default TCategories;
