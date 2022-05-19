import axios from 'axios'
import { baseURL } from '../constants/api.const.js'

export const API_URL_BASE = axios.create({
    baseURL
})