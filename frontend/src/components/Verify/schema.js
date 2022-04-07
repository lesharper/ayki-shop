import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Имя пользователя обязательно')
        .min(5, 'Не менее пяти символов')
        .max(25, 'Не более двадцати пяти символов'),
    email: Yup.string()
        .required('Почта обязательна')
        .email('Некорректная почта'),
    password: Yup.string()
        .required('Пароль обязателен')
        .min(5, 'Не менее пяти символов'),
    sex: Yup.string()
        .required('Необходимо выбрать пол')
})

export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Почта обязательна')
        .email('Некорректная почта'),
    password: Yup.string()
        .required('Пароль обязателен')
        .min(5, 'Не менее пяти символов'),
})
