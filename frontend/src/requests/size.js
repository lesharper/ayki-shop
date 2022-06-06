import axios from 'axios'
import {BASE_URL} from "../constants"

axios.defaults.withCredentials = true;


export const addSize = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/size/add`, data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const getAllSizes = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/size/all`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const deleteSize = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/size/remove/${id}`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
