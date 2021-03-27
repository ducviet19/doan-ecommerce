


export const existingCartItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find(
        cartItem => cartItem.documentID === nextCartItem.documentID
    )
}

export const handleAddToCart = ({
    prevCartItems,
    nextCartItem
}) => {
    const quantityIncrement = 1;

    const cartItemExits = existingCartItem({ prevCartItems, nextCartItem });

    if (cartItemExits) {
        return prevCartItems.map(cartItem =>
            cartItem.documentID == nextCartItem.documentID ? { ...cartItem, quantity: cartItem.quantity + quantityIncrement } : cartItem
        )
    }

    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ]

}