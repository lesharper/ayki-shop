import axios from 'axios'
import {BASE_URL} from "../constants"

axios.defaults.withCredentials = true;

export const addInBasket = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/basket/add`, data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const getAllProductsFromUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/basket/all`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const deleteInBasket = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/basket/remove/${id}`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
