import orderTypes from "./order.types";

export const addToOrder = (info) => ({
    type: orderTypes.ADD_TO_ORDER,
    payload: info
})