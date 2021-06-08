import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { addToCart, cartLoading, removeCart } from '../../redux/Cart/cart.action';
import { selectCartItems, selectCartLoading } from '../../redux/Cart/cart.selectors';
import './style.css';
import swal from 'sweetalert';
import { formatter } from '../../App';
import Start from '../Start/Start';
import { editProduct, fetchProductStart, updateNumber } from '../../redux/Product/products.action';
import LoadingBox from '../../component/LoadingBox/LoadingBox';
import ButtonAddtoCart from '../../component/ButtonAddtoCart/ButtonAddtoCart';
const mapState = createStructuredSelector({
    cartItems: selectCartItems
});

const mapLoading = state => ({
    loadingCart: state.cartData.loadingCart
});

function ProductCart(product) {
    const { cartItems } = useSelector(mapState)
    const { loadingCart } = useSelector(mapLoading)
    const dispatch = useDispatch()


    const { documentID, thumbnail, name, price, number, handleChange, handleUpdateNumber, data ,numOrder } = product;

    console.log('product',product)
    console.log('numOrder',numOrder)


    return (
        <>
            <div className="col-4">
                <img src={thumbnail} alt="" />
                <Link  to={`/product/${documentID}`} > 
                <h4>{name}</h4>
                </Link>
                <p>Đã bán {numOrder}</p>
                <Start product={product}  />
                <p>{formatter.format(price)}</p>
            </div>


        </>
    );
}

export default ProductCart;