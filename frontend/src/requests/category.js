import axios from 'axios'
import {BASE_URL} from "../constants"

axios.defaults.withCredentials = true;


export const addCategory = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/category/add`, data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/category/all`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
