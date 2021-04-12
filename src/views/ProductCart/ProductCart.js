import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { addToCart, removeCart } from '../../redux/Cart/cart.action';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import './style.css';
import swal from 'sweetalert';
import Start from '../Start/Start';
import { formatter } from '../../App';
const mapState = createStructuredSelector({
    cartItems: selectCartItems
});

function ProductCart(product) {
    const { cartItems } = useSelector(mapState)
    const dispatch = useDispatch()
    const history = useHistory()

    const { documentID, thumbnail, name, price, number } = product;


    console.log(product)

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(addToCart(product));
        // swal("Thêm thành công!", "Sản phẩm đã được thêm vào giỏ hàng", "success" ,{
        //     icon: "success",
        //     timer: 1000
        // });
        swal({
            button: false,
            text: "Sản phẩm đã được thêm vào giỏ hàng",
            icon: "success",
            timer: 1000
        });
        // history.push('/cart')

    }
    return (
        <>
            <div to={`/product/${documentID}`} className="card p-1 mr-5 mt-5    col-lg-2 col-12 text-decoration-none">
                <img className="img-fluid m-auto w-75" src={thumbnail} alt="Card image" />
                <Link to={`/product/${documentID}`} className="">
                    <div className="detail">
                        <p className="card-text text-center bold  ">{name}</p>
                    </div>
                </Link>
                <p className="text-center"><strong> {formatter.format(price)}</strong></p>
                <div className="d-flex justify-content-center">
                    {number == 0 ? <button className="btn btn-primary" disabled >Sold Out</button> : <button className="btn btn-secondary" onClick={() => { handleAddToCart(product) }}><i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng</button>}
                </div>
                <div className="rating text-center p-3">
                    <span>
                        {/* <Start id={documentID} /> */}
                        {/* <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i> */}
                    </span>
                </div>
            </div>
        </>
    );
}

export default ProductCart;