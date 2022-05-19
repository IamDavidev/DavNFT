import { useEffect, useReducer } from 'react'
import { _SET_DATA_OPEN_SEA, _SET_LIMIT_OPEN_SEA, _SET_LOADING_OPEN_SEA, _SET_OFFSET_OPEN_SEA } from '../actions/openSea.actions'
import OpenSeaApi from '../api/openSea.api'
import { openSeaReducer } from '../reducers/opensea.reducer'


function useOpenSea() {
    const [openSea, setOpenSea] = useReducer(openSeaReducer, {
        results: [],
        loading: false,
        err: null,
        limit: 10,
        offset: 0
    })
    console.log(">>hook openSea : ", openSea)

    const setOpenSeaData = results => setOpenSea({
        type: _SET_DATA_OPEN_SEA,
        args: { results }
    })

    const setOpenSeaLoading = (loading) => setOpenSea({
        type: _SET_LOADING_OPEN_SEA,
        args: { loading }
    })

    const setOpenSeaLimit = (limit) => setOpenSea({
        type: _SET_LIMIT_OPEN_SEA,
        args: { limit }
    })
    const setOpenSeaOffset = (offset) => setOpenSea({
        type: _SET_OFFSET_OPEN_SEA,
        args: { offset }
    })

    useEffect(() => {
        OpenSeaApi({ limit: openSea.limit, offset: openSea.offset, setOpenSeaData, setOpenSeaLoading })
    }, [openSea.limit, openSea.offset])

    return {
        openSea,
        setOpenSeaLimit,
        setOpenSeaOffset
    }
}


export default useOpenSea;