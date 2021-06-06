import React, { Component, useEffect, useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { auth } from '../../firebase/ultils'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams
} from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchUserId, signOutUserStart, signOutUserSuccess } from '../../redux/User/user.action';
import { checkUserIsAdmin } from '../../Utils';
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/Cart/cart.selectors';
import Search from '../../component/Search/Search';
import { fetchCategories } from '../../redux/Category/category.action';
import { createStructuredSelector } from 'reselect';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,
  totalNumCartItems: selectCartItemsCount(state),
  products: state.products
})

const mapCart = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});


const mapCategory = ({ category }) => ({
  categories: category.categories
})

function Header(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { currentUser, totalNumCartItems, products } = useSelector(mapState);
  const { categories } = useSelector(mapCategory);
  const { cartItems, total } = useSelector(mapCart);

  const isAdmin = checkUserIsAdmin(currentUser);

  useEffect(() => {
    dispatch(
      fetchCategories()
    )
  }, [])

  useEffect(() => {
    dispatch(
      fetchUserId(currentUser?.id)
    )
  }, [])
  const signOut = () => {
    dispatch(signOutUserStart())
  }
  let style = { maxHeight: '0px' }
  const [colo, setColo] = useState(style)


  const menuToggle = () => {
    setColo({ maxHeight: '100%' })

  }

  const menuClose = () => {
    setColo({ maxHeight: '0px' })
  }

  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="/"> <svg aria-hidden="true" class="logo" data-test="imgLogo" focusable="false" height="28" width="175" viewBox="0 0 175 28">
   <g fill="#000" fill-rule="evenodd">
      <path d="M20.655 17.726l4.565 2.615c-2.282 4.197-6.737 6.922-11.781 6.922C6.075 27.263 0 21.629 0 13.713S6.075.163 13.439.163c5.044 0 9.5 2.725 11.781 6.923L20.655 9.7c-1.326-2.725-4.013-4.381-7.216-4.381-4.603 0-8.1 3.423-8.1 8.394s3.497 8.395 8.1 8.395c3.203 0 5.89-1.657 7.216-4.382M49.705 26.6V15.554H36.818V26.6h-5.154V.826h5.154V10.4h12.887V.826h5.155V26.6h-5.155M79.603 15.922L74.926 5.061 70.25 15.922h9.353zM89.838 26.6h-5.634l-2.54-5.892H68.188l-2.54 5.892h-5.634L71.428.826h6.996L89.838 26.6zM113.586 26.6L99.778 6.313V26.6h-4.786V.826h6.812l11.598 17.084V.826h4.787V26.6h-4.603M128.129 26.6V.826h18.41v4.787h-13.624v5.523h11.782v4.786h-11.782v5.892h14.36V26.6h-19.146M155.56 26.6V.826h5.154v20.62h13.622V26.6H155.56"></path>
   </g>
</svg> </Link>
          </div>
          <nav>
            <ul style={colo} id="MenuItems" >
              <li><Link to="/">Trang Chủ</Link> </li>
              <li className="product"><Link  to='/shop'>Cửa hàng</Link>
                <div className="dropdown-content">

                {
                  categories.map((cate,index) => {
                    return (
                      <Link style={{ textDecoration: 'none' }} to={`/shop/${cate.name}`}>{cate.name}</Link>
                    )
                  })
                }
                 
                </div>
              </li>
              <li><a href>Liên Hệ</a></li>
              <li className="account">
                {currentUser !== null ? <Link>{currentUser.displayName}  <div className="account-content">
                  <Link to="/order" style={{ textDecoration: 'none' }} > <i className="fa fa-shopping-bag" aria-hidden="true"></i> <span>Đơn Hàng</span>  </Link>
                  <Link to="/infouser" style={{ textDecoration: 'none' }} > <i className="far fa-user"></i>  <span>Tài khoản</span>  </Link>
                  <Link > 
                  {currentUser !== null ? <Link>{isAdmin ? <Link to="/admin"> <span>Quản trị</span> </Link> : ''} </Link> : <></>}  
                  </Link>
                  {currentUser ? <Link onClick={() => signOut()} ><i className="fas fa-sign-out-alt"></i> Đăng Xuất</Link> : ''}
                </div> </Link> : <Link to="/login">Đăng nhập</Link>}

              </li>
              <a id="close-menu" onClick={() => menuClose()}><i class="fas fa-times"></i></a>
            </ul>
            <div id="site-overlay" />
          </nav>
          <div className="main-cart">
            <Link to="/cart"> <img className="cart" src="../images/cart.png" width="30px" height="30px" /> {totalNumCartItems == 0 ? "" : <><span className="number__cart">{totalNumCartItems == 0 ? "" : totalNumCartItems}  </span> </>}   </Link>
            {/* <div className="cart-item">
            {cartItems.map((item ,index) => (
                    <div>
                      <img src={item.thumbnail} width="10% " alt="" />
                      <span>Nike air force 1</span>
                      <p>2.000.000 vnd</p>
                    </div>
            ))}
              
            
              <div className="cart-footer">
                <span>10 sản phẩm trong giỏ hàng</span>
                <button>Đi đến giỏ hàng</button>
              </div>
            </div> */}
          </div>
          <img className="menu-icon" src="../images/menu.png" alt="" onClick={() => menuToggle()} />
        </div>

      </div>
    </div>
    // <header className="row fixed-top navbar p-0 mb-3 ">
    //   <div className="col">
    //     <div className="d-flex justify-content-around row pt-3 pb-3">
    //       <div className="col-lg-3 col-12 mt-3 d-flex justify-content-center">
    //         {/* <Search /> */}
    //       </div>
    //       <div className="col-lg-6 col-6 mt-3 d-flex justify-content-center">
    //         <Link to="/"><img width="200px" src="//theme.hstatic.net/1000341789/1000533258/14/logo.png?v=709" alt="" /> </Link>
    //       </div>
    //       <div className="col-lg-3 col-6 mt-3 d-flex justify-content-center">

    //         <div className="dropdown row w-75 justify-content-end">
    //           {currentUser !== null ?
    //             <div className="dropdown-show col-lg-8 col-12 text-center">
    //               <p className="text-nowrap text-name " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //                 <Link to="/infouser" > <i className="fas fa-user"></i> {currentUser.displayName} </Link>
    //               </p>
    //               <div className="" aria-labelledby="dropdownMenuButton">
    //                 <div className="show_menu">
    //                   <div className="p-2 item"><Link to="/order" style={{ textDecoration: 'none' }} className="m-2" > <i className="fa fa-shopping-bag" aria-hidden="true"></i> <span>Đơn Hàng</span>  </Link></div>
    //                   <div className="p-2 item"><Link to="/infouser" style={{ textDecoration: 'none' }} className="m-2"> <i className="far fa-user"></i>  <span>Tài khoản</span>  </Link></div>
    //                   <div className="p-2 item"><Link style={{ textDecoration: 'none' }} className="m-2"> {currentUser !== null ? <a>{isAdmin ? <Link to="/admin"><i className="fas fa-users-cog"></i> <span>Quản trị</span> </Link> : ''} </a> : <></>}  </Link></div>
    //                   <div className="ml-2 p-2">
    //                     {currentUser ? <button className="btn btn-danger text-uppercase" onClick={() => signOut()} ><i className="fas fa-sign-out-alt"></i> Đăng Xuất</button> : ''}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div> : <Link className='text-dark font-weight-bold text-uppercase' style={{ textDecoration: 'none' }} to="/login">Đăng nhập</Link> }
    //           <div className="shopping-cart col-lg-4 col-12 text-right">
    //             <Link to="/cart"><i className="fas fa-shopping-cart fa-x" aria-hidden="true"></i> {totalNumCartItems == 0 ? "" : <><span className="badge badge-warning" id='lblCartCount'>{totalNumCartItems == 0 ? "" : totalNumCartItems}  </span> </>}   </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //       <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon" />
    //       </button>
    //       <div className="collapse navbar-collapse w-100" id="navbarTogglerDemo02">
    //         <ul className="navbar-nav mr-auto mt-2 mt-md-0 m-auto">
    //           <li className="nav-item dropdown col-lg col-12">
    //             <Link className="nav-link text-uppercase font-weight-bold dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sản phẩm</Link>
    //             <div className="dropdown-menu">
    //               {categories.map((cate,index) => {
    //                 return (
    //                   <li key={index}><Link className="nav-link" style={{ textDecoration: 'none' }} to={`/shop/${cate.name}`}>{cate.name}</Link></li>
    //                 )
    //               })}
    //             </div>
    //           </li>
    //           <li className="nav-item col-lg col-12 ">
    //             <Link className='nav-link text-uppercase font-weight-bold' to='/shop'>Cửa hàng</Link>
    //           </li>
    //           <li className="nav-item col-lg col-12">
    //             <Link className='nav-link text-uppercase font-weight-bold' to='/contact'>Liên hệ</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>

    //   </div>
    // </header>
  )

};



export default Header;
