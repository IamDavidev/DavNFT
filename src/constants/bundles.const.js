export const baseURL = 'https://api.opensea.io/api/v1'

export const BUNDLES_NFTS_INITIAL_STATE = {
    results: [],
    loading: false,
    err: null,
    limit: 10,
    offset: 0

}




export const OPEN_SEA_PATHS_API = {
    BUNDLES_URL: `${baseURL}/bundles`,
    ASSESTS: `${baseURL}/assets`,
    COLLECTIONS: `${baseURL}/collections`
}