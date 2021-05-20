import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatter } from '../../App';
import { fetchOrders } from '../../redux/Order/order.action';
import { fetchProductsHome } from '../../redux/Product/products.action';

const mapState = ({ orderData, productsData, message }) => ({
    listOrder: orderData.listOrder,
    listProduct: productsData.productsHome,
    listmessage: message.messages
})

const mapUser = (state) => ({
    currentUser: state.user.currentUser
})
function Main(props) {

    const dispatch = useDispatch()

    const { listOrder, listProduct, listmessage } = useSelector(mapState);
    const { currentUser } = useSelector(mapUser)

    useEffect(() => {
        dispatch(fetchProductsHome())
    }, [])

    useEffect(() => {
        dispatch(fetchOrders())
    }, [])

    const total = listOrder.reduce((a, b) => {
        return a + b.total

    }, 0)


    return (


        <div className="main-content">
            <header>
                <div className="search-wrapper">
                    <span className="ti-search" />
                    <input type="search" placeholder="Search" />
                </div>
                <div className="social-icons">
                    <span className="ti-bell" />
                    <span className="ti-comment" />
                    <div>
                        <img src={currentUser.photoUrl} />
                    </div>
                </div>
            </header>
            <main>
                <h2 className="dash-title">Overview</h2>
                <div className="dash-cards">
                    <div className="card-single">
                        <div className="card-body">
                            <span className="ti-briefcase" />
                            <div>
                                <h5>Doanh thu</h5>
                                <h4>{formatter.format(total)}</h4>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href>View all</a>
                        </div>
                    </div>
                    <div className="card-single">
                        <div className="card-body">
                            <span className="ti-reload" />
                            <div>
                                <h5>Sản phẩm</h5>
                                <h4>{listProduct.length}</h4>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link to="/admin/listproduct" href>View all</Link>
                        </div>
                    </div>
                    <div className="card-single">
                        <div className="card-body">
                            <span className="ti-check-box" />
                            <div>
                                <h5>Đơn hàng</h5>
                                <h4>{listOrder.length}</h4>
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link to="/admin/order">View all</Link>
                        </div>
                    </div>
                </div>

            </main>
        </div>

        // <main className="col-10">
        //     <div className="row">
        //         <div className="col d-sm-flex align-items-center justify-content-center mb-4">
        //             <h1 className="h3 mb-0 text-gray-800">Thống kê</h1>
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-xl-3 col-md-6 mb-4">
        //             <div className="card border-left-success shadow h-100 py-2">
        //                 <div className="card-body">
        //                     <div className="row no-gutters align-items-center">
        //                         <div className="col mr-2">
        //                             <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
        //                                 Doanh thu</div>
        //                             <div className="h5 mb-0 font-weight-bold text-gray-800">{formatter.format(total)}</div>
        //                         </div>
        //                         <div className="col-auto">
        //                             <i className="fas fa-dollar-sign fa-2x text-gray-300" />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-xl-3 col-md-6 mb-4">
        //             <div className="card border-left-info shadow h-100 py-2">
        //                 <div className="card-body">
        //                     <div className="row no-gutters align-items-center">
        //                         <div className="col mr-2">
        //                             <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tổng đơn hàng
        //           </div>
        //                             <div className="row no-gutters align-items-center">
        //                                 <div className="col-auto">
        //                                     <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{listOrder.length}</div>
        //                                 </div>
        //                                 <div className="col">

        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="col-auto">
        //                             <i className="fas fa-clipboard-list fa-2x text-gray-300" />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-xl-3 col-md-6 mb-4">
        //             <div className="card border-left-warning shadow h-100 py-2">
        //                 <div className="card-body">
        //                     <div className="row no-gutters align-items-center">
        //                         <div className="col mr-2">
        //                             <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
        //                                 Tổng sản phẩm</div>
        //                             <div className="h5 mb-0 font-weight-bold text-gray-800">{listProduct.length}</div>
        //                         </div>
        //                         <div className="col-auto">
        //                             <i className="fas fa-warehouse fa-2x text-gray-300" />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-xl-3 col-md-6 mb-4">
        //             <div className="card border-left-warning shadow h-100 py-2">
        //                 <div className="card-body">
        //                     <div className="row no-gutters align-items-center">
        //                         <div className="col mr-2">
        //                             <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">
        //                                 Tổng phản hồi</div>
        //                             <div className="h5 mb-0 font-weight-bold text-gray-800">{listmessage.length}</div>
        //                         </div>
        //                         <div className="col-auto">
        //                             <i className="fas fa-envelope fa-2x text-gray-300" />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </main>
    );
}

export default Main;