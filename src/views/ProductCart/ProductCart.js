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
    cartItems: selectCartItems,
    loadingCart: selectCartLoading
});

const mapLoading = state => ({
    loadingCart: state.cartData.loadingCart
});

function ProductCart(product) {
    const { cartItems } = useSelector(mapState)
    const { loadingCart } = useSelector(mapLoading)
    const dispatch = useDispatch()


    const { documentID, thumbnail, name, price, number, handleChange, handleUpdateNumber, data } = product;


    return (
        <>
            <div className="col-4">
                <img src={thumbnail} alt="" />
                <Link  to={`/product/${documentID}`} > 
                <h4>{name}</h4>
                </Link>
               
                <Start product={product}  />
                <p>{formatter.format(price)}</p>
            </div>


          




            {/* <div className="justyfy-content-center card p-1 m-5 col-lg-2 col-md-3 col-sm-3 col-12 text-decoration-none">
                <img className="img-fluid m-auto" src={thumbnail} alt="Card image" />
                <Link style={{ textDecoration: 'none' }} to={`/product/${documentID}`} className="">
                    <div className="detail">
                        <p className="card-text text-center bold  ">{name}</p>
                    </div>
                </Link>
                <p className="text-center"><strong> {formatter.format(price)}</strong></p>
                <div className="d-flex justify-content-center">
                </div>
                <div className="rating text-center p-3">
                    <span>
                       <Start product={product}  />
                    </span>
                </div>
            </div> */}

        </>
    );
}

export default ProductCart;