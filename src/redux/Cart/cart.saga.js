import { takeLatest, put, all, call } from 'redux-saga/effects';
import { firestore } from '../../firebase/ultils';
import { handleAddCart } from './cart.helper';
import cartTypes from './cart.types';


export function* addToCart({payload}) {
    try {

        // console.log('payload edit product', payload)
        // const cart = yield handleAddCart(payload);

        // console.log(cart)

        // yield put(
        //     fetchProductStart(product)
        // )
    }
    catch(err) {

    }

}

export function* onAddToCart() {
    yield takeLatest(cartTypes.ADD_TO_CART, addToCart);
}



export default function* cartSagas() {
    yield all([
       call(onAddToCart)
    ])
}