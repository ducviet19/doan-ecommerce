
import reviewTypes from './Review.type';

const INITIAL_STATE = {
    listReview: [] 
};

const reviewReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) { 
        case reviewTypes.FETCH_REVIEW:
            return {
                ...state
            }
        case reviewTypes.SET_REVIEW:
            return {
                ...state,
                listReview: action.payload
            }
        default:
            return state;
    }
};
export default reviewReducer;