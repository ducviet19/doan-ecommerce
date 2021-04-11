import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editOrder, getOrderDetail } from '../../../redux/Order/order.action';
import OrderDetail from './OrderDetail';
import swal from 'sweetalert';

const mapState = ({ orderData }) => ({
    orderDetail: orderData.orderDetail
})
function Order(props) {

    const history = useHistory()
    const { orderID } = useParams();
    const dispatch = useDispatch();
    const { orderDetail } = useSelector(mapState)
    const [status, setStatus] = useState()

    console.log(orderDetail)

    useEffect(() => {
        setStatus(orderDetail.finish);

    }, [orderDetail])
    useEffect(() => {
        dispatch(
            getOrderDetail(orderID)
        )
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editOrder({
            ...orderDetail,
            finish: status
        }, orderDetail.documentID))
        swal("Cập nhật thành công!", "", "success");
        history.push('/admin/order')
    }
    return (
        <div>
            <h2>Sản phẩm</h2>
            <OrderDetail item={orderDetail.item} />
            <h1> TỔNG TIỀN: {orderDetail.total} đ</h1>
            <h2>Thông tin đơn hàng</h2>
            <ul>
                <li>Địa Chỉ :  {orderDetail.shipping.address}</li>
                <li>Email :  {orderDetail.shipping.email}</li>
                <li>Tên :  {orderDetail.shipping.name}</li>
                <li>SĐT : {orderDetail.shipping.phone}</li>
            </ul>
            <form onSubmit={handleSubmit}>
                {/* <div className="form-group">
                        <label for="number">Số lượng tả sản phẩm</label>
                        <input value={status} onChange={(e) => setStatus(e.target.value)} type="text" className="form-control" id="number" placeholder="Nhập tên sản phẩm" />
                    </div> */}

                <div className="form-group">
                    <label for="category">Loại sản phẩm</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}  >

                        <option value="false">Dang xu ly</option>
                        <option value="true">Da Hoan Thanh</option>
                    </select>
                </div>

                <button classNameName="btn btn-primary" type="submit">
                    Cập nhật đơn hàng
                    </button>

            </form>


        </div>
    );
}

export default Order;