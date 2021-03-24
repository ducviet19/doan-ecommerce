import { combineReducers } from "redux";
import productsReducer from "./Product/products.reducer";
import userReducer from "./User/user.reducer";


export default combineReducers({
    user: userReducer,
    productsData: productsReducer
})