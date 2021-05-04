import React from 'react';
import LoadingBox from '../../component/LoadingBox/LoadingBox';

function ButtonCart(props) {
    const { data, reduceCart, addProduct, product, loadingCart } = props;
    console.log(data)
    return (
        <>
            <div className="d-flex pt-2 ">
                {loadingCart == false ? <LoadingBox /> : <button className="btn" onClick={() => reduceCart(data)} ><i className="fas fa-minus"></i></button>}
                <p className="m-2">{data.quantity}</p>
                <> {data.quantity == data.number ? <button disabled className="btn  " onClick={() => addProduct(data)}>Hết hàng</button> :
                    <> {loadingCart == false ? <LoadingBox /> : <button className="btn  " onClick={() => addProduct(data)}><i className="fas fa-plus"></i></button>
                    }  </>
                } </>
            </div>
             
        </>
    );
}

export default ButtonCart;