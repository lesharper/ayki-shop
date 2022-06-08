import React, {startTransition, useEffect, useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {getAllCategories} from "../../requests/category";
import styles from "./control.module.css"
import {productSchema} from "./schema";
import {addProduct} from "../../requests/product";
import {useRecoilRefresher_UNSTABLE, useRecoilValue} from "recoil";
import {categoriesSelector} from "../../store/selectors/categories";
import {productsSelector} from "../../store/selectors/products";

const AddProduct = () => {

    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        mode: "onTouched",
        resolver: yupResolver(productSchema)
    })

    const [response, setResponse] = useState(null)

    const categories = useRecoilValue(categoriesSelector)
    const [price, setPrice] = useState(1)

    const refreshProducts = useRecoilRefresher_UNSTABLE(productsSelector);
    const onSubmit = async (data) => {
        const response = await addProduct(data)
        startTransition(() => {
            refreshProducts()
        })
        setResponse(response)
        reset()
    }

    const priceHandler = ({target}) => {
        setPrice((prev) => {
            if (Number(target.value) <= 0) return 1
            return Number(target.value)
        })
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.title}>Добавление товара</span>
            <input className={styles.input} type="text" {...register('title')} placeholder='Название'/>
            <span className={styles.error}>{errors?.title?.message}</span>
            <textarea className={styles.textarea} type="text" {...register('description')} placeholder='Описание'/>
            <span className={styles.error}>{errors?.description?.message}</span>
            <input className={styles.input} type="number" {...register('price')} value={price} onChange={priceHandler}/>
            <span className={styles.error}>{errors?.price?.message}</span>
            <select className={styles.select}  {...register('category_id')}>
                <option selected disabled>Выберите категорию</option>
                {categories.map((category, key) => <option key={key} value={category.id}>{category.category}</option>)}
            </select>
            <span className={styles.error}>{errors?.category_id?.message}</span>
            <select className={styles.select} {...register('sex_id')}>
                <option selected disabled>Выберите пол</option>
                <option value='1'>Мужчина</option>
                <option value='2'>Женщина</option>
            </select>

            <label className={styles.file}>
                <span>Загрузить фото</span>
                <input type="file" {...register('photos')} accept="image/*" className="hidden" multiple/>
            </label>
            <button className={styles.btn}>Создать</button>
        </form>
    );
}

export default AddProduct;
