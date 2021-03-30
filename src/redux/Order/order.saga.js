import { takeLatest, put, all, call } from 'redux-saga/effects';
import { clearCart } from '../Cart/cart.action';
import { handleAddOrder } from './order.helper';
import orderTypes from './order.types';

// add order

export function* addOrder( payload ) {

    try {
        console.log('payload add product' , payload.payload)
        yield handleAddOrder(
            payload.payload
        );
        
    } catch (err) {
        // console.log(err);
    }

}

export function* onAddOrder() {
    yield takeLatest(orderTypes.ADD_TO_ORDER, addOrder);
}




export default function* orderSagas() {
    yield all([
        call(onAddOrder),
    ])
}