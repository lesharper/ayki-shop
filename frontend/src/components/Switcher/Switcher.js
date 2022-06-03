import React from 'react';
import styles from "./switcher.module.css"
import {useRecoilState} from "recoil";
import {filterAtom} from "../../store/atoms/filter";

const Switcher = ({category}) => {


    const [filter, setFilter] = useRecoilState(filterAtom)

    const checkedHandler = ({target}) => {
        if (target.checked)
            setFilter([...filter, target.value])
        else {
            setFilter(filter.filter(item => item!==target.value))
        }
    }

    console.log(filter)

    return (
        <>
            <label className={styles.switcher}>
                <span className={styles.category}>{category}</span>
                <input type="checkbox" value={category} className="hidden" onChange={checkedHandler}/>
                <div>
                    <div/>
                </div>
            </label>
        </>

    );
}

export default Switcher;
