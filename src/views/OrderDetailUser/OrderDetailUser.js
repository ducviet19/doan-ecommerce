import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import OrderDetail from '../../Admin/Order/OrderDetail/OrderDetail';
import useScrollTop from '../../hook/useScrollTop';
import { getOrderDetail } from '../../redux/Order/order.action';
const mapState = ({ orderData }) => ({
    orderDetail: orderData.orderDetail
})
function OrderDetailUser(props) {
    useScrollTop();
    const { orderDetail } = useSelector(mapState)
    const { id } = useParams()
    const dispatch = useDispatch()
    console.log(id)
    useEffect(() => {
        dispatch(
            getOrderDetail(id)
        )
    },[])
    console.log(orderDetail)
    return (
        <div>
        <h2>Sản phẩm</h2>
        <OrderDetail item={orderDetail.item} />
        <h1> TỔNG TIỀN: {orderDetail.total } đ</h1>
        <h1>Trạng thái: {orderDetail.finish == "true" ? "Hoàn thành" : "Đang xử lý" }</h1>
        <h2>Thông tin đơn hàng</h2>
        <ul>
            <li>Địa Chỉ :  {orderDetail.shipping.address}</li>
            <li>Email :  {orderDetail.shipping.email}</li>
            <li>Tên :  {orderDetail.shipping.name}</li>
            <li>SĐT : {orderDetail.shipping.phone}</li>
        </ul>


    </div>
    );

}

export default OrderDetailUser;