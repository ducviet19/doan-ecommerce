import React from 'react';
import LoadingBox from '../LoadingBox/LoadingBox';

function ButtonAddtoCart(props) {

    return (
        <>
              {props.number == 0 
                    ? 
                    <button className="btn btn-danger" disabled >Hết Hàng</button> 
                    : 
                    // <>
                    //  {props.loadingCart === false ? <LoadingBox /> : <button className="btn btn-secondary w-100" onClick={() => { props.handleAddToCart(props.product) }}><i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng</button>}  
                    // </>
                    <>
                    <button className="btn btn-secondary w-100" onClick={() => { props.handleAddToCart(props.product) }}><i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng</button>
                    </>
                  
                    }
        </>
    );
}

export default ButtonAddtoCart;