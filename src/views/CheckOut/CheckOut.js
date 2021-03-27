import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import Item from './Item';



const mapState = createStructuredSelector({
    cartItems: selectCartItems
});
function CheckOut(props) {


    const { cartItems } = useSelector(mapState);

    console.log(cartItems)


    return (
        <div className="row">

            <div className="col-12">
                <h2>Giỏ Hàng</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">hình ảnh</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">size</th>
                            <th scope="col">số lượng</th>
                            <th scope="col">Giá</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                           <Item {...item} />
                        ))}


                    </tbody>
                </table>
            </div>
            <div className="col-12 d-flex justify-content-between">
                <button className="btn btn-primary">Tiếp tục mua sắm</button>
                <button className="btn btn-primary">Tiến hành thanh toán</button>
            </div>
        </div>
    );
}

export default CheckOut;