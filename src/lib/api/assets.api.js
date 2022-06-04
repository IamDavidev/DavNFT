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

    const response = await getAssestNFTs({ limit, orderDirection, address, limit, includeOrders })
    success({
        results: response.assets,
        next_pgae: response.next,
        previous_page: response.previous
    })
}