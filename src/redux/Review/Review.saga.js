import { all, call, takeLatest } from "redux-saga/effects";
import { handleAddReview } from "./Review.helper";
import reviewTypes from "./Review.type";

export function* addReview({ payload ,id }) {

    try {
        console.log('payload add product' , payload)
        yield handleAddReview(payload ,id );
       
    } catch (err) {
        // console.log(err);
    }
}

export function* onAddReview() {
    yield takeLatest(reviewTypes.ADD_REVIEW,addReview);
}

export default function* reivewSagas() {
    yield all([
        call(onAddReview)
    ])
}