import Item from "../../views/CheckOut/Item";
import swal from 'sweetalert';


export const existingCartItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find(
        cartItem => ((cartItem.documentID === nextCartItem.documentID) && (cartItem.size === nextCartItem.size) )
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
            ((cartItem.documentID == nextCartItem.documentID) && (cartItem.size == nextCartItem.size) ) ? { ...cartItem, quantity: cartItem.quantity + quantityIncrement  } 
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
    const existingCartItem = prevCartItems.find(cartItem => cartItem.documentID === cartItemToReduce.documentID);

    if (existingCartItem.quantity === 1) {
        return prevCartItems.filter(
            cartItem => cartItem.documentID !== existingCartItem.documentID
        );
    }

    return prevCartItems.map(cartItem =>
        cartItem.documentID === existingCartItem.documentID ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem)
}


export const handleRemoveCartItem = ({
    prevCartItems,
    CartItemToRemove
}) => {
    console.log('CartItemToRemove',CartItemToRemove);
    console.log('prevCartItems',prevCartItems)
    return prevCartItems.filter(item => 
        // ((item.documentID !== CartItemToRemove.documentID) && (item.size !== CartItemToRemove.size) )
        (item.size !== CartItemToRemove.size   &&  item.documentID !== CartItemToRemove.documentID ) 
        );
}