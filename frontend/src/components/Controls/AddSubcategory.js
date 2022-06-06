import React, {startTransition, useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {subcategorySchema} from "./schema";
import {useRecoilRefresher_UNSTABLE} from "recoil";
import {categories_subcategoriesSelector} from "../../store/selectors/categories_subcategories";
import {addCategory} from "../../requests/category";
import styles from "./control.module.css";
import {addSubcategory} from "../../requests/subcategory";

const AddSubcategory = ({category_id}) => {

    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        mode: "onTouched",
        resolver: yupResolver(subcategorySchema)
    })

    const refreshCategorieSubs = useRecoilRefresher_UNSTABLE(categories_subcategoriesSelector);
    const [response, setResponse] = useState(null)

    const onSubmit =  async (data) => {
        const response = await addSubcategory({...data, category_id})
        startTransition(() => {
            refreshCategorieSubs()
        })
        setResponse(response)
        reset()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.title}>Подкатегория</span>
            <input className={styles.input}  type="text" {...register('subcategory')} placeholder='Название'/>
            {errors?.subcategory?.message && <span className={styles.error}>{errors?.category?.message}</span>}
            {response?.message && <span className={styles.successful}>{response?.message}</span>}
            {response?.error && <span className={styles.error}>{response?.error}</span>}
            <button className={styles.btn}>Создать</button>
        </form>
    );
}

export default AddSubcategory;
