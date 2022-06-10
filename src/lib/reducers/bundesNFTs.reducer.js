import { BUNDLES_NFTS_INITIAL_STATE } from "../../constants/bundles.const.js";
import { ACTIONS_BUNDLES_NFTS } from '../actions/bundles.actions.js'


// reducer openSea  
export const bundlesNFTsReducer = (state = BUNDLES_NFTS_INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS_BUNDLES_NFTS._INITIAL_SEARCH_OPEN_SEA: {
            return {
                ...state,
                loading: true,
                err: null,
            }
        }

        case ACTIONS_BUNDLES_NFTS._SUCCESS_SEARCH_OPEN_SEA: {
            const { results } = action.args;
            return {
                ...state,
                loading: false,
                err: null,
                results,
            }
        }

        case ACTIONS_BUNDLES_NFTS._ERROR_SEARCH_OPEN_SEA: {
            const { err } = action.args;
            return {
                ...state,
                loading: false,
                err,
                results: [],
            }
        }

        case ACTIONS_BUNDLES_NFTS._SET_LIMIT_OPEN_SEA: {
            const { limit } = action.args;
            return {
                ...state,
                limit,
            }
        }
        case ACTIONS_BUNDLES_NFTS._SET_OFFSET_OPEN_SEA: {
            const { offset } = action.args;
            return {
                ...state,
                offset,
            }
        }
        default: {
            throw new Error(`Unhandled action type`);
        }
    }
}