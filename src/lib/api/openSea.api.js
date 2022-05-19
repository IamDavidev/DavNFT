import { getOpenSeaData } from "../services/getOpenSea";


//TODO: add try - catch con la response.status - setOpenSeaError
async function OpenSeaApi({ limit, offset, setOpenSeaData, setOpenSeaLoading }) {

    setOpenSeaLoading(true)
    const response = await getOpenSeaData({ limit, offset });

    setOpenSeaData(response.data);
    setOpenSeaLoading(false)
}

export default OpenSeaApi;
