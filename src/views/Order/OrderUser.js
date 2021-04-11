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
            <div className="">
                <h2>Danh sách đơn hàng </h2>
                <table class="table table-light">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Thời gian</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderHistory.map((order, index) => {
                                const { name, price, thumbnail, quantity, userID, documentID, datePlaced, finish } = order
                                console.log(datePlaced)
                                return (
                                    <tr key={index}>
                                        <td> <Link to={`/order/${documentID}`}> {documentID}</Link>   </td>
                                        <td>{datePlaced}</td>
                                        <td>{finish == "true" ? <p>Hoàn thành</p> : <p> Đang Xử lý </p>}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default OrderUser;