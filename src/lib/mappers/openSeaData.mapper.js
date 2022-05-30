/**
 * banner /
 *  price /
 * description /
 * assest(imgaes) /
 * display(data)/
 */

//  asset_contract
export const mapperDataOpenSea = (objData) => {
    return {
        banner: objData.asset_contract && objData.asset_contract.collection.banner_image_url || '',
        UsdPrice: objData.sell_orders[0].payment_token_contract.usd_price,
        EthPriceDecimals: objData.sell_orders[0].payment_token_contract.decimals,
        description: objData.asset_contract && objData.asset_contract.description,
        assets: {
            images: objData.assets.map(asset => ({
                url: asset.image_url,
                name: asset.name,
                link: asset.permalink,
            })),
        },
        display: objData.asset_contract && objData.asset_contract.collection.display_data.card_display_style,
        url: objData.permalink,
        symbol: objData.asset_contract && objData.asset_contract.symbol,
        creator: objData.asset_contract && objData.asset_contract.collection.medium_username,
        nameCollection: objData.asset_contract && objData.asset_contract.collection.name,
        imgCollection: objData.asset_contract && objData.asset_contract.image_url,
    }
}