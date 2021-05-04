import { createSelector } from "reselect";




export const selectCartData = state => state.cartData;
export const selectCartItems = createSelector(
    [selectCartData],
    cartData => cartData.cartItems
);



export const selectLoadingCart = state => state.cartData;
export const selectCartLoading = createSelector(
    [selectLoadingCart],
    cartData => cartData.loadingCart
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (quantity, cartItem) =>
            quantity + cartItem.quantity, 0
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItem =>
        cartItem.reduce(
            (quantity, cartItem) =>
                quantity + cartItem.quantity * cartItem.price, 0
        )
)