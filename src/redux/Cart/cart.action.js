import cartTypes from "./cart.types";



export const addToCart = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload : nextCartItem
})


export const removeCart = (nextCartItem) => ({
    type: cartTypes.REMOVE_CART,
    payload: nextCartItem
})

export const clearCart = () => ({
    type: cartTypes.CLEAR_CART
})