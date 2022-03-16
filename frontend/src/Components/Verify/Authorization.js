import React from 'react';
import {useForm} from "react-hook-form"
import {Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Registration = () => {

    const {register, formState: {errors, isValid}, handleSubmit, reset,} = useForm({mode: "onTouched"})

    const onSumbit = (data) => {
        alert(JSON.stringify(data))
        // registration(data).then(res => console.log(res))
        reset()
    }

    return (
        <>
            <Stack
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },
                }}
                alignItems={"center"}
                onSubmit={handleSubmit(onSumbit)}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{flexGrow: 1}}
                >
                    Авторизация
                </Typography>
                <TextField
                    error={errors?.email}
                    id="outlined-required"
                    label={errors?.email ? errors?.email?.message : "Почта"}
                    {...register('email', {
                        required: "Поле обязательно!",
                        minLength: {
                            value: 7,
                            message: "Минимум 7 символов"
                        },
                        maxLength: {
                            value: 30,
                            message: "Максимум 30 символов"
                        },
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Введите корректную почту"
                        }
                    })}/>
                <TextField
                    error={errors?.password}
                    id="outlined-required"
                    label={errors?.password ? errors?.password?.message : "Пароль"}
                    type="password"
                    {...register('password', {
                        required: "Поле обязательно!",
                        minLength: {
                            value: 5,
                            message: "Минимум 5 символов"
                        },
                        maxLength: {
                            value: 30,
                            message: "Максимум 30 символов"
                        }
                    })}/>
                <Button disabled={!isValid} variant="contained">Войти</Button>
            </Stack>
        </>
    );
}

export default Registration;