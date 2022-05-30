import { getOpenSeaData } from "../services/getOpenSea";


//TODO: add try - catch con la response.status - setOpenSeaError
async function OpenSeaApi({ limit, offset, init, success, error }) {
    // setOpenSeaLoading(true)
    init()

    try {

        const response = await getOpenSeaData({ limit, offset });
        // await setOpenSeaData(response.data);
        // await setOpenSeaLoading(false)
        success(response.data)

    }
    catch (err) {
        error(err)
    }

}

export default OpenSeaApi;
