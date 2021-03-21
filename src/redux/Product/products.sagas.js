import { takeLatest, put, all, call } from 'redux-saga/effects';
import { handleAddProduct, handleFetchProducts } from './products.helpers'
import productsTypes from './products.types';
import { auth } from './../../firebase/ultils'
import { setProducts, fetchProducts } from './products.action'

// export function* addProducts({ payload:
//     {
//         name,
//         category,
//         description,
//         price,
//         thumbnail
//     } }) {
//     try {
//         const timestamp = new Date();
//         yield handleAddProduct({
//             name,
//             category,
//             description,
//             price,
//             thumbnail,
//             productAdminUserUID: auth.currentUser.uid,
//             createdDate: timestamp
//         });

//     } catch (err) {
//         console.log(err)
//     }
// };

// export function* onAddProduct() {
//     yield takeLatest(productsTypes.ADD_NEW_PRODUCT, addProducts);
// }

// export function* fetchProducts() {
//     try {
//         const products = yield handleFetchProducts();
//         yield put(
//             setProducts(products)
//         );
//     } catch (err) {

//     }
// }

// export function* onFetchProducts() {
//     yield takeLatest(productsTypes.FETCH_PRODUCTS,)
// }

// export default function* productsSagas() {
//     yield all([
//         call(onAddProduct),
//         call(onFetchProducts),
//     ])
// }

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