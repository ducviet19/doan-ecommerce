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
import { formatter } from '../../App';
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
              <li className="product"><Link to='/shop'>Cửa hàng</Link>
                <div className="dropdown-content">

                  {
                    categories.map((cate, index) => {
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
            <div className="cart-item">
              <div className="cart-contain">
              {cartItems.map((item, index) => (
                <div className="cart-item__main">
                  <img className="cart-item-img" src={item.thumbnail}  alt="" />
                  <span className="cart-item-name" ><Link to={`/product/${item.documentID}`} >{item.name}</Link> </span>
                  <div className="cart-item-desc">
                  <p>{formatter.format(item.price)} </p>
                  <p>SL :{item.quantity}</p>
                  </div>
                  
                </div>
              ))}
              </div>
              
              <div className="cart-footer">
                <span>{totalNumCartItems} sản phẩm trong giỏ hàng</span>
                <Link to="/cart"> <button>Đi đến giỏ hàng</button> </Link>   
              </div>
            </div>
          </div>
          <img className="menu-icon" src="../images/menu.png" alt="" onClick={() => menuToggle()} />
        </div>

      </div>
    </div>

  )

};



export default Header;
