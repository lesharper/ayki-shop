import axios from 'axios'
import {BASE_URL} from "../constants"

axios.defaults.withCredentials = true;

export const getAllPhotos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/photo/all`)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
