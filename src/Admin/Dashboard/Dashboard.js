import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useScrollTop from '../../hook/useScrollTop';
import { getUserOrderHistory } from '../../redux/Order/order.action';
import Footer from '../../views/Footer';
import Header from '../../views/Header';
import OrderHistory from '../../views/OrderHistory/OrderHistory';
import Aside from '../Aside/Aside';
import FooterAdmin from '../FooterAdmin/FooterAdmin';
import Main from '../Main/Main';
import './style.css'



const mapState = ({user , orderData }) => ({
  user : user.currentUser,
  orderHistory: orderData.orderHistory.data
})
function Dashboard(props) {
  useScrollTop();
  const dispatch = useDispatch();
  const { user ,orderHistory} = useSelector(mapState)
  console.log(user)

  useEffect(( ) => {
    dispatch(
      getUserOrderHistory(user.id)
    )
  },[] )
  return (
    <div className="container-fluid ">

      <div className="row">
        <Aside />
        <div className="col-10">
          {props.children}
          <OrderHistory orders={orderHistory} />
        </div>
        
        <FooterAdmin />
      </div>
    </div>
  )

}

export default Dashboard;