export async function getCollectionNFTs({
    slug,
}) {
    try {
        const response = await fetch(
            `https://api.opensea.io/api/v1/collection/${slug}`
        )
            .then(res => res.json())
            .then(data => data);
        return {
            success: true,
            collection: response,
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