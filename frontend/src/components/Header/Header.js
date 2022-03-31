import React, {useState} from 'react';
import styles from "./header.module.css"
import SearchBar from "../SearchBar/SearchBar";
import {useRecoilState} from "recoil";
import {isActive} from "../../store/atoms/dropdown";
import Modal from "../Modal/Modal";

const Header = () => {
    const [active, setActive] = useRecoilState(isActive)
    const [modal, setModal] = useState(false)
    return (
        <div className={styles.container}>
            <span className={styles.logo}>AYKI</span>
            <div className={styles.navbar}>
                <span
                    className={styles.navbar_item}
                    onMouseEnter={() => setActive(true)}>
                    Новинки
                </span>
                <span
                    className={styles.navbar_item}
                    onMouseEnter={() => setActive(true)}>
                    Для него
                </span>
                <span
                    className={styles.navbar_item}
                    onMouseEnter={() => setActive(true)}>
                    Для нее
                </span>
            </div>
            <div className="grow"/>
            <div className={styles.details}>
                <SearchBar/>
                <span className={styles.navbar_item} onClick={() => setModal(true)}>Войти</span>
            </div>
            <Modal active={modal} setActive={setModal}>
                <div className="flex justify-center items-center h-[200px] w-[200px] bg-yellow-500">clown</div>
            </Modal>
        </div>
    );
}

export default Header;
