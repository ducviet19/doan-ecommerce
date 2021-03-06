import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/ultils';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cart.selectors';
import ButtonCheckOut from '../CheckOut/ButtonCheckOut';
import Item from '../CheckOut/Item';


const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

function Cart(props) {
    const { cartItems ,total } = useSelector(mapState);
    console.log(cartItems)




    // useEffect( () => {
    //     return new Promise((resolve, reject) => {
    //         firestore
    //             .collection('cart')
    //             .doc()
    //             .set({cartItems})
    //             .then(() => {
    //                 resolve()
    //             })
    //             .catch(err => {
    //                 reject(err);
    //             })
    //     });
    // },[cartItems] )


   
    return (
        <div>
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
                    {cartItems.length > 0 ? <tbody>
                        {cartItems.map((item) => ( 
                           <Item {...item} />
                        ))}

                    </tbody> : <p>Bạn không có sản phẩm nào trong giỏ hàng</p> }
                    
                </table>

                <table>
                    <tr>
                        <td>
                            <h3>Tổng Tiền : {total} </h3>
                        </td>
                    </tr>
                </table>
            </div>
            
        </div>
    );
}

export default Cart;