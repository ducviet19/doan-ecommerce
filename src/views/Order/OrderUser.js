import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserOrderHistory } from '../../redux/Order/order.action';

const mapState = ({ orderData, user }) => ({
    orderHistory: orderData.orderHistory.data,
    user: user.currentUser,
    listOrder: orderData.listOrder
})

function OrderUser(props) {
    const dispatch = useDispatch()
    const { orderHistory, user } = useSelector(mapState)

    useEffect(() => {
        dispatch(
            getUserOrderHistory(user.id)
        )
    }, [])

    console.log(user)
    console.log(orderHistory)
    return (
        <div>
            <div className="mt-5">
                <h2>Danh sách đơn hàng </h2>
                <div className="table-responsive">
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col-lg">Đơn hàng</th>
                            <th scope="col-lg">Thời gian</th>
                            <th scope="col-lg">Tình trạng</th>
                            <th scope="col-lg"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderHistory?.map((order, index) => {
                                const { name, price, thumbnail, quantity, userID, documentID, datePlaced, finish } = order
                                console.log(datePlaced.split("T")[0])
                                return (
                                    <tr key={index}>
                                        <td> <Link to={`/order/${documentID}`}> {documentID}</Link>   </td>
                                        <td>{datePlaced.split("T")[0]}</td>
                                        <td>{finish == "true" ? <p>Hoàn thành</p> : <p> Đang Xử lý </p>}</td>
                                        <td > <Link to={`/order/${documentID}`}> <button className="btn btn-success">Xem</button></Link>   </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </div>

            </div>
        </div>
    );
}

export default OrderUser;