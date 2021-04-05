import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { addToCart, removeCart } from '../../redux/Cart/cart.action';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import './style.css';
import swal from 'sweetalert';
const mapState = createStructuredSelector({
    cartItems: selectCartItems
});

function ProductCart(product) {
    const { cartItems } = useSelector(mapState)
    const dispatch = useDispatch()
    const history = useHistory()

    const { documentID, thumbnail, name, price ,number } = product;


    console.log(product)

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(addToCart(product));
        swal("Thêm thành công!", "Sản phẩm đã được thêm vào giỏ hàng", "success");
        // history.push('/cart')

    }
    return (
        <>
            <div to={`/product/${documentID}`} className="card p-0  col-lg-3 col-12 text-decoration-none">
            <img className="img-fluid w-75 h-100" src={thumbnail} alt="Card image" />
            <Link to={`/product/${documentID}`} className=""> 
            <div className="detail">
                    <p className="card-text text-center bold  ">{name}</p>         
            </div>
            </Link> 
                <p className="text-center"><strong>{price}đ</strong></p>
                <div className="d-flex justify-content-center">
                    { number == 0 ?  <button className="btn btn-primary" disabled >Sold Out</button> :  <button  className="btn btn-secondary"  onClick={() => { handleAddToCart(product) }}><i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng</button> }
                </div>
                <div className="rating text-center p-3">
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