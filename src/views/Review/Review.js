import React, { useState } from 'react';
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

    const [start, setStart] = useState('');
    const [comment, setComment] = useState('')

    console.log(props.product)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            timeDate: new Date().toISOString(),
            user : user,
            start : start,
            comment: comment
        }
        dispatch(
            addReview({
                    review : firebase.firestore.FieldValue.arrayUnion(data)
            }, props.product.documentID)
        )
        resetForm()
    }

    const resetForm = () => {
        setComment('')
        setStart('')
    }

    return (
        <div>
            <div>
                <h2 className="text-center pt-5">Đánh giá sản phẩm</h2>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="start">Chọn mức độ hài lòng</label>
                    <select value={start} onChange={ (e) => setStart(e.target.value) }  className="form-control" id="start">
                        <option>Chọn</option>
                        <option value={1} >Rất tệ</option>
                        <option value={2}>Tệ</option>
                        <option value={3}>Trung bình</option>
                        <option value={4}>Tốt</option>
                        <option value={5}>Rất Tốt</option>
                    </select>
                </div>
              
                <div className="form-group">
                    <label htmlFor="comment">Để lại bình luận</label>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="form-control" id="comment" rows={3} defaultValue={""} />
                </div>
                <button class="btn btn-success btn-lg" type="submit">Đánh giá</button>
            </form>
        </div>
    );
}

export default Review;