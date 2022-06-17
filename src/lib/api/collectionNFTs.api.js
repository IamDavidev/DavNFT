import { getCollectionNFTs } from "../services/getCollectionsNFTs.service"

export default async function collectionApi({ init, slug, success, failure }) {

    init()

    const response = await getCollectionNFTs({ slug })
    console.log(slug)

    if (!response.success) failure({
        error: response.error
    })

    success({
        collection: response.collection.collection
    })
}

