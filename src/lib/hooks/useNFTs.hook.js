import { useState, useEffect } from 'react'
import { API_URL_BASE, X_API_KEY } from '../../config'


export function getNFTs({ limit, offset }) {


    try {

        const response = API_URL_BASE.get("/collections", {
            params: {
                limit,
                offset
            },
            headers: {
                "Accept": "application/json",
                "X-API-key": X_API_KEY
            }
        })


        return {
            data: response.data,
            status: response.status,
            success: true,
            message: null,
        }

    } catch (err) {
        return {
            success: false,
            message: err.message,
            status: err.response?.status || 500,
            data: []
        }
    }
}



export async function NFTsApi({ limit, offset }) {

    const response = await getNFTs({ limit, offset })

    console.log("🚀 ~ file: useNFTs.hook.js ~ line 44 ~ NFTsApi ~ response", response)

    return response
}

// https://api.opensea.io/api/v1/collections?offset=0&limit=300


const NFTS_INITIAL_STATE_EMPTY = {
    results: [],
    loading: false,
    error: {
        code: "",
        message: ""
    },
    limit: 10,
    offset: 0
}


export default function useNFTs() {
    const [NFTs, setNFTs] = useState(NFTS_INITIAL_STATE_EMPTY);

    useEffect(() => {
        NFTsApi(setNFTs)
    }, [])

    return {
        NFTs
    }
}