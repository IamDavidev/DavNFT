import { API_URL_BASE, X_API_KEY } from "../../config/Api.instance"

export async function getCollectionNFTs({
    slug,
}) {
    try {

        const response = await API_URL_BASE.get(`/collection/${slug}`, {
            headers: {
                "Accept": "application/json",
                "X-API-key": X_API_KEY
            }
        })
        console.log({ response })

        return {
            success: true,
            collection: response.data,
            error: null,
        }

    } catch (err) {

        return {
            success: false,
            collection: null,
            error: err,
        }

    }
}
