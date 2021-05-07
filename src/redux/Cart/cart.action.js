import cartTypes from "./cart.types";



export const addToCart = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload : nextCartItem
})


export const removeCartItem = (cartItem ) => (
    {
        type: cartTypes.REMOVE_CART_ITEM,
        payload: cartItem,
    }
)


export const clearCart = () => ({
    type: cartTypes.CLEAR_CART
})



export const reduceCartItem = (cartItem) => ({
    type: cartTypes.REDUCE_CART_ITEM,
    payload: cartItem
})

export const fetchCart = () => ({
    type: cartTypes.FETCH_CART
})


// loading 
export const cartLoading = (id) => ({
    type: cartTypes.CART_LOADING,
    payload : id
})
export const cartDefault = () => ({
    type: cartTypes.CART_DEFAULT
})

