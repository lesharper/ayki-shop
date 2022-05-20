import React, {useState} from 'react';
import styles from "./balance.module.css";
import {PlusCircleIcon} from "@heroicons/react/solid";
import Modal from "../Modal/Modal";
import Deposit from "../Deposit/Deposit";

const Balance = ({balance}) => {
    const [openModal, setOpenModal] = useState(false)
    const modalHandler = () => setOpenModal(!openModal)

    return (
        <div className={styles.container}>
            <PlusCircleIcon className={styles.icon} onClick={modalHandler}/>
            <span className={styles.balance}>
                {balance} ₽
            </span>

            <Modal active={openModal} setActive={setOpenModal}>
                <Deposit/>
            </Modal>
        </div>
    );
}

export default Balance;
