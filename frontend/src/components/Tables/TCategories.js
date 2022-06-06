import React, {startTransition, useState} from 'react';
import {useRecoilRefresher_UNSTABLE, useRecoilValue} from "recoil";
import styles from "./table.module.css"
import Modal from "../Modal/Modal";
import AddCategory from "../Controls/AddCategory";
import {PencilAltIcon, PlusCircleIcon, XIcon} from "@heroicons/react/solid";
import {categories_subcategoriesSelector} from "../../store/selectors/categories_subcategories";
import AddSubcategory from "../Controls/AddSubcategory";
import {deleteCategory} from "../../requests/category";
import {deleteSubategory} from "../../requests/subcategory";

const TCategories = () => {

    const [currentCategoryId, setCurrentCategoryId] = useState(null)

    const category_subs = useRecoilValue(categories_subcategoriesSelector)
    const refreshCategorieSubs = useRecoilRefresher_UNSTABLE(categories_subcategoriesSelector);

    const [openAddCategoryModal, setOpenAddCategoryModal] = useState(false)
    const [openAddSubcategoryModal, setOpenAddSubcategoryModal] = useState(false)

    const categoryMenyHandler = () => setOpenAddCategoryModal(true)
    const subcategoryMenyHandler = (id) => {
        setCurrentCategoryId(id)
        setOpenAddSubcategoryModal(true)
    }

    const tableBody = category_subs.map((category, key) =>
        <>
            <tr key={key} className={styles.wrow}>
                <td className={styles.column}>{category.id}</td>
                <td className={styles.column}>{category.category}</td>
                <td className={styles.column}><PencilAltIcon className={styles.icon}/></td>
                <td className={styles.column}><XIcon className={styles.icon}  onClick={() => deleteCategoryHandler(category.id)}/></td>
            </tr>
            <tr className={styles.subtitle}>
                <td colSpan={3} className={styles.column}>
                    <span>Подкатегории</span>
                </td>
                <td className={styles.column}><PlusCircleIcon className={styles.icon}
                                                              onClick={() => subcategoryMenyHandler(category.id)}/></td>
            </tr>
            {!!category.subcategories.length && category.subcategories.map((subcategory, key) =>
                <tr className={styles.subcategory}>
                    <td>{subcategory.id}</td>
                    <td>{subcategory.subcategory}</td>
                    <td><PencilAltIcon className={styles.icon}/></td>
                    <td><XIcon className={styles.icon} onClick={() => deleteSubcategoryHandler(subcategory.id)}/></td>
                </tr>)}
        </>
    )

    const deleteCategoryHandler = async (id) => {
        await deleteCategory(id)
        startTransition(() => {
            refreshCategorieSubs()
        })
    }

    const deleteSubcategoryHandler = async (id) => {
        await deleteSubategory(id)
        startTransition(() => {
            refreshCategorieSubs()
        })
    }


    return (
        <div>
            <Modal active={openAddCategoryModal} setActive={setOpenAddCategoryModal}>
                <AddCategory/>
            </Modal>
            <Modal active={openAddSubcategoryModal} setActive={setOpenAddSubcategoryModal}>
                <AddSubcategory category_id={currentCategoryId}/>
            </Modal>
            <table className={styles.table}>
                <thead className={styles.header}>
                <tr>
                    <th className={styles.column}>ID</th>
                    <th className={styles.column}>Категория</th>
                    <th className={styles.column}>Изменить</th>
                    <th className={styles.column}>Удалить</th>
                </tr>
                </thead>
            </table>
            <div className={styles.scroll_container}>
                <table className={styles.table}>
                    <tbody className={styles.body}>
                    {tableBody}
                    </tbody>
                </table>
            </div>
            <div className={styles.control}>
                <button onClick={categoryMenyHandler}>Добавить</button>
            </div>
        </div>
    );
}


export default TCategories;
