import nft404 from '../../assets/images/nft404.png'



export const mapperAssetsNFTs = objApi => {

    const image = objApi.image_url === null ? nft404 : objApi.image_url;


    return {
        image,
        name: objApi?.name,
        tokenId: objApi?.token_id,
        user: objApi?.creator.user.username,
        link: objApi?.permalink,
    }
}