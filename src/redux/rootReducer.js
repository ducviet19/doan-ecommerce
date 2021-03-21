import { combineReducers } from "redux";
import userReducer from "./User/user.reducer";
import productsReducer from './Product/products.reducer'

export default combineReducers({
    user: userReducer,
    productsData: productsReducer

})