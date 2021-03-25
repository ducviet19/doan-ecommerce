import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleAddProduct, handleDeleteProduct, handleEditProduct, handleFetchDetailProduct, handleFetchProducts } from './products.helpers'
import productsTypes from './products.types';
import { auth } from './../../firebase/ultils'
import { setProducts, fetchProducts, setProduct ,fetchProductStart } from './products.action'

// add product

export function* addProduct({ payload }) {

    try {
        console.log('payload add product' , payload)
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


// fetch all Products

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


// fetch product
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


// delete product
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


export function* editProduct({payload ,id}) {
    try {

        console.log('payload edit product', payload)
        console.log('id edit product', id)
        const product = yield handleEditProduct(payload,id);

        yield put(
            fetchProductStart(product)
        )
    }
    catch(err) {

    }
    
}


export function* onEditProduct() {
    yield takeLatest(productsTypes.EDIT_PRODUCT , editProduct)
    
}





export default function* productsSagas() {
    yield all([
        call(onAddProduct),
        call(onFetchProduct),
        call(onDeleteProductct),
        call(onFetchProductId),
        call(onEditProduct)
    ])
}