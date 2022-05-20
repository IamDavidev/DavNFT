import { _SET_DATA_OPEN_SEA, _SET_ERR_OPEN_SEA, _SET_LIMIT_OPEN_SEA, _SET_LOADING_OPEN_SEA, _SET_OFFSET_OPEN_SEA } from "../actions/openSea.actions.js";


// reducer openSea  
export const openSeaReducer = (state, action) => {
    switch (action.type) {
        case _SET_DATA_OPEN_SEA: {
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
        }
        default: {
            throw new Error(`Unhandled action type`);
        }
    }
}