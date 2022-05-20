import React, {useState} from 'react';
import styles from "./deposit.module.css"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {balanceSchema} from "../Verify/schema";
import {updateBalance} from "../../requests/user";
import {userAtom} from "../../store/atoms/user";
import {useRecoilValue, useSetRecoilState} from "recoil";

const Deposit = () => {

    const [balance, setBalance] = useState(1)
    const [response, setResponse] = useState()
    const user = useRecoilValue(userAtom)
    const setStateBalance = useSetRecoilState(userAtom)

    const {register, formState: {errors, isValid}, handleSubmit} = useForm({
        mode: "onTouched",
        resolver: yupResolver(balanceSchema)
    })

    const onSubmit =  async (data) => {
        const response = await updateBalance(data)
        setStateBalance({...user, balance: response.balance})
    }

    const balanceHandler = ({target}) => {
        setBalance((prev) => {
            if (Number(target.value) <= 0) return 1
            return Number(target.value)
        })
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.title}>Пополнение баланса</span>
                <input
                    type="number"
                    className={styles.input}
                    {...register('balance')}
                    value={balance}
                    onChange={balanceHandler}
                />
            <span>{errors?.balance?.message}</span>
            <button className={styles.btn} disabled={!isValid}>Пополнить</button>
        </form>
    );
}

export default Deposit;
