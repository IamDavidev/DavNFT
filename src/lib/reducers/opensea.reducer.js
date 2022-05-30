import { OPEN_SEA_INITIAL_STATE } from "../../constants/openSea.const.js";
// import { OPEN_SEA_ACIONS, _SET_DATA_OPEN_SEA, _SET_ERR_OPEN_SEA, _SET_LIMIT_OPEN_SEA, _SET_LOADING_OPEN_SEA, _SET_OFFSET_OPEN_SEA } from "../actions/openSea.actions.js";
import { OPEN_SEA_ACIONS } from '../actions/openSea.actions.js'


// reducer openSea  
export const openSeaReducer = (state = OPEN_SEA_INITIAL_STATE, action) => {
    switch (action.type) {
        /*     case _SET_DATA_OPEN_SEA: {
                const { results } = action.args
                return {
                    ...state,
                    results,
                }
            }
            case _SET_ERR_OPEN_SEA: {
                const { err } = action.args;
                return {
                    ...state,
                    err,
                }
            }
            case _SET_LOADING_OPEN_SEA: {
                const { loading } = action.args;
                return {
                    ...state,
                    loading,
                }
            }
            case _SET_LIMIT_OPEN_SEA: {
                const { limit } = action.args;
                return {
                    ...state,
                    limit,
                }
            }
            case _SET_OFFSET_OPEN_SEA: {
                const { offset } = action.args;
                return {
                    ...state,
                    offset,
                }
            } */
        case OPEN_SEA_ACIONS._INITIAL_SEARCH_OPEN_SEA: {
            return {
                ...state,
                loading: true,
                err: null,
            }
        }

        case OPEN_SEA_ACIONS._SUCCESS_SEARCH_OPEN_SEA: {
            const { results } = action.args;
            return {
                ...state,
                loading: false,
                err: null,
                results,
            }
        }

        case OPEN_SEA_ACIONS._ERROR_SEARCH_OPEN_SEA: {
            const { err } = action.args;
            return {
                ...state,
                loading: false,
                err,
                results: [],
            }
        }

        case OPEN_SEA_ACIONS._SET_LIMIT_OPEN_SEA: {
            const { limit } = action.args;
            return {
                ...state,
                limit,
            }
        }
        case OPEN_SEA_ACIONS._SET_OFFSET_OPEN_SEA: {
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