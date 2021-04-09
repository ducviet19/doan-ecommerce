import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../redux/Review/Review.action';
import './style.css';
const mapState = state => ({
    listReview: state.reviewData.listReview
});

function Rate(props) {

    const { listReview } = useSelector(mapState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            fetchReviews(props.id)
        )

    } , [])

    console.log(props.id)
    console.log(listReview)


    const reviewProduct = () => {
        return (
            <div>
                {listReview.review.length == 0 ? "Sản phẩm chưa có đánh giá" : <>
                    {
                        listReview.review.map((e) => {
                            console.log(e.timeDate.split("T")[0])
                            console.log(e.user.imageUser)
                            return (
                                <>
                                    <div className="card m-2">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img src={e.user.imageUser} className="img img-rounded img-fluid rounded-circle w-50" />
                                                    <div>
                                                    <p className="text-secondary">{e.timeDate.split("T")[0]}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-10">
                                                    <p>
                                                        <a className="float-left"><strong>{e.user.displayName}</strong></a>
                                                        <p className="float-right">{e.start == "5" ? "Rất tốt" : e.start == "4" ? "  tốt" : e.start == "3" ? "Trung bình" : e.start == "2" ? "Tệ" : "Rất Tệ"}</p>
                                                        {/* <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                                        <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                                        <span className="float-right"><i className="text-warning fa fa-star" /></span>
                                                        <span className="float-right"><i className="text-warning fa fa-star" /></span> */}
                                                    </p>
                                                    <div className="clearfix" />
                                                    <p>{e.comment}</p>

                                                </div>
                                            </div>
                                            {/* <div class="card card-inner">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-md-2">
                                                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid" />
                                                            <p class="text-secondary text-center">15 Minutes Ago</p>
                                                        </div>
                                                        <div class="col-md-10">
                                                            <p><a href="https://maniruzzaman-akash.blogspot.com/p/contact.html"><strong>Maniruzzaman Akash</strong></a></p>
                                                            <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                            <p>
                                                                <a class="float-right btn btn-outline-primary ml-2">  <i class="fa fa-reply"></i> Reply</a>
                                                                <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                        </div>
                                    </div>
                                </>

                            )
                        })
                    }
                </>}

            </div>
        )
    }


    useEffect(() => {
        dispatch(fetchReviews(props.id))
    }, [])

    return (
        <>
            { listReview.review == undefined ? <>Sản phẩm chưa có đánh giá</> : reviewProduct()}

        </>


    );
}

export default Rate;