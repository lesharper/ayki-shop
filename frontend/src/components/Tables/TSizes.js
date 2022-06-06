import React, {startTransition, useState} from 'react';
import Modal from "../Modal/Modal";
import styles from "./table.module.css";
import AddSize from "../Controls/AddSize";
import {PencilAltIcon, XIcon} from "@heroicons/react/solid";
import {useRecoilRefresher_UNSTABLE, useRecoilValue} from "recoil";
import {sizesSelector} from "../../store/selectors/sizes";
import {deleteSize} from "../../requests/size";

const TSizes = () => {

    const sizes = useRecoilValue(sizesSelector)
    const [openAddModal, setOpenAddModal] = useState(false)

    const refreshSizes= useRecoilRefresher_UNSTABLE(sizesSelector);

    const tableBody = sizes.map((size, key) =>
        <tr key={key} className={styles.wrow}>
            <td className={styles.column}>{size.id}</td>
            <td className={styles.column}>{size.size}</td>
            <td className={styles.column}><PencilAltIcon className={styles.icon}/></td>
            <td className={styles.column}><XIcon className={styles.icon} onClick={() => deleteSizeHandler(size.id)}/></td>
        </tr>
    )

    const deleteSizeHandler = async (id) => {
        await deleteSize(id)
        startTransition(() => {
            refreshSizes()
        })
    }

    return (
        <div>
            <Modal active={openAddModal} setActive={setOpenAddModal}>
                <AddSize/>
            </Modal>
            <table className={styles.table}>
                <thead className={styles.header}>
                <tr>
                    <th className={styles.column}>ID</th>
                    <th className={styles.column}>Размер</th>
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
                <button onClick={() => setOpenAddModal(true)}>Добавить</button>
            </div>
        </div>
    );
}

export default TSizes;
