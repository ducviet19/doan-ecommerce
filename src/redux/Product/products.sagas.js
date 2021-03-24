import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleAddProduct, handleDeleteProduct, handleFetchDetailProduct, handleFetchProducts } from './products.helpers'
import productsTypes from './products.types';
import { auth } from './../../firebase/ultils'
import { setProducts, fetchProducts, setProduct } from './products.action'



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

export function* fetchProductId({payload}) {
    try {
        const productEdit = yield handleFetchDetailProduct(payload);
        yield put(
            setProduct(productEdit)
        );
    } catch (error) {
        
    }
}
export function* onFetchProductId() {
    yield takeLatest(productsTypes.FETCH_PRODUCT_ID,fetchProductId)
}

export function* deleteProduct({payload}) {
    try {
        yield handleDeleteProduct(payload);
        yield put(
            fetchProducts()
        )
        
    } catch (error) {
        
    }
}

export function* onDeleteProductct() {
    yield takeLatest(productsTypes.DELETE_PRODUCT, deleteProduct)
}
export default function* productsSagas() {
    yield all([
        call(onAddProduct),
        call(onFetchProduct),
        call(onDeleteProductct),
        call(onFetchProductId)
    ])
}