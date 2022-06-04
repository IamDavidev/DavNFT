import { INITIAL_STATE_ASSETS_NFTS } from "../../constants/assets.const";
import { ACTIONS_ASSETS_NFTS } from "../actions/assets.actions";



export default function assetsNFTsReducer(state = INITIAL_STATE_ASSETS_NFTS, action) {

    switch (action.type) {

        // se inicia la busqueda de assets
        case ACTIONS_ASSETS_NFTS._INITIAL_: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }

        // se obtienen los assets de manera exitosa
        case ACTIONS_ASSETS_NFTS._SUCCESS_GET_ASSETS_: {
            const { results, next_page, previous_page } = action.args;
            return {
                ...state,
                loading: false,
                error: null,
                results,
                next_page,
                previous_page,
            };
        }

        // ocurre un error al obtener los assets
        case ACTIONS_ASSETS_NFTS._FAILURE_GET_ASSETS_: {
            const { error } = action.args;
            return {
                ...state,
                loading: false,
                error,
                results: {},
            };
        }

        // se setea el limite de assets por la pagina
        case ACTIONS_ASSETS_NFTS._SET_LIMIT_PAGE_: {
            const { limit } = action.args;
            return {
                ...state,
                limit,
            };
        }

        // se setea la direccion de ordenamiento
        case ACTIONS_ASSETS_NFTS._SET_ORDER_DIRECTION_: {
            const { order_direction } = action.args;
            return {
                ...state,
                order_direction,
            };
        }

        // se setea si se deben incluir los orders
        case ACTIONS_ASSETS_NFTS._SET_INCLUDE_ORDERS_: {
            const { include_orders } = action.args;
            return {
                ...state,
                include_orders,
            };
        }
    }
}
