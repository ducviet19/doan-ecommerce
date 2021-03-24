import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleAddProduct, handleFetchProducts } from './products.helpers'
import productsTypes from './products.types';
import { auth } from './../../firebase/ultils'
import { setProducts, fetchProducts } from './products.action'



export function* addProduct({ payload }) {

    try {
        console.log("add")
        const timestamp = new Date();
        yield handleAddProduct({
            ...payload,
            productAdminUserUID: auth.currentUser.uid,
            createdDate: timestamp
        });
        yield put(
            fetchProducts()
        );


    } catch (err) {
        // console.log(err);
    }

}

export function* onAddProduct() {
    yield takeLatest(productsTypes.ADD_NEW_PRODUCT, addProduct);
}


export function* fetchProduct({ payload }) {
    try {

        const product = yield handleFetchProducts(payload);
        console.log(product)
        yield put(
            setProducts(product)
        );

    } catch (err) {
        // console.log(err);
    }
}

export function* onFetchProduct() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS, fetchProduct);
}

export default function* productsSagas() {
    yield all([
        call(onAddProduct),
        call(onFetchProduct),
    ])
}