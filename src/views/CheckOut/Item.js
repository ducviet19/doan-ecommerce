import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQtyItem, addToCart, reduceCartItem, removeCart, removeCartItem } from '../../redux/Cart/cart.action';
import { selectCartTotal } from '../../redux/Cart/cart.selectors';


const mapState = ({ productsData }) => ({
    products: productsData.products
})
function Item(props) {
    const { products  } = useSelector(mapState)
   const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addToCart(product))
    }

    const reduceCart = (product) => {
        dispatch(reduceCartItem(product))
    }
    
    const removeCart = (documentID) => {
        dispatch(removeCartItem({documentID}))
    }

    const { thumbnail , name , size ,quantity , price } = props
    console.log(props)
    return (
        <>
        {  quantity == 0 ? "" :  
            <tr>
                <th scope="row"><img className="img-thumbnail w-25" src={thumbnail} /></th>
                <td>{name}</td>
                <td>Size</td>
                <td> <div className="d-flex "> <button onClick={ () => addProduct(props) }>+</button> <p className="m-2">{quantity}</p> <button onClick={ () => reduceCart(props) } >-</button> </div> </td>
                <td>{price}</td>
                <td > <button onClick={ () => removeCart(props.documentID)  }>X</button> </td>
            </tr> 

            
            }
           

        </>
    );
}

export default Item;