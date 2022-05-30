import { API_URL_BASE } from "../../config/Api.instance";

export async function getOpenSeaData(params) { // { limit, offset }
    try {
        const response = await API_URL_BASE.get('/bundles', {
            params,// params: params = { limit, offset }
        });

        if (response.status === 200)
            return {
                data: response.data,
                status: response.status,
                success: true,
                MessageErr: null,
            };
        return {
            data: null,
            status: response.status,
            success: false,
            MessageErr: response.data.MessageErr,
        }

    } catch (err) {

        return {
            success: false,
            data: null,
            MessageErr: err.message,
            status: err.response?.status || 500,
        };

    }
}
