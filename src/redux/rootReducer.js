import { combineReducers } from "redux";
import cartReducer from "./Cart/cart.reducer";
import productsReducer from "./Product/products.reducer";
import userReducer from "./User/user.reducer";

import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

export const rootReducer = combineReducers({
    user: userReducer,
    productsData: productsReducer,
    cartData: cartReducer
})

const configStorage = {
    key: 'root',
    storage,
    whiteList: ['cartData']
}



export default persistReducer(configStorage, rootReducer)