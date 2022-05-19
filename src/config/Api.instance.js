import axios from 'axios'
import { baseURL } from '../constants/baseURL'

export const API_URL_BASE = axios.create({
    baseURL
})