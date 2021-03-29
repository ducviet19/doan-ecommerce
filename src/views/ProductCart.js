import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { addToCart, removeCart } from '../redux/Cart/cart.action';
import { selectCartItems } from '../redux/Cart/cart.selectors';

const mapState = createStructuredSelector({
    cartItems: selectCartItems
});

function ProductCart(product) {
    const { cartItems } = useSelector(mapState)
    const dispatch = useDispatch()

    const { documentID, thumbnail, name, price ,number } = product;


    console.log(product)

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(addToCart(product))

    }
    return (
        <>
            <div to={`/product/${documentID}`} className="card p-0  col-lg-3 col-12 m-5 text-decoration-none">
            <img className="img-fluid w-100 h-100" src={thumbnail} alt="Card image" />
            <Link to={`/product/${documentID}`}> 
            <div className="">
                    <p className="card-text text-center ">{name}</p>
                    <p className="text-center"><strong>{price}đ</strong></p>
            </div>
            </Link> 
                <div className="d-flex justify-content-center">
                    { number == 0 ?  <button className="btn btn-primary" disabled >Sold Out</button> :  <button  className="btn btn-primary"  onClick={() => { handleAddToCart(product) }}>Thêm vào giỏ hàng</button> }
                </div>
                <div className="rating text-center">
                    <span>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </>
    );
}

export default ProductCart;