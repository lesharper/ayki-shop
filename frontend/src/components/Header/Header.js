import React, {useState} from 'react';
import styles from "./header.module.css"
import SearchBar from "../SearchBar/SearchBar";
import Modal from "../Modal/Modal";
import SignUp from "../Verify/SignUp";
import SignIn from "../Verify/SignIn";
import Tabs from "../NavTabs/NavTabs";
import {useRecoilValue} from "recoil";
import {isAuth, userAtom} from "../../store/atoms/user";
import {Link} from "react-router-dom";
import Cart from "../Cart/Cart";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import Balance from "../Balance/Balance";
import CartIcon from "../CartIcon/CartIcon";

const Header = () => {
    const [modal, setModal] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [swap, setSwap] = useState(false)

    const auth = useRecoilValue(isAuth)
    const user = useRecoilValue(userAtom)

    const userBalance = () => parseFloat(user.balance)
    const swapHandler = () => setSwap(!swap)

    const link = swap ? 'Я тут впервые' : 'У меня уже есть аккаунт!'

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.logo}>AYKI</Link>
            <Tabs/>
            <div className="grow"/>
            <div className={styles.details}>
                <SearchBar/>
                {!auth && <span className={styles.navbar_item} onClick={() => setModal(true)}>ВОЙТИ</span>}
                {auth &&
                    <div className="flex justify-end items-center h-full">
                        <CartIcon setOpenCart={setOpenCart}/>
                        <Balance balance={userBalance()}/>
                        <ProfileMenu name={user?.name}/>
                    </div>
                }
            </div>
            <Cart openCart={openCart} setOpenCart={setOpenCart}/>
            <Modal active={modal} setActive={setModal}>
                <div className={styles.modal_container}>
                    {swap ? <SignIn/> : <SignUp/>}
                    <span onClick={swapHandler}>{link}</span>
                </div>
            </Modal>
        </div>
    );
}

export default Header;
