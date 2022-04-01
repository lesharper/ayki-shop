import React from 'react';
import styles from "./dropdown.module.css"
import {useRecoilState} from "recoil";
import {isActive} from "../../../store/atoms/dropdown";

const Dropdown = ({children}) => {
    const [active, setActive] = useRecoilState(isActive)
    return (
        <div className={active ? styles.dropdown : "hidden"} onMouseLeave={() => setActive(false)}>
            {children}
        </div>
    );
}

export default Dropdown;
