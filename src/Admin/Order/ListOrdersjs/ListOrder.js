import React from 'react';
import { useSelector } from 'react-redux';
import OrderHistory from '../OrderHistory/OrderHistory';


const mapState = ({orderData , user }) => ({
    orderHistory: orderData.orderHistory.data,
    user: user.currentUser,
    listOrder: orderData.listOrder
  })
function ListOrder(props) {
    const { orderHistory , user  ,listOrder} = useSelector(mapState)

    console.log(listOrder)
    return (
        <>
            <OrderHistory user={user} orders={orderHistory} />
        </>
    );
}

export default ListOrder;