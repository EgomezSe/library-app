import {RestAdapter} from "../adapters/rest/rest.adapter.js";


export const SearchService = async (titulo, categoria = '') => {
    return RestAdapter().get(`https://cloudgateway-production.up.railway.app/srv-buscador/libros?titulo=${titulo}&categoria=${categoria}`);
}
