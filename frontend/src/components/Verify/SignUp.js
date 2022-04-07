import React, {useState} from 'react';
import styles from "./verify.module.css"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registrationSchema} from "./schema";
import {signUp} from "../../requests/user";

const SignUp = () => {

    const {register, formState: {errors}, handleSubmit} = useForm({
        mode: "onTouched",
        resolver: yupResolver(registrationSchema)
    })

    const [response, setResponse] = useState(null)
    const onSubmit =  async (data) => {
        const response = await signUp(data)
        setResponse(response)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.title}>{response ? response.message : 'Регистрация'}</span>
            <input type="text" className={styles.field} {...register('name')} placeholder="Имя пользователя"/>
            <span className={styles.error}>{errors?.name?.message}</span>
            <input type="text" className={styles.field} {...register('email')} placeholder="Почта"/>
            <span className={styles.error}>{errors?.email?.message}</span>
            <input type="text" className={styles.field} {...register('password')} placeholder="Пароль"/>
            <span className={styles.error}>{errors?.password?.message}</span>
            <select className={styles.field} {...register('sex')}>
                <option>Мужчина</option>
                <option>Женщина</option>
            </select>
            <button type="submit" className={styles.button}>Отправить</button>
        </form>
    );
}

export default SignUp;
