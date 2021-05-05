import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleAddProduct, handleDeleteProduct, handleEditProduct, handleFetchDetailProduct, handleFetchProducts ,handleFetchProductsHome } from './products.helpers'
import productsTypes from './products.types';
import { auth } from './../../firebase/ultils'
import { setProducts, fetchProducts, setProduct, fetchProductStart, setProductsHome, productSucces, productDetailSucces } from './products.action'
import { cartDefault } from '../Cart/cart.action';

// add product

export function* addProduct({ payload }) {

    try {
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
        yield put(
            setProducts(product)
        );
        yield put(
            productSucces()
        );
        yield put(
            cartDefault()
        )

    } catch (err) {
        // console.log(err);
    }
}

export function* onFetchProduct() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS, fetchProduct);
}



// fetch product home 
export function* fetchProductHome({ payload }) {
    try {
        const product = yield handleFetchProductsHome(payload);
        yield put(
            setProductsHome(product)
        );

    } catch (err) {
        // console.log(err);
    }
}

export function* onFetchProductHome() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS_HOME, fetchProductHome);
}


// fetch product
export function* fetchProductId({ payload }) {
    try {
        const productEdit = yield handleFetchDetailProduct(payload);
        yield put(
            setProduct(productEdit)
        );
        yield put(
            productDetailSucces()
        );
    } catch (error) {

    }
}
export function* onFetchProductId() {
    yield takeLatest(productsTypes.FETCH_PRODUCT_ID, fetchProductId)
}


// delete product
export function* deleteProduct({ payload }) {
    try {
        yield handleDeleteProduct(payload);
        yield put(
            fetchProducts({})
        )

    } catch (error) {

    }
}

export function* onDeleteProductct() {
    yield takeLatest(productsTypes.DELETE_PRODUCT, deleteProduct)
}


export function* editProduct({ payload, id }) {
    try {

        yield handleEditProduct(payload, id);

        yield put(
            fetchProductStart(id)
            // setProduct(product)
        )
    }
    catch (err) {

    }

}


export function* onEditProduct() {
    yield takeLatest(productsTypes.EDIT_PRODUCT, editProduct)

}


export function* updateNumber({ payload, id }) {
    try {

        
     
        let value = {
           ...payload,
           number : payload.number - 1
        }
        yield handleEditProduct(value, id);
        yield put(
            fetchProductStart(id)
        )
        yield put(
            fetchProducts({})
        )
    }
    catch (err) {

    }
}


export function* onUpdateNumber() {
    yield takeLatest(productsTypes.UPDATE_NUMBER, updateNumber)
}


export function* reducerNumber({ payload, id }) {
    try {


        let value = {
           ...payload,
           number : payload.number + 1
        }
        yield handleEditProduct(value, id);
        yield put(
            fetchProductStart(id)
        )
        yield put(
            fetchProducts({})
        )
    }
    catch (err) {

    }
}


export function* onReducerNumber() {
    yield takeLatest(productsTypes.REDUCER_NUMBER, reducerNumber)
}





export default function* productsSagas() {
    yield all([
        call(onAddProduct),
        call(onFetchProduct),
        call(onDeleteProductct),
        call(onFetchProductId),
        call(onEditProduct),
        call(onUpdateNumber),
        call(onFetchProductHome),
        call(onReducerNumber)
    ])
}