import { useDispatch } from "react-redux";
import Item from "../../views/CheckOut/Item";
import { editProduct } from "../Product/products.action";





export const existingCartItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find(
        // check if id of next item == id prev item ==> exits item
        cartItem => cartItem.documentID === nextCartItem.documentID
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
    nextCartItem
}) => {

    
    const quantityIncrement = 1;
    console.log('nextCartItem',nextCartItem)

    const cartItemExits = existingCartItem({ prevCartItems, nextCartItem });

    if (cartItemExits) {
        
        return prevCartItems.map(cartItem =>
            cartItem.documentID == nextCartItem.documentID ? { ...cartItem, quantity: cartItem.quantity + quantityIncrement } : cartItem
        );
    }

    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement,
           
        }
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
    return prevCartItems.filter(item => item.documentID !== CartItemToRemove.documentID);
}