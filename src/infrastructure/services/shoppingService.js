import {RestAdapter} from "../adapters/rest/rest.adapter.js";


export const ShoppingService = async (valorCompra, books) => {
    const shoppingBooks = books.map((bbok) => {
        return {
            id: bbok.id,
            cantidad: bbok.cantidad - 1,
        }
    })
    return RestAdapter().put('https://cloudgateway-production.up.railway.app/srv-buscador/libros', shoppingBooks);
}
