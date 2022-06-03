import React, {startTransition, useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {categorytSchema} from "./schema";
import {addCategory} from "../../requests/category";
import styles from "./control.module.css";
import {useRecoilRefresher_UNSTABLE} from "recoil";
import {categoriesSelector} from "../../store/selectors/categories";

const AddCategory = () => {

    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        mode: "onTouched",
        resolver: yupResolver(categorytSchema)
    })

    const refreshCategories = useRecoilRefresher_UNSTABLE(categoriesSelector);
    const [response, setResponse] = useState(null)

    const onSubmit =  async (data) => {
        const response = await addCategory(data)
        startTransition(() => {
            refreshCategories()
        })
        setResponse(response)
        reset()
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.title}>Категория</span>
            <input className={styles.input}  type="text" {...register('category')} placeholder='Название'/>
            {errors?.category?.message && <span className={styles.error}>{errors?.category?.message}</span>}
            {response?.message && <span className={styles.successful}>{response?.message}</span>}
            {response?.error && <span className={styles.error}>{response?.error}</span>}
            <button className={styles.btn}>Создать</button>
        </form>
    );
}

export default AddCategory;
