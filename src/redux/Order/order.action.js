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



export const getOrderDetail = orderID => ({
    type: orderTypes.GET_ORDER_DETAIL,
    payload: orderID
});


export const setOrderDetail = order => ({
    type: orderTypes.SET_ORDER_DETAIL,
    payload: order
})