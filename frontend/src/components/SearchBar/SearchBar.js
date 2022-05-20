import React from 'react';
import styles from "./search-bar.module.css"
import {SearchIcon, XIcon} from "@heroicons/react/solid";
import {useRecoilState} from "recoil";
import {searchAtom} from "../../store/atoms/search";

const SearchBar = () => {

    const [search, setSearch] = useRecoilState(searchAtom)

    const changeHandler = ({target}) => setSearch(target.value)
    const resetHandler = () => setSearch('')

    return (
        <div className={styles.container}>
            <SearchIcon className={styles.icon}/>
            <input type="text" className={styles.search_bar} placeholder="Поиск" value={search} onChange={changeHandler}/>
            <XIcon className={styles.icon} onClick={resetHandler}/>
        </div>
    );
}

export default SearchBar;
