import * as Yup from "yup";

export const productSchema = Yup.object().shape({
    title: Yup.string()
        .required('Название обязательно')
        .min(5, 'Не меньше пяти символов')
        .max(25, 'Не больше двадцати пяти символов'),
    description: Yup.string()
        .required('Описание обязательно')
        .min(5, 'Не меньше пяти символов'),
    price: Yup.number()
        .required('Цена обязательна')
        .min(1, 'Значение не меньше 1')
        .positive('Некорректное число'),
    category_id: Yup.string()
        .required('Категория обязательна'),
    sex_id: Yup.string()
        .required('Пол обязателен')
})
