import axios from "axios"
import {URL_API} from '@/configs'

export default class AuthService {

    static async auth (params) {
        return axios.post(`${URL_API}/auth`, params)
    }
}