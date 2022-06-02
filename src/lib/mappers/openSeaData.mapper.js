/**
 * banner /
 *  price /
 * description /
 * assest(imgaes) /
 * display(data)/
 */

//  asset_contract
export const mapperDataOpenSea = (ObjApiOpenSea) => {

    if (!ObjApiOpenSea.asset_contract) return;
    if (!ObjApiOpenSea.sell_orders) return;
    return {
        banner: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.collection.banner_image_url || '',
        UsdPrice: ObjApiOpenSea.sell_orders[0].payment_token_contract.usd_price,
        EthPriceDecimals: ObjApiOpenSea.sell_orders[0].payment_token_contract.decimals,
        description: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.description,
        // assets: {
        //     images: ObjApiOpenSea.assets.map(asset => ({
        //         url: asset.image_url,
        //         name: asset.name,
        //         link: asset.permalink,
        //     })),
        // },
        assets: {
            images: ObjApiOpenSea.assets.map(mapperAssets)
        },
        display: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.collection.display_data.card_display_style,
        url: ObjApiOpenSea.permalink,
        symbol: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.symbol,
        creator: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.collection.medium_username,
        nameCollection: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.collection.name,
        imgCollection: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.image_url,
    }
}


export const mapperAssets = (ObjDataAssets) => ({
    url: ObjDataAssets.image_url,
    name: ObjDataAssets.name,
    link: ObjDataAssets.permalink,
})