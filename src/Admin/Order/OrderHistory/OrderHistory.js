import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteOrder, getUserOrderHistory, setUserOrderHistory } from '../../../redux/Order/order.action';
import swal from 'sweetalert';
function OrderHistory({ orders, user }) {
    console.log(orders)
    const history = useHistory()
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(
    //         getUserOrderHistory(user.id)
    //     )
    // },[] )

    console.log(orders)


    const handleDelete = (documentID) => {



    }
    return (

        <div className="">
            <h2>Danh sách đơn hàng </h2>
            <table class="table table-light">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">userID</th>
                        <th scope="col">Thời gian</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => {
                            const { name, price, thumbnail, quantity, userID, documentID, datePlaced, finish } = order
                            console.log(datePlaced)
                            return (
                                <tr key={index}>
                                    <td> <Link to={`/admin/order/${documentID}`}> {documentID}</Link>   </td>
                                    <td>{userID}</td>
                                    {/* <td>{moment(datePlaced.toDate()).format('DD/MM/YYYY')}</td> */}
                                    <td>{datePlaced}</td>
                                    <td>{finish == "true" ? <p>Hoàn thành</p> : <p> Đang Xử lý </p>}</td>
                                    <td ><button onClick={() => swal({
                                        title: "Xóa sản đơn hàng?",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                    })
                                        .then((willDelete) => {
                                            if (willDelete) {
                                                dispatch(deleteOrder(documentID))
                                            }
                                        })} className="btn btn-danger" >X</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

export default OrderHistory;