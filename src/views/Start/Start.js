import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../redux/Review/Review.action';

const mapState = state => ({
    listReview: state.reviewData.listReview
});
function Start(props) {
    const dispatch = useDispatch()
    const { listReview } = useSelector(mapState)

    useEffect(() => {
        dispatch(
            dispatch(fetchReviews(props.id))
        )
    }, [])

    const producStart = () => {
        let numArr = []
        let numberStart;
        listReview.review.map((e) => {
            numArr.push(parseInt(e.start));
        })
        numberStart = (numArr.reduce((a, b) => a + b))
        let numCount = parseFloat(numberStart / (numArr.length)).toFixed(2)
        console.log(numArr)
        console.log(numCount)
        console.log(listReview)

        return (
            <>
                <h2>{(numCount >= 1 && numCount < 2) ?
                    <>
                        <i class="fa fa-star starShow" aria-hidden="true"></i>
                    </>
                    : (numCount >= 2 && numCount < 3) ?
                        <>
                            <i class="fa fa-star starShow" aria-hidden="true"></i>
                            <i class="fa fa-star starShow" aria-hidden="true"></i>
                        </>
                        : (numCount >= 3 && numCount < 4) ?
                            <>
                                <i class="fa fa-star starShow" aria-hidden="true"></i>
                                <i class="fa fa-star starShow" aria-hidden="true"></i>
                                <i class="fa fa-star starShow" aria-hidden="true"></i>
                            </>
                            : (numCount >= 4 && numCount < 5) ?
                                <>
                                    <i class="fa fa-star starShow" aria-hidden="true"></i>
                                    <i class="fa fa-star starShow" aria-hidden="true"></i>
                                    <i class="fa fa-star starShow" aria-hidden="true"></i>
                                    <i class="fa fa-star starShow" aria-hidden="true"></i>
                                </> :
                                <>
                                    <i class="fa fa-star starShow" aria-hidden="true"></i>
                                    <i class="fa fa-star starShow" aria-hidden="true"></i>
                                    <i class="fa fa-star starShow" aria-hidden="true"></i>
                                    <i class="fa fa-star starShow" aria-hidden="true"></i>
                                    <i class="fa fa-star starShow" aria-hidden="true"></i>
                                </>
                }


                </h2>
            </>
        );
    }


    return (
        <>
            { listReview?.review == undefined ? <p>
                sản phẩm chưa được đánh giá
            </p> : producStart()}
        </>
    )
}

export default Start;