import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderDetail } from '../../../redux/Order/order.action';
import OrderDetail from './OrderDetail';


const mapState = ({orderData }) => ({
    orderDetail: orderData.orderDetail
})
function Order(props) {

    const { orderID } = useParams();
    const dispatch = useDispatch();
    const { orderDetail } = useSelector(mapState)
    const { total } = orderDetail

    console.log(orderDetail)

    useEffect(() => {
        dispatch(
            getOrderDetail(orderID)
        )
    } ,[])
    return (
        <div>
            <h1>Order ID : {orderID}</h1>
            <OrderDetail item={orderDetail.item} />
            <h1>Order Total : {total}</h1>
            <h1>Trạng Thái : 
                <select>
                    <option value="true">{'Đã Hoàn thành'}</option>
                    <option value="false">{'Đang xử lý' }</option>
                </select>
            </h1>
            
        </div>
    );
}

export default Order;