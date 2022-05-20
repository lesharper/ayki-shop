import axios from 'axios'
import {BASE_URL} from "../constants"

axios.defaults.withCredentials = true;

export const addProduct = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/product/add`, data)
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
