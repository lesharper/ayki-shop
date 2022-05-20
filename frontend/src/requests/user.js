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
    } finally {
        window.location.reload()
    }

}

export const auth = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/user/auth`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const updateBalance = async (data) => {
    try {
        const response = await axios.put(`${BASE_URL}/api/user/balance`, data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const logout = async () => {
    await axios.get(`${BASE_URL}/api/user/logout`)
    window.location.reload()
};
