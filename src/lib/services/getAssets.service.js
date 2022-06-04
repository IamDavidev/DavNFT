export default async function getAssestNFTs({
    address,
    limit,
    includeOrders,
    orderDirection,
}) {

    try {
        const response = await fetch(
            `https://api.opensea.io/api/v1/assets?order_direction=${orderDirection}&asset_contract_address=${address}&limit=${limit}&include_orders=${includeOrders}`
        )
            .then(response => response.json())
            .then(response => response);
        return {
            data: response,
            success: true,
            MessageErr: null,
        };

    } catch (err) {
        console.log(err);
        return {
            success: false,
            data: null,
            MessageErr: err.message,
        }
    }
}