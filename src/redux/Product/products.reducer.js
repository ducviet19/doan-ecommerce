import productsTypes from './products.types'

const INITIAL_STATE = {
    products: [],
    product: {},
    productsHome: []
};

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productsTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case productsTypes.SET_PRODUCTS_HOME:
            return {
                ...state,
                productsHome: action.payload
            }
        case productsTypes.SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
};
export default productsReducer;