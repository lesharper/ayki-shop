import axios from 'axios'
import {BASE_URL} from "../constants"

axios.defaults.withCredentials = true;


export const addSubcategory = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/subcategory/add`, data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const getAllSubcategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/subcategory/all`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const deleteSubategory = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/subcategory/remove/${id}`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
