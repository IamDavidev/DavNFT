import { useReducer, useEffect } from 'react'
import { INITIAL_STATE_ASSETS_NFTS } from '../../constants/assets.const';

import { ACTIONS_ASSETS_NFTS } from '../actions/assets.actions';

import assetsApiNFTs from '../api/assets.api';
import assetsNFTsReducer from '../reducers/assetsNTFs.reducer';


export default function useAssetsNFTs(address) {

    const [assetsNFTs, setAssetsNFTs] = useReducer(assetsNFTsReducer, INITIAL_STATE_ASSETS_NFTS)


    const initialAssetsNFTs = () => setAssetsNFTs({
        type: ACTIONS_ASSETS_NFTS._INITIAL_
    })

    const successAssetsNFTs = ({ results, next_page, previous_page }) => setAssetsNFTs({
        type: ACTIONS_ASSETS_NFTS._SUCCESS_GET_ASSETS_,
        args: {
            results,
            next_page,
            previous_page
        }
    })

    const failureAssetsNFTs = error => setAssetsNFTs({
        type: ACTIONS_ASSETS_NFTS._FAILURE_GET_ASSETS_,
        args: {
            error
        }
    })


    useEffect(() => {
        assetsApiNFTs({
            init: initialAssetsNFTs,
            // succes: sucessAssetsNFT
            success: successAssetsNFTs,
            address,
            failure: failureAssetsNFTs,
            limit: assetsNFTs.limit,
            includeOrders: assetsNFTs.include_orders,
            orderDirection: assetsNFTs.order_direction,

        })
    }, [
        assetsNFTs.limit,
        assetsNFTs.order_direction,
        assetsNFTs.include_orders
    ]);

    return {
        assetsNFTs
    };
}