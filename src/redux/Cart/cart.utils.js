import Item from "../../views/CheckOut/Item";
import swal from 'sweetalert';


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
 
    // const existingCartItem = prevCartItems.find(cartItem => ((cartItem.documentID === cartItemToReduce.documentID)));

    const existingCartItem = prevCartItems.find(cartItem => ((cartItem.documentID === cartItemToReduce.documentID) && (cartItem.size === cartItemToReduce.size)));

    if (existingCartItem.quantity === 1) {

        return prevCartItems.filter(item =>
            ((item.size !== cartItemToReduce.size || item.documentID !== cartItemToReduce.documentID))
        );

        // prevCartItems.splice(cartItemToReduce.index, 1)
        // return prevCartItems
        // return prevCartItems.filter(
        //     (cartItem => cartItem.documentID !== existingCartItem.documentID )
        // );
    }

    return prevCartItems.map(cartItem =>
        ((cartItem.documentID == cartItemToReduce.documentID) && (cartItem.size == cartItemToReduce.size)) ? { ...cartItem, quantity: cartItem.quantity - quantityIncrement }
            : cartItem
    )
    // cartItem.documentID === existingCartItem.documentID ? { ...cartItem, quantity: cartItem.quantity - 1 }
    //     : cartItem)
}


export const handleRemoveCartItem = ({
    prevCartItems,
    CartItemToRemove
}) => {
    console.log('prevCartItems',prevCartItems)
 
    return prevCartItems.filter(item =>
        ((item.size !== CartItemToRemove.size || item.documentID !== CartItemToRemove.documentID))
    );





    // return prevCartItems.filter(item => 
    //     ((item.documentID !== CartItemToRemove.documentID && item.size !== CartItemToRemove.size ) )
    //     );
    // return prevCartItems.map((item) => {
    //     if(item.documentID !== CartItemToRemove.documentID && item.size !== CartItemToRemove.size) {

    //         // return prevCartItems
    //         // prevCartItems.push(item);
    //         // console.log(newArr);
    //         // prevCartItems = newArr; 
    //         // return newArr
    //     }
    //     // return prevCartItems
    // } )

    // let newArr = [];
    // newArr.push(CartItemToRemove)
    // console.log(newArr)



    // return prevCartItems.filter((item) => item !== CartItemToRemove )
    // return newArr
    // console.log(prevCartItems.filter((item) =>(item.documentID !== CartItemToRemove.documentID && item.size !== CartItemToRemove.size ) )) 

}