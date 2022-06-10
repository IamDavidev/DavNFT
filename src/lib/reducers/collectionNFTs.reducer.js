import { INITIAL_STATE_COLLECTION_ASSETS_NFTS } from "../../constants/collection.const";
import { ACTIONS_COLLECTION_NFTS } from "../actions/collections.actions";

export const collectionNFTsReducer = (
    state = INITIAL_STATE_COLLECTION_ASSETS_NFTS,
    action
) => {
    switch (action.type) {

        case ACTIONS_COLLECTION_NFTS._INITIAL_SEARCH_COLLECTION_: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }

        case ACTIONS_COLLECTION_NFTS._success_GET_COLLECTION_: {
            const { collection } = action.args;

            return {
                ...state,
                loading: false,
                error: null,
                results: collection,
            };
        }

        case ACTIONS_COLLECTION_NFTS._FAILURE_GET_COLLECTION_: {
            const { error } = action.args;
            return {
                ...state,
                loading: false,
                error,
            };
        }

        default:
            throw new Error(`Action type ${action.type} not handled`);
    }
};