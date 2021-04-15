import React, { Component, useEffect } from 'react';
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
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
import Search from '../../component/Search/Search';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,
  totalNumCartItems: selectCartItemsCount(state),
  products: state.products
})

function Header(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { currentUser, totalNumCartItems, products } = useSelector(mapState);
  console.log(currentUser)

  const isAdmin = checkUserIsAdmin(currentUser);

  useEffect(() => {
    dispatch(
      fetchUserId(currentUser?.id)
    )
  },[] )

  console.log(currentUser)
  console.log(isAdmin)

  const signOut = () => {
    dispatch(signOutUserStart())
  }
  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/shop/${nextFilter}`);

  }

  return (
    <header className="row navbar fixed-top p-0 mb-3 ">
      <div className="col">
        <div className="d-flex justify-content-around row pt-3 pb-3">
          <div className="col-lg-3 col-12 mt-3 d-flex justify-content-center">
            <Search />
          </div>
          <div className="col-lg-6 col-6 mt-3 d-flex justify-content-center">
            <Link to="/"><img width="200px" src="//theme.hstatic.net/1000341789/1000533258/14/logo.png?v=709" alt="" /> </Link>
          </div>
          <div className="col-lg-3 col-6 mt-3 d-flex justify-content-center">

            <div class="dropdown row">
              {currentUser !== null ?
                <div className="col-lg-8 col-6">
                  <p class="text-nowrap text-name" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <Link > <i class="fas fa-user"></i> {currentUser.displayName} </Link>
                  </p>
                  <div class="" aria-labelledby="dropdownMenuButton">
                    <div className="show_menu">
                      <div className="p-2"><Link to="/order" style={{ textDecoration: 'none' }} className="m-2" > <i class="fa fa-shopping-bag" aria-hidden="true"></i> <span>Đơn Hàng</span>  </Link></div>
                      <div className="p-2"><Link to="/infouser" style={{ textDecoration: 'none' }} className="m-2"> <i class="far fa-user"></i>  <span>Tài khoản</span>  </Link></div>
                      <div className="p-2"><Link style={{ textDecoration: 'none' }} className="m-2"> {currentUser !== null ? <a>{isAdmin ? <Link to="/admin"><i class="fas fa-users-cog"></i> <span>Quản trị</span> </Link> : ''} </a> : <></>}  </Link></div>
                      <div className="ml-2 p-2">
                        {currentUser ? <button className="btn btn-danger" onClick={() => signOut()} ><i class="fas fa-sign-out-alt"></i> Đăng Xuất</button> : ''}
                      </div>
                    </div>
                  </div>
                </div> : <a><Link style={{ textDecoration: 'none' }} to="/login">Đăng nhập</Link> </a>}
                <div className="shopping-cart col-lg-4 col-6 ">
                  <Link to="/cart"><i class="fa fa-shopping-bag" aria-hidden="true"></i> {totalNumCartItems == 0 ? "" : <><span className="numberCart">{totalNumCartItems == 0 ? "" : totalNumCartItems}  </span> </>}     </Link>
                </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse w-100" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0 m-auto">
              <li className="nav-item dropdown col-lg col-12">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sản phẩm</a>
                <div className="dropdown-menu">

                  <li><Link className="text-dark"  to='/shop/Sữa rửa mặt'>Sữa rửa mặt</Link></li>
                  <li><Link className="text-dark"  to='/shop/Kem chống nắng'>Kem chống nắng</Link></li>
                  <li><Link className="text-dark"   to='/shop/Mặt nạ'>Mặt nạ</Link></li>
                  <li><Link className="text-dark"  to='/shop/Nước Hoa'>Nước Hoa</Link></li>
                </div>
              </li>
              <li className="nav-item col-lg col-12 ">
                <Link className='nav-link' to='/shop'>Cửa hàng</Link>
              </li>
              <li className="nav-item col-lg col-12">
                <Link className='nav-link' to='/contact'>Liên Hệ</Link>
              </li>
              <li className="nav-item col-lg col-12">
                <a className="nav-link " href="#!">Hướng Dẫn mua hàng</a>
              </li>
              <li className="nav-item col-lg col-12">
                <a className="nav-link " href="#!">Tuyển Dụng</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <nav className="navbar  navbar-expand-lg navbar-light bg-light mb-5 ">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <a class="navbar-brand" href="#!">Navbar</a>

          <div class="collapse navbar-collapse d-flex " id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-md-0 d-flex justify-content-center">
            <li className="nav-item dropdown col-lg col-12">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sản phẩm</a>
                <div className="dropdown-menu">

                  <li><Link to='/shop/Sữa rửa mặt'>Sữa rửa mặt</Link></li>
                  <li><Link to='/shop/Kem chống nắng'>Kem chống nắng</Link></li>
                  <li><Link to='/shop/Mặt nạ'>Mặt nạ</Link></li>
                  <li><Link to='/shop/Nước Hoa'>Nước Hoa</Link></li>
                </div>
              </li>
              <li className="nav-item col-lg col-12 ">
                <Link className='nav-link' to='/shop'>Cửa hàng</Link>
              </li>
              <li className="nav-item col-lg col-12">
                <Link className='nav-link' to='/contact'>Liên Hệ</Link>
              </li>
              <li className="nav-item col-lg col-12">
                <a className="nav-link " href="#!">Hướng Dẫn mua hàng</a>
              </li>
              <li className="nav-item col-lg col-12">
                <a className="nav-link " href="#!">Tuyển Dụng</a>
              </li>
            </ul>
          </div>
        </nav> */}
        {/* <nav className="navbar  navbar-expand-lg navbar-light bg-light mb-5 ">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center m-3" id="navbarTogglerDemo02 ">
          <ul class="navbar-nav mr-auto mt-2 mt-md-0">
              <li className="nav-item dropdown col-lg col-12">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sản phẩm</a>
                <div className="dropdown-menu">

                  <li><Link to='/shop/Sữa rửa mặt'>Sữa rửa mặt</Link></li>
                  <li><Link to='/shop/Kem chống nắng'>Kem chống nắng</Link></li>
                  <li><Link to='/shop/Mặt nạ'>Mặt nạ</Link></li>
                  <li><Link to='/shop/Nước Hoa'>Nước Hoa</Link></li>
                </div>
              </li>

              <li className="nav-item col-lg col-12 ">
                <Link className='nav-link' to='/shop'>Cửa hàng</Link>
              </li>
              <li className="nav-item col-lg col-12">
                <Link className='nav-link' to='/contact'>Liên Hệ</Link>
              </li>
              <li className="nav-item col-lg col-12">
                <a className="nav-link " href="#!">Hướng Dẫn mua hàng</a>
              </li>
              <li className="nav-item col-lg col-12">
                <a className="nav-link " href="#!">Tuyển Dụng</a>
              </li>
            </ul>
          </div>
        </nav> */}
      </div>
    </header>
  )

};



export default Header;
