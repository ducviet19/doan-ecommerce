


export const existingCartItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find(
        cartItem => ((cartItem.documentID === nextCartItem.documentID) && (cartItem.size === nextCartItem.size))
    )
}

export const handleUpdateToCart = ({
    prevCartItems,
    nextCartItem
}) => {
    const quantityIncrement = 1;

    const cartItemExits = existingCartItem({ prevCartItems, nextCartItem });

    if (cartItemExits) {
        return prevCartItems.map(cartItem =>
            cartItem.documentID == nextCartItem.documentID ? { ...cartItem, quantity: cartItem.quantity - quantityIncrement } : cartItem
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

export const handleAddToCart = ({
    prevCartItems,
    nextCartItem,
}) => {


    const quantityIncrement = 1;

    const cartItemExits = existingCartItem({ prevCartItems, nextCartItem });

    if (cartItemExits) {
        return prevCartItems.map(cartItem =>
            ((cartItem.documentID == nextCartItem.documentID) && (cartItem.size == nextCartItem.size)) ? { ...cartItem, quantity: cartItem.quantity + quantityIncrement }
                : cartItem
        )
    }

    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        },
    ]



}
export const handleReduceCartItem = ({
    prevCartItems,
    cartItemToReduce
}) => {
    const quantityIncrement = 1;
 

    const existingCartItem = prevCartItems.find(cartItem => ((cartItem.documentID === cartItemToReduce.documentID) && (cartItem.size === cartItemToReduce.size)));

    if (existingCartItem.quantity === 1) {

        return prevCartItems.filter(item =>
            ((item.size !== cartItemToReduce.size || item.documentID !== cartItemToReduce.documentID))
        );
        
    }

    return prevCartItems.map(cartItem =>
        ((cartItem.documentID == cartItemToReduce.documentID) && (cartItem.size == cartItemToReduce.size)) ? { ...cartItem, quantity: cartItem.quantity - quantityIncrement }
            : cartItem
    )
    
}


export const handleRemoveCartItem = ({
    prevCartItems,
    CartItemToRemove
}) => {
 
    return prevCartItems.filter(item =>
        ((item.size !== CartItemToRemove.size || item.documentID !== CartItemToRemove.documentID))
    );

}


