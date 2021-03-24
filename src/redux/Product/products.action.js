import productsTypes from "./products.types";


export const addProduct = productData => ({
    type: productsTypes.ADD_NEW_PRODUCT,
    payload: productData
});
export const fetchProducts = () => ({
    type: productsTypes.FETCH_PRODUCTS
});
export const setProducts = products => ({
    type: productsTypes.SET_PRODUCT,
    payload: products
})


export const deleteProduct = productId => ({
    type: productsTypes.DELETE_PRODUCT,
    payload: productId
})


export const editProduct = (productId,productData) => ({
    type: productsTypes.EDIT_PRODUCT,
    payload:productData
})