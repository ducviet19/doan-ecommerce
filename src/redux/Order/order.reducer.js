import orderTypes from "./order.types";

const INITIAL_STATE = {
    orders: {
        
    },
    
};

const orderReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case orderTypes.ADD_TO_ORDER:
            return {
                ...state,
                orders: action.payload
            }
            default:
                return state
 }

}


export default orderReducer

