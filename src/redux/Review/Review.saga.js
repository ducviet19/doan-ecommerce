import { all, call, put, take, takeLatest } from "redux-saga/effects";
import { fetchReviews, setReviews } from "./Review.action";
import { handleAddReview , handleFetchReviews } from "./Review.helper";
import reviewTypes from "./Review.type";

export function* addReview({ payload ,id }) {

    try {
        console.log('payload add product' , payload)
        yield handleAddReview(payload ,id );
        yield put(
            fetchReviews(id)
        )
       
    } catch (err) {
        // console.log(err);
    }
}

export function* onAddReview() {
    yield takeLatest(reviewTypes.ADD_REVIEW,addReview);
}

export function* fetchListReview({payload}) {
    try {
        console.log(payload)
        const reviews = yield handleFetchReviews(payload);
        
        yield put(
            setReviews(reviews)
        );
    } catch (error) {
        
    }
}



export function* onFetchReview() {
    yield takeLatest(reviewTypes.FETCH_REVIEW, fetchListReview)
}
export default function* reviewSagas() {
    yield all([
        call(onAddReview),
        call(onFetchReview)
    ])
}