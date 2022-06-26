import { useState, useEffect } from 'react'
import { API_URL_BASE, X_API_KEY } from '../../config'


export async function getNFTs({ limit, offset }) {


    try {

        const response = await API_URL_BASE.get("/collections", {
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

        throw new Error(err)

    }
}

export const getDataCollection = async ({ slug }) => {

    try {

        const response = await API_URL_BASE.get(`/collection/${slug}`, {
            headers: {
                "accept": "application/json",
                "X-API-key": X_API_KEY
            }
        })

        return {
            data: response.data,

        }

    } catch (err) {

        throw new Error(err)

    }

}

export const adapterCollections = () => { }


export const mapperCollectionData = objApiCollectionData => {
    return objApiCollectionData
}


export const mapperCollectionsSlug = objApiCollection => {

    return {
        slug: objApiCollection.slug
    }

}


export async function NFTsApi({ limit, offset, success }) {

    // init()

    const response = await getNFTs({ limit, offset })

    success(response.data)

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

    const successNFTs = results => setNFTs(prev => ({
        ...prev,
        results,
    }))

    useEffect(() => {
        NFTsApi({
            limit: NFTs.limit,
            offset: NFTs.offset,
            success: successNFTs
        })
    }, [])

    return {
        NFTs
    }
}