import cartTypes from "./cart.types"
import  {handleAddToCart, handleUpdateToCart}   from './cart.utils'

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: handleAddToCart({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })
            };

        case cartTypes.REMOVE_CART: 
            return {
                ...state,
                cartItems: handleUpdateToCart({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })
            }
        case cartTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }

        default:
            return state
    }
}

export default cartReducer;