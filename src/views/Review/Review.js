import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from '../../firebase/ultils';
import { addReview } from '../../redux/Review/Review.action';
import firebase from 'firebase/app';
import 'firebase/firestore';
const mapState = (state) => ({
    user: state.user.currentUser
  })
function Review(props) {

    const dispatch = useDispatch();
    const { user } = useSelector(mapState)

    console.log(props.product)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addReview({
                regions: firebase.firestore.FieldValue.arrayUnion("daaa")
            }, props.product.documentID)
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
              
                <div className="form-group">
                    <label htmlFor="start">Example select</label>
                    <select className="form-control" id="start">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
              
                <div className="form-group">
                    <label htmlFor="comment">Example textarea</label>
                    <textarea className="form-control" id="comment" rows={3} defaultValue={""} />
                </div>
                <button classNameName="btn btn-primary" type="submit">
                    Thêm sản phẩm
              </button>
            </form>
        </div>
    );
}

export default Review;