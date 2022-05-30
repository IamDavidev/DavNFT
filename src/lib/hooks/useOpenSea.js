import { useEffect, useReducer } from 'react'
import { OPEN_SEA_INITIAL_STATE } from '../../constants/openSea.const'
import { OPEN_SEA_ACIONS } from '../actions/openSea.actions'
// import { OPEN_SEA_ACIONS, _SET_DATA_OPEN_SEA, _SET_LIMIT_OPEN_SEA, _SET_LOADING_OPEN_SEA, _SET_OFFSET_OPEN_SEA } from '../actions/openSea.actions'

import OpenSeaApi from '../api/openSea.api'
import { openSeaReducer } from '../reducers/opensea.reducer'


function useOpenSea() {
    const [openSea, setOpenSea] = useReducer(openSeaReducer, OPEN_SEA_INITIAL_STATE)


    // const setOpenSeaData = results => setOpenSea({
    //     type: _SET_DATA_OPEN_SEA,
    //     args: { results }
    // })

    // const setOpenSeaLoading = (loading) => setOpenSea({
    //     type: _SET_LOADING_OPEN_SEA,
    //     args: { loading }
    // })

    // const setOpenSeaLimit = (limit) => setOpenSea({
    //     type: _SET_LIMIT_OPEN_SEA,
    //     args: { limit }
    // })
    // const setOpenSeaOffset = (offset) => setOpenSea({
    //     type: _SET_OFFSET_OPEN_SEA,
    // args: { offset }
    // })

    const initialSearchOpenSea = () => setOpenSea({
        type: OPEN_SEA_ACIONS._INITIAL_SEARCH_OPEN_SEA,
    })

    const successSearchOpenSea = results => setOpenSea({
        type: OPEN_SEA_ACIONS._SUCCESS_SEARCH_OPEN_SEA,
        args: { results }
    })

    const errorSearchOpenSea = err => setOpenSea({
        type: OPEN_SEA_ACIONS._ERROR_SEARCH_OPEN_SEA,
        args: { err }
    })

    const setOpenSeaLimit = limit => setOpenSea({
        type: OPEN_SEA_ACIONS._SET_LIMIT_OPEN_SEA,
        args: { limit }
    })

    const setOpenSeaOffset = offset => setOpenSea({
        type: OPEN_SEA_ACIONS._SET_OFFSET_OPEN_SEA,
        args: { offset }
    })

    useEffect(() => {
        // function handler to fetch data from OpenSea
        OpenSeaApi({
            limit: openSea.limit,
            offset: openSea.offset,
            init: initialSearchOpenSea,
            success: successSearchOpenSea,
            error: errorSearchOpenSea
        })
    }, [openSea.limit, openSea.offset])

    return {
        openSea,
        setOpenSeaLimit,
        setOpenSeaOffset
    }
}

export default useOpenSea;