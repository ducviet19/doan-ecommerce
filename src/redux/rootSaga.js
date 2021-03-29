import { all,call } from 'redux-saga/effects'
import productsSagas from './Product/products.sagas'
import cartSagas from './Cart/cart.saga'
import userSagas from './User/user.saga'


export default function* rootSaga() {
    yield all([
      call(userSagas), 
      call(productsSagas),
      call(cartSagas)
    ])
  }