import { mapperDataOpenSea } from "../mappers/openSeaData.mapper";
import { getBundlesNFTs } from "../services/getBundlesNFTs.serivce";


async function bundlesApiNFTs({ limit, offset, init, success, error }) {

    init()

    const response = await getBundlesNFTs({ limit, offset })

    if (!response.success) return await error(response.MessageErr)

    await success(response.data.bundles.map(mapperDataOpenSea))
}

export default bundlesApiNFTs;
