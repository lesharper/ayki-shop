import axios from 'axios'
import {BASE_URL} from "../constants"

axios.defaults.withCredentials = true;

export const addProduct = async (data) => {
    try {

        console.log(data)

        const formData = new FormData()

        formData.set('title', data.title)
        formData.set('description', data.description)
        formData.set('price', data.price)
        formData.set('category_id', data.category_id)
        formData.set('sex_id', data.sex_id)

        for (let i = 0; i < data.photos.length; i++) {
            formData.append(`photos`, data.photos[i])
        }

        const response = await axios.post(`${BASE_URL}/api/product/add`, formData)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/product/all`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/product/remove/${id}`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
