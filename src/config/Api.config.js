import axios from 'axios'

import { baseURL } from '../constants'

export const API_URL_BASE = axios.create({
    baseURL,
})


export const X_API_KEY = import.meta.env.VITE_X_API_KEY
