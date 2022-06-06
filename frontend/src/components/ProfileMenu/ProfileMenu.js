import React, {useState} from 'react';
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/solid";
import {AnimatePresence, motion} from "framer-motion";
import styles from "./profile_menu.module.css"
import {logout} from "../../requests/user";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {isAuth, userAtom} from "../../store/atoms/user";
import {Link} from "react-router-dom";
import {ADMIN_ROLE, CLIENT_ROLE} from "../../constants";

const ProfileMenu = ({name}) => {

    const user = useRecoilValue(userAtom)
    const avatar = name.slice(0, 2).toUpperCase()
    const setAuth = useSetRecoilState(isAuth)
    const [openMenu, setOpenMenu] = useState(false)
    const menuOpenHandler = () => setOpenMenu(!openMenu)

    const menuVariants = {
        hidden: {
            height: 0,
            opacity: 0,
            transition: {duration: 0.3}
        },
        visible: {
            height: "auto",
            opacity: 1,
            transition: {duration: 0.3}

        },
        exit: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                delay: 0.3,
            }
        }
    }

    const linkVariants = {
        hidden: {
            y: -70,
            opacity: 0,
        },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: i * 0.2
            }
        }),
        exit: {
            opacity: 0,
        }
    }

    const logoutHandler = () => {
        logout()
        setAuth(false)
        setOpenMenu(false)
    }

    const linksAdmin = [
        {title: 'Профиль', link: '/profile', handleClick: () => setOpenMenu(false)},
        {title: 'Управление', link: '/admin', handleClick: () => setOpenMenu(false)},
        {
            title: 'Выйти', link: '/', handleClick: () => {
                logoutHandler()
            }
        },
    ]

    const linksClient = [
        {title: 'Профиль', link: '/profile', handleClick: () => setOpenMenu(false)},
        {title: 'Избранное', link: '/favorites', handleClick: () => setOpenMenu(false)},
        {
            title: 'Выйти', link: '/', handleClick: () => {
                logoutHandler()
            }
        },
    ]

    const menuClient = linksClient.map((link, key) =>
        <Link to={link.link} onClick={link.handleClick} key={key}>
            <motion.span variants={linkVariants} initial='hidden'
                         animate='visible' exit='exit' custom={key}>
                {link.title}
            </motion.span>
        </Link>
    )

    const menuAdmin = linksAdmin.map((link, key) =>
        <Link to={link.link} onClick={link.handleClick} key={key}>
            <motion.span  variants={linkVariants} initial='hidden'
                         animate='visible' exit='exit' custom={key}>
                {link.title}
            </motion.span>
        </Link>
    )

    return (
        <>
            <div className={styles.container}>
                <div
                    className={styles.avatar}>
                    {avatar}
                </div>

                {openMenu
                    ? <ChevronUpIcon className={styles.icon} onClick={menuOpenHandler}/>
                    : <ChevronDownIcon className={styles.icon} onClick={menuOpenHandler}/>
                }

            </div>

            <AnimatePresence onExitComplete={() => setOpenMenu(false)}>
                {openMenu &&
                    <motion.div className={styles.menu} variants={menuVariants} initial='hidden' animate='visible'
                                exit='exit'>
                        {user.role_id === ADMIN_ROLE && menuAdmin}
                        {user.role_id === CLIENT_ROLE && menuClient}
                    </motion.div>
                }
            </AnimatePresence>

        </>

    );
}

export default ProfileMenu;
