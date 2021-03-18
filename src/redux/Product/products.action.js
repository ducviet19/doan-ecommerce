import productsTypes from "./products.types";


export const addProduct = productData => ({
    type: productsTypes.ADD_NEW_PRODUCT,
    payload: productData
});