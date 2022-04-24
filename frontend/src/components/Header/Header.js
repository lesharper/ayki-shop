import React, {useEffect, useState} from 'react';
import styles from "./header.module.css"
import SearchBar from "../SearchBar/SearchBar";
import Modal from "../Modal/Modal";
import SignUp from "../Verify/SignUp";
import SignIn from "../Verify/SignIn";
import Tabs from "../Tabs/Tabs";
import {useRecoilState, useRecoilValue} from "recoil";
import {isAuth, userAtom} from "../../store/atoms/user";
import {logout} from "../../requests/user";
import {Link} from "react-router-dom";

const Header = () => {
    const [modal, setModal] = useState(false)
    const [swap, setSwap] = useState(false)


    const [auth, setAuth] = useRecoilState(isAuth)
    const user = useRecoilValue(userAtom)

    const logoutHandler = () => {
        logout()
        setAuth(false)
    }

    const swapHandler = () => setSwap(!swap)

    const link = swap ? 'Я тут впервые' : 'У меня уже есть аккаунт!'

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.logo}>AYKI</Link>
            <Tabs/>
            <div className="grow"/>
            <div className={styles.details}>
                <SearchBar/>

                {auth && <span className={styles.navbar_item} onClick={() => logoutHandler()}>ВЫЙТИ</span>}

                {!auth && <span className={styles.navbar_item} onClick={() => setModal(true)}>ВОЙТИ</span>}

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
