import React, {useState} from 'react';
import styles from "./verify.module.css"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "./schema";
import {signIn} from "../../requests/user";

const SignIn = () => {

    const {register, formState: {errors}, handleSubmit} = useForm({
        mode: "onTouched",
        resolver: yupResolver(loginSchema)
    })
    const [response, setResponse] = useState(null)
    const onSubmit =  async (data) => {
        const response = await signIn(data)
        setResponse(response)
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.title}>{response ? response.message : 'Авторизация'}</span>
            <input type="text" className={styles.field} {...register('email')} placeholder="Почта"/>
            <span className={styles.error}>{errors?.email?.message}</span>
            <input type="password" className={styles.field} {...register('password')} placeholder="Пароль"/>
            <span className={styles.error}>{errors?.password?.message}</span>
            <button type="submit" className={styles.button}>Войти</button>
        </form>
    );
}

export default SignIn;
