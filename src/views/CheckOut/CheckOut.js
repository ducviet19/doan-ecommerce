import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import useScrollTop from '../../hook/useScrollTop';
import { fetchCart } from '../../redux/Cart/cart.action';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import Cart from '../Cart/Cart';
import ButtonCheckOut from './ButtonCheckOut';
import Item from './Item';



const mapState = createStructuredSelector({
    cartItems: selectCartItems
});

const mapLoading = state => ({
    loadingCart: state.cartData.loadingCart,
    success: state.cartData.success
});
function CheckOut(props) {
    const [filterCart , setFilterCart] = useState(false);
    const { cartItems } = useSelector(mapState);
    const { loadingCart } = useSelector(mapLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        setFilterCart(true)
    },[])
    useEffect(() => {
        dispatch(fetchCart())
    },[loadingCart])
    useScrollTop();
    return (
        <div className="row mt-5 pt-5 mb-5">
            <Cart />
            { cartItems.length > 0 ? <ButtonCheckOut /> : ""  }
            
        </div>
    );
}

export default CheckOut;