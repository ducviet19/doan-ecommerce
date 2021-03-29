import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCart } from '../../redux/Cart/cart.action';


const mapState = ({ productsData }) => ({
    products: productsData.products
})
function Item(props) {
    const { products } = useSelector(mapState)
   const dispatch = useDispatch();

    const updateCart = (cart) => {
        dispatch(removeCart(cart))
    }
    
    const removeCart = (cart) => {
        dispatch(addToCart(cart))
    }

    const { thumbnail , name , size ,quantity , price } = props
    console.log(props)
    return (
        <>
        {  quantity == 0 ? "" :  <tr>
                <th scope="row"><img className="img-thumbnail w-25" src={thumbnail} /></th>
                <td>{name}</td>
                <td>Size</td>
                <td> <div className="d-flex "> <button onClick={() => updateCart(props) } >+</button> <p className="m-2">{quantity}</p> <button>-</button> </div> </td>
                <td>{price}</td>
                <td onClick={ () => updateCart  }>X</td>
            </tr> }
           

        </>
    );
}

export default Item;