import { useEffect, useReducer } from 'react'
import bundlesApiNFTs from '../api/bundles.api'
import { ACTIONS_BUNDLES_NFTS } from '../actions/bundles.actions.js'

import { bundlesNFTsReducer } from '../reducers/bundesNFTs.reducer'
import { BUNDLES_NFTS_INITIAL_STATE } from '../../constants/bundles.const'


export default function useBundlesNFTs() {
    const [bundles, setBundlesNFTs] = useReducer(bundlesNFTsReducer, BUNDLES_NFTS_INITIAL_STATE)

    const initialSearchOpenSea = () => setBundlesNFTs({
        type: ACTIONS_BUNDLES_NFTS._INITIAL_SEARCH_OPEN_SEA,
    })

    const successSearchOpenSea = results => setBundlesNFTs({
        type: ACTIONS_BUNDLES_NFTS._SUCCESS_SEARCH_OPEN_SEA,
        args: { results }
    })

    const errorSearchOpenSea = err => setBundlesNFTs({
        type: ACTIONS_BUNDLES_NFTS._ERROR_SEARCH_OPEN_SEA,
        args: { err }
    })

    const setBundlesNFTsLimit = limit => setBundlesNFTs({
        type: ACTIONS_BUNDLES_NFTS._SET_LIMIT_OPEN_SEA,
        args: { limit }
    })

    const setBundlesNFTsOffset = offset => setBundlesNFTs({
        type: ACTIONS_BUNDLES_NFTS._SET_OFFSET_OPEN_SEA,
        args: { offset }
    })

    useEffect(() => {
        bundlesApiNFTs({
            limit: bundles.limit,
            offset: bundles.offset,
            init: initialSearchOpenSea,
            success: successSearchOpenSea,
            error: errorSearchOpenSea
        })
    }, [bundles.limit, bundles.offset])

    return {
        bundles,
        setBundlesNFTsLimit,
        setBundlesNFTsOffset
    }
}
