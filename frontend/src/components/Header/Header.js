import React, {useState} from 'react';
import styles from "./header.module.css"
import SearchBar from "../SearchBar/SearchBar";
import {useRecoilState} from "recoil";
import {isActive} from "../../store/atoms/dropdown";
import Modal from "../Modal/Modal";
import SignUp from "../Verify/SignUp";
import SignIn from "../Verify/SignIn";

const Header = () => {
    const [active, setActive] = useRecoilState(isActive)
    const [modal, setModal] = useState(false)
    const [swap, setSwap] = useState(false)
    const swapHandler = () => setSwap(!swap)
    const link = swap ? 'Я тут впервые' : 'У меня уже есть аккаунт!'
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
                <div className="flex flex-col justify-center items-center h-[450px] w-[450px] bg-yellow-500 rounded-md shadow-md border-4 border-black">
                    {swap ? <SignIn/> : <SignUp/>}
                    <span className="m-2 text-black cursor-pointer border-b-2 border-black border-dashed" onClick={swapHandler}>{link}</span>
                </div>
            </Modal>
        </div>
    );
}

export default Header;
