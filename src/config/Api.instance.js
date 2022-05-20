import axios from 'axios'
import { baseURL } from '../constants/openSea.const.js'

export const API_URL_BASE = axios.create({
    baseURL
})