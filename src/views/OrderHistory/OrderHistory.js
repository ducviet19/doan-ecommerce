import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function OrderHistory({orders}) {
    const history = useHistory()
    return (

        <div className="">
            <h2>Danh sách đơn hàng </h2>
            <table class="table table-light">
                <thead>
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Thời gian</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => {
                            const { name, price  , thumbnail , quantity ,userID , documentID , datePlaced} = order
                            return (
                                <tr key={index}>
                                    <td> <Link to={`/admin/order/${documentID}`}> {documentID}</Link>   </td>
                                    <td> {} </td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{quantity}</td>
                                    <td ><button className="btn btn-danger" >X</button></td>
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