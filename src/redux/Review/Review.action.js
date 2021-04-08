import reviewTypes from "./Review.type";

export const addReview = (review,id) => ({
    type: reviewTypes.ADD_REVIEW,
    payload: review,
    id
});
 

// reviews []
export const fetchReviews = (id) => ({
    type: reviewTypes.FETCH_REVIEW,
    payload: id
});
export const setReviews = review => ({
    type: reviewTypes.SET_REVIEW,
    payload: review
})

// action 

export const deleteReview = id => ({
    type: reviewTypes.DELETE_REVIEW,
    payload: id
})


