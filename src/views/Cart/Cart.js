import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/ultils';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import ButtonCheckOut from '../CheckOut/ButtonCheckOut';
import Item from '../CheckOut/Item';


const mapState = createStructuredSelector({
    cartItems: selectCartItems
});

function Cart(props) {
    const { cartItems } = useSelector(mapState);
    console.log(cartItems)



    useEffect( () => {
        return new Promise((resolve, reject) => {
            firestore
                .collection('cart')
                .doc()
                .set({cartItems})
                .then(() => {
                    resolve()
                })
                .catch(err => {
                    reject(err);
                })
        });
    },[cartItems] )


   
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
                    <tbody>
                        {cartItems.map((item) => ( 
                           <Item {...item} />
                        ))}

                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default Cart;