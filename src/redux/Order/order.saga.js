import { takeLatest, put, all, call } from 'redux-saga/effects';
import { clearCart } from '../Cart/cart.action';
import { setOrderDetail, setUserOrderHistory } from './order.action';
import { handleAddOrder, handleGerOrder, handleGetUserOrderHistory } from './order.helper';
import orderTypes from './order.types';

// add order

export function* addOrder( {payload} ) {

    try {
        console.log(payload)
        yield handleAddOrder(
            payload
        );
        
    } catch (err) {
        // console.log(err);
    }

}

export function* onAddOrder() {
    yield takeLatest(orderTypes.ADD_TO_ORDER, addOrder);
}


export function* getUserOrderHistory({payload}) {
    try {
        console.log("get order")
        console.log(payload)
        const history = yield handleGetUserOrderHistory(payload);
        console.log(history)
        yield put(
            setUserOrderHistory(history)
        )
        
    } catch (error) {
        
    }
}


export function* onGetUserOrderHistory() {
    yield takeLatest(orderTypes.GET_USER_ORDER_HISTORY, getUserOrderHistory)
}

export function* getOrderDetail({payload}) {
    try {
        const order = yield handleGerOrder(payload)
        yield put(
            setOrderDetail(order)
        )
        
    } catch (error) {
        
    }
}


export function* onGetOrderDetail() {
    yield takeLatest(orderTypes.GET_ORDER_DETAIL, getOrderDetail )
}



export default function* orderSagas() {
    yield all([
        call(onAddOrder),
        call(onGetUserOrderHistory),
        call(onGetOrderDetail)
    ])
}