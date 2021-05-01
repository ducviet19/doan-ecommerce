import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { addToCart, removeCart } from '../../redux/Cart/cart.action';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import './style.css';
import swal from 'sweetalert';
import { formatter } from '../../App';
import Start from '../Start/Start';
import { editProduct, fetchProductStart, updateNumber } from '../../redux/Product/products.action';
const mapState = createStructuredSelector({
    cartItems: selectCartItems
});

function ProductCart(product) {
    const { cartItems } = useSelector(mapState)
    const dispatch = useDispatch()
    const [numberProduct , setNumberProduct] = useState(product.number)

    const { documentID, thumbnail, name, price, number ,handleChange ,handleUpdateNumber ,data } = product;
    console.log('numberProduct',numberProduct)
    const handleAddToCart = (product) => {
        if (!product) return;

        dispatch(addToCart(product))
        // dispatch(updateNumber(product.number , product.documentID))
        handleUpdateNumber(data,product.documentID)
        handleChange(true)
        swal({
            button: false,
            text: "Sản phẩm đã được thêm vào giỏ hàng",
            icon: "success",
            timer: 1000
        });
    }
    return (
        <>
            <div className="justyfy-content-center card p-1 m-5 col-lg-2 col-md-3 col-sm-3 col-12 text-decoration-none">
                <img className="img-fluid m-auto" src={thumbnail} alt="Card image" />
                <Link style={{ textDecoration: 'none' }} to={`/product/${documentID}`} className="">
                    <div className="detail">
                        <p className="card-text text-center bold  ">{name}</p>
                    </div>
                </Link>
                <p className="text-center"><strong> {formatter.format(price)}</strong></p>
                <div className="d-flex justify-content-center">
                    {number == 0 ? <button className="btn btn-primary" disabled >Sold Out</button> : <button className="btn btn-secondary w-100" onClick={() => { handleAddToCart(product) }}><i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng</button>}
                </div>
                <div className="rating text-center p-3">
                    <span>
                       <Start product={product}  />
                    </span>
                </div>
            </div>
        </>
    );
}

export default ProductCart;