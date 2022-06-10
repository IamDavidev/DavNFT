import { useReducer, useEffect } from 'react'
import { INITIAL_STATE_ASSETS_NFTS } from '../../constants/assets.const';

import { ACTIONS_ASSETS_NFTS } from '../actions/assets.actions';
import assetsApiNFTs from '../api/assetsNFTs.api';

import assetsNFTsReducer from '../reducers/assetsNTFs.reducer';


export default function useAssetsNFTs(address) {

    const [assetsNFTs, setAssetsNFTs] = useReducer(assetsNFTsReducer, INITIAL_STATE_ASSETS_NFTS)


    // actions search and get assets nfts
    const initialAssetsNFTs = () => setAssetsNFTs({
        type: ACTIONS_ASSETS_NFTS._INITIAL_
    })

    const successAssetsNFTs = ({ results, nextPage, previousPage }) => setAssetsNFTs({
        type: ACTIONS_ASSETS_NFTS._SUCCESS_GET_ASSETS_,
        args: {
            results,
            nextPage,
            previousPage
        }
    })

    const failureAssetsNFTs = error => setAssetsNFTs({
        type: ACTIONS_ASSETS_NFTS._FAILURE_GET_ASSETS_,
        args: {
            error
        }
    })


    // actions to change params of search assets nfts
    const setLimitPageAssetsNFTs = limit => setAssetsNFTs({
        type: ACTIONS_ASSETS_NFTS._SET_LIMIT_PAGE_,
        args: {
            limit
        }
    })

    const setOrderDirectionAssetsNFTs = orderDirection => setAssetsNFTs({
        type: ACTIONS_ASSETS_NFTS._SET_ORDER_DIRECTION_,
        args: {
            orderDirection
        }
    })
    const setIncludeOrdersAssetsNfTs = includeOrders => setAssetsNFTs({
        type: ACTIONS_ASSETS_NFTS._SET_INCLUDE_ORDERS_,
        args: {
            includeOrders
        }
    })


    useEffect(() => {
        assetsApiNFTs({
            init: initialAssetsNFTs,
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
        assetsNFTs,
        setLimitPageAssetsNFTs,
        setOrderDirectionAssetsNFTs,
        setIncludeOrdersAssetsNfTs
    };
}