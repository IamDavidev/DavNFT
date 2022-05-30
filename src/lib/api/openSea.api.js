import { mapperDataOpenSea } from "../mappers/openSeaData.mapper";
import { getOpenSeaData } from "../services/getOpenSea";


//TODO: add try - catch con la response.status - setOpenSeaError
async function OpenSeaApi({ limit, offset, init, success, error }) {
    // setOpenSeaLoading(true)
    init()
    const response = await getOpenSeaData({ limit, offset });
    // await setOpenSeaData(response.data);
    // await setOpenSeaLoading(false)
    // console.log(">> data <=", response.data);

    const res = { collections: response.data.bundles.map(mapperDataOpenSea) }
    if (!response.success) return error(response.MessageErr)

    await success(res)
}

export default OpenSeaApi;
