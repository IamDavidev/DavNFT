import { mapperDataOpenSea } from "../mappers/openSeaData.mapper";
import { getOpenSeaData } from "../services/getOpenSea";


async function OpenSeaApi({ limit, offset, init, success, error }) {

    init()

    const response = await getOpenSeaData({ limit, offset });

    if (!response.success) return await error(response.MessageErr)

    await success({
        collections: response.data.bundles.map(mapperDataOpenSea),
    })
}

export default OpenSeaApi;
