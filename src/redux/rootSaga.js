import { all,call } from 'redux-saga/effects'
import productsSagas from './Product/products.sagas'

import orderSagas from './Order/order.saga'
import cartSagas from './Cart/cart.saga'
import userSagas from './User/user.saga'
import reviewSagas from './Review/Review.saga'


export default function* rootSaga() {
    yield all([
      call(userSagas), 
      call(productsSagas),
      call(cartSagas),
      call(orderSagas),
      call(reviewSagas)
    ])
  }