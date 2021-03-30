import productsTypes from "./products.types";


export const addProduct = productData => ({
    type: productsTypes.ADD_NEW_PRODUCT,
    payload: productData
});
export const fetchProducts = (filters) => ({
    type: productsTypes.FETCH_PRODUCTS,
    payload: filters
});

export const fetchProductStart = productID => ({
    type: productsTypes.FETCH_PRODUCT_ID,
    payload: productID
});
export const setProducts = products => ({
    type: productsTypes.SET_PRODUCTS,
    payload: products
})


export const setProduct = product => ({
    type: productsTypes.SET_PRODUCT,
    payload: product
});


export const deleteProduct = productId => ({
    type: productsTypes.DELETE_PRODUCT,
    payload: productId
})


export const editProduct = (productData, id) => ({
    type: productsTypes.EDIT_PRODUCT,
    payload: productData,
    id: id

})

