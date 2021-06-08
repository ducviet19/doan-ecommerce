import { fetchCart } from "./cart.action";
import cartTypes from "./cart.types"
import { handleAddToCart, handleReduceCartItem, handleRemoveCartItem, handleUpdateToCart } from './cart.utils'

const INITIAL_STATE = {
    cartItems: [],
    loadingCart: true,
    success: false,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: handleAddToCart({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload,
                }),
                loadingCart: false
            };
        case cartTypes.REDUCE_CART_ITEM:
            return {
                ...state,
                cartItems: handleReduceCartItem({
                    prevCartItems: state.cartItems,
                    cartItemToReduce: action.payload
                }),
                loadingCart: false
            }
        case cartTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: handleRemoveCartItem({
                    prevCartItems: state.cartItems,
                    CartItemToRemove: action.payload
                })
            }


        case cartTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        case cartTypes.CART_DEFAULT:
            return {
                ...state,
                loadingCart: true,
                success: false
            }
        case cartTypes.FETCH_CART:
        default:
            return state
    }
}

export default cartReducer;