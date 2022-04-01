import axios from 'axios'
import {BASE_URL} from "../constants"

axios.defaults.withCredentials = true;

export const signUp = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/registration`, data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const signIn = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/user/login`, data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
