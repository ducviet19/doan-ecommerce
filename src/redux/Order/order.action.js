import userTypes from "../User/user.type";
import orderTypes from "./order.types";

export const addToOrder = (info) => ({
    type: orderTypes.ADD_TO_ORDER,
    payload: info
})




export const getUserOrderHistory = uid => ({
    type: orderTypes.GET_USER_ORDER_HISTORY,
    payload: uid
})

export const setUserOrderHistory = history => ({
    type: orderTypes.SET_USER_ORDER_HISTORY,
    payload: history
})