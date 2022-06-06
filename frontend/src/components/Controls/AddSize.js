import React, {startTransition, useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {sizeSchema} from "./schema";
import {useRecoilRefresher_UNSTABLE} from "recoil";
import {categoriesSelector} from "../../store/selectors/categories";
import styles from "./control.module.css";
import {addSize} from "../../requests/size";
import {sizesSelector} from "../../store/selectors/sizes";

const AddSize = () => {
    const {register, formState: {errors}, handleSubmit, reset} = useForm({
        mode: "onTouched",
        resolver: yupResolver(sizeSchema)
    })

    const refreshSizes = useRecoilRefresher_UNSTABLE(sizesSelector);
    const [response, setResponse] = useState(null)

    const onSubmit =  async (data) => {
        const response = await addSize(data)
        startTransition(() => {
            refreshSizes()
        })
        setResponse(response)
        reset()
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.title}>Размер</span>
            <input className={styles.input}  type="text" {...register('size')} placeholder='Значение'/>
            {errors?.size?.message && <span className={styles.error}>{errors?.size?.message}</span>}
            {response?.message && <span className={styles.successful}>{response?.message}</span>}
            {response?.error && <span className={styles.error}>{response?.error}</span>}
            <button className={styles.btn}>Создать</button>
        </form>
    );
}

export default AddSize;
