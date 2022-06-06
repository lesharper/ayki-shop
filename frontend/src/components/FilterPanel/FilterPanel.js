import React from 'react';
import styles from "./filter-panel.module.css"
import Switcher from "../Switcher/Switcher";
import {useRecoilValue} from "recoil";
import {categoriesSelector} from "../../store/selectors/categories";

const FilterPanel = () => {

    const categories = useRecoilValue(categoriesSelector)
    const categorySwitchers = categories.map((category, key) =>  <Switcher key={key} category={category.category}/>)

    return (
        <div className={styles.filter}>
            <Switcher category='Для мужчин'/>
            <Switcher category='Для женщин'/>
            {categorySwitchers}

        </div>
    );
}

export default FilterPanel;
