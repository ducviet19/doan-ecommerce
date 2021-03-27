import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/Cart/cart.action';

function ProductCart(product) {

    const dispatch = useDispatch()

    const { documentID, thumbnail, name, price } = product;



    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(addToCart(product))

    }
    return (
        <>
            <div to={`/product/${documentID}`} className="card p-0  col-lg col-12 mr-3 text-decoration-none">
            <img className="img-fluid w-100 h-100" src={thumbnail} alt="Card image" />
            <Link to={`/product/${documentID}`}> <div className="card-body">
                    <p className="card-text text-center">{name}</p>
                    <p className="text-center"><strong>{price}đ</strong></p>
                </div></Link> 
               
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={() => { handleAddToCart(product) }}>Thêm vào giỏ hàng</button>
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