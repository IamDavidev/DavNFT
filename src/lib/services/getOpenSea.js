import { API_URL_BASE } from "../../config/Api.instance";

export async function getOpenSea(params) { // { limit, offset }
    try {
        const response = await API_URL_BASE.get('/bundles', {
            params,// params: params = { limit, offset }
        });

        if (response.status === 200)
            return {
                data: response.data,
                status: response.status,
                success: true,
            };

        return {
            data: response.data,
            status: response.status,
        };
    } catch (err) {
        return {
            data: null,
            MessageErr: err.message,
            status: err.response?.status || 500,
        };
    }
}
