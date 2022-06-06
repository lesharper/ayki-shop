import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from "./admin_tabs.module.css";
import TCategories from "../Tables/TCategories";
import TProducts from "../Tables/TProducts";
import TSizes from "../Tables/TSizes";

const tabs = [
    {
        title: "Категории",
        sections: <TCategories/>
    },
    {
        title: "Размеры",
        sections: <TSizes/>
    },
    {
        title: "Товары",
        sections: <TProducts/>
    },
]

const AdminTabs = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="m-10">
            <div className={styles.tabs}>
                {tabs.map((tab, index) =>
                    <div className={activeIndex === index ? styles.tabs_item_active : styles.tabs_item}
                         onClick={() => setActiveIndex(index)} key={index}>
                        <span>{tab.title}</span>
                    </div>
                )}
            </div>
            {tabs[activeIndex].sections}
        </div>
    );
}

export default AdminTabs;
