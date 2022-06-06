import React, {useState} from 'react';
import styles from "./tabs.module.css"
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {categories_subcategoriesSelector} from "../../store/selectors/categories_subcategories";


const NavTabs = () => {

    const category_subs = useRecoilValue(categories_subcategoriesSelector)
    const manLinks = category_subs.map((item, key) =>
        <Link to={`/catalog/${item.category}/Он`} key={key}>
            <li className={styles.tabs_link}>
                {item.category}
            </li>
            <ul>
                {!!item.subcategories.length && item.subcategories.map((item, key) =>
                    <li className={styles.tabs_sublink}>{item.subcategory}</li>
                )}
            </ul>

        </Link>
    )

    const womanLinks = category_subs.map((item, key) =>
        <Link to={`/catalog/${item.category}/Она`} key={key}>
            <li className={styles.tabs_link}>
                {item.category}
            </li>
            <ul>
                {!!item.subcategories.length && item.subcategories.map((item, key) =>
                    <li className={styles.tabs_sublink}>{item.subcategory}</li>
                )}
            </ul>

        </Link>
    )

    const navTabs = [
        // {
        //     title: "НОВИНКИ",
        //     sections: <ul className={styles.tabs_ul}></ul>
        // },
        {
            title: "ДЛЯ НЕГО",
            sections: <ul className={styles.tabs_ul}>{manLinks}</ul>
        },
        {
            title: "ДЛЯ НЕЕ",
            sections: <ul className={styles.tabs_ul}>{womanLinks}</ul>
        },
    ]

    const [activeItem, setActiveItem] = useState(-1)
    const styleHandler = (key) => activeItem === key ? styles.tabs_item_active : styles.tabs_item
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div onMouseLeave={() => {
            setActiveItem(-1)
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
                {navTabs[activeItem] && navTabs[activeItem].sections}
            </div>
        </div>
    );
}

export default NavTabs;



