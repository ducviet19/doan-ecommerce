import { combineReducers } from "redux";
import cartReducer from "./Cart/cart.reducer";
import productsReducer from "./Product/products.reducer";
import userReducer from "./User/user.reducer";


export default combineReducers({
    user: userReducer,
    productsData: productsReducer,
    cartData: cartReducer
})