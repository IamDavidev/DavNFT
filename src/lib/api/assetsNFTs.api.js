import { mapperAssetsNFTs } from "../mappers/assetsNFTs.mapper"
import getAssestNFTs from "../services/getAssets.service"

export default async function assetsApiNFTs({
    init,
    success,
    failure,
    limit,
    address,
    orderDirection,
    includeOrders
}) {
    init()

    const response = await getAssestNFTs({ limit, orderDirection, address, includeOrders })

    if (!response.success) return failure(response.MessageErr)

    success({
        results: response.data.assets.map(mapperAssetsNFTs),
        nextPage: response.data.next,
        previousPage: response.data.previous,
    })
}