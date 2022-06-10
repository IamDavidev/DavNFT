
export const mapperDataOpenSea = (ObjApiOpenSea) => {
    if (!ObjApiOpenSea.asset_contract) return;
    if (!ObjApiOpenSea.sell_orders) return;

    return {
        address: ObjApiOpenSea.asset_contract.address,
        banner: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.collection.banner_image_url || '',
        url: ObjApiOpenSea.permalink,
        symbol: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.symbol,
        cretor: ObjApiOpenSea?.maker.user && ObjApiOpenSea.maker.user.userName,
        nameCollection: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.collection.name,
        imgCollection: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.image_url,
        slug: ObjApiOpenSea.asset_contract && ObjApiOpenSea.asset_contract.collection.slug,
    }

}


export const mapperAssets = (ObjDataAssets) => ({
    url: ObjDataAssets.image_url,
    name: ObjDataAssets.name,
    link: ObjDataAssets.permalink,
    addres: ObjDataAssets.asset_contract.address,
})