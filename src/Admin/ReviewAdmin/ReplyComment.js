import { replace } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReply, addReview } from '../../redux/Review/Review.action';
import firebase from 'firebase/app';
import 'firebase/firestore';
const mapState = (state) => ({
    user: state.user.currentUser
})
function ReplyComment(props) {

    const { user } = useSelector(mapState);

    const [reply, setReply] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            user: user,
            timeDate: new Date().toISOString(),
            reply: reply
        } 
        
        dispatch(
            addReply({
                reply: firebase.firestore.FieldValue.arrayUnion(data)
            },props.id )
        )
        setReply('')

    }


    return (

        <div className="main-content">
            <div className="card card-inner">
                <div className="card-body">
                    <div className="row">

                        <div className="col-md-2">
                            <img src={user.imageUser} className="img img-rounded img-fluid" />
                        </div>
                        <div className="col-md-10">
                            <p><p ><strong>{user.displayName}(Quản trị viên)</strong></p></p>
                            <form onSubmit={handleSubmit}>
                                <input value={reply} onChange={(e) => {
                                    setReply(e.target.value)
                                }} type="textarea" placeholder="Trả lời bình luận" />
                                <p>
                                    <p className="float-right btn btn-outline-primary ml-2"> <input type="submit" value="Trả lời"  /><i class="fa fa-reply"></i> </p>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReplyComment;