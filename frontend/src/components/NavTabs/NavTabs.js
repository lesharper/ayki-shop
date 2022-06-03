import React, {useState} from 'react';
import styles from "./tabs.module.css"
import {Link} from "react-router-dom";

const navTabs = [
    {
        title: "НОВИНКИ",
        sections: [{title: "Для него", link: "/catalog"},{title: "Для нее", link: "/catalog"}]
    },
    {
        title: "ДЛЯ НЕГО",
        sections: [{title: "Верхняя одежда", link: "/catalog"}, {title: "Нижняя одежда", link: "/catalog"}]
    },
    {
        title: "ДЛЯ НЕЕ",
        sections: [{title: "Верхняя одежда", link: "/catalog"}, {title: "Нижняя одежда", link: "/catalog"}]
    },
]


const NavTabs = () => {
    const [activeItem, setActiveItem] = useState(-1)

    const tabsMenu = navTabs[activeItem]?.sections.map((section, key) => <Link to={section.link} className={styles.tabs_link} key={key}>{section.title}</Link>)

    const styleHandler = (key) => activeItem === key ? styles.tabs_item_active : styles.tabs_item

    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div onMouseLeave={() => {
            setActiveItem()
            setOpenMenu(false)
        }} className={styles.tabs}>
            {navTabs.map((tab, key) =>
                <div key={key}
                     className={styleHandler(key)}
                     onMouseEnter={() => {
                         setActiveItem(key)
                         setOpenMenu(true)
                     }}
                >
                    {tab.title}
                </div>
            )}
            <div className={openMenu && styles.tabs_dropdown}>
                {tabsMenu}
            </div>
        </div>
    );
}

export default NavTabs;



