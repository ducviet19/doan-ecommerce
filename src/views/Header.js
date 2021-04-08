import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth } from './../firebase/ultils'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import { signOutUserStart, signOutUserSuccess } from '../redux/User/user.action';
import { checkUserIsAdmin } from '../Utils';
import { selectCartItemsCount } from '../redux/Cart/cart.selectors';

const mapState = (state) => ({
  user: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
})

function Header(props) {

  const dispatch = useDispatch();

  const { user, totalNumCartItems } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(user);

  console.log(isAdmin)


  const signOut = () => {
    dispatch(signOutUserStart())
  }

  return (
    <header className="row navbar fixed-top p-0 ">
      <div className="col-12">
        <div className="d-flex justify-content-around row pt-3">
          <div className="col">
          </div>
          <div className="col">
            <Link to="/"><img width="200px" src="//theme.hstatic.net/1000341789/1000533258/14/logo.png?v=709" alt="" /> </Link>
          </div>
          <div className="col d-flex">
            <div class="dropdown row">
              <div className="col-9">  <p class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user !== null ? <a className="m-2"> <i class="fas fa-user"></i> {user.displayName} </a> : <Link to="/login">Đăng nhập</Link>}
              </p>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div><Link className="m-2" to="/order"> <i class="fas fa-shipping-fast"></i> Don Hang  </Link></div>
                  <div><Link className="m-2" to="/order"> <i class="far fa-user"></i> Tài khoản  </Link></div>
                  <div><Link className="m-2"> {user !== null ? <a>{isAdmin ? <Link to="/admin"><i class="fas fa-users-cog"></i>Admin</Link> : ''} </a> : <></>}  </Link></div> 
                </div></div>

              <div className="col-3 p-2">
                <Link to="/cart"><i className="fas fa-shopping-cart"></i> {totalNumCartItems == 0 ? "" : <><span className="numberCart">{totalNumCartItems == 0 ? "" : totalNumCartItems}  </span> </>}     </Link>
              </div>
            </div>
            <div className="ml-2">
              {user ? <button className="btn" onClick={() => signOut()} >Đăng Xuất</button> : ''}
            </div>

          </div>
        </div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center m-3" id="navbarTogglerDemo02 ">
            <ul className="nav nav-pills row ">
              <li className="nav-item dropdown col-lg col-12">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Thời Trang Nam</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#!">Áo Nam</a>
                  <a className="dropdown-item" href="#!">Quần Nam</a>
                </div>
              </li>

              <li className="nav-item col-lg col-12 ">
                <a className="nav-link " href="#!">Hệ thống cửa hàng</a>
              </li>
              <li className="nav-item col-lg col-12">
                <a className="nav-link " href="#!">Chính sách khách hàng</a>
              </li>
              <li className="nav-item col-lg col-12">
                <a className="nav-link " href="#!">Hướng Dẫn Chọn Size</a>
              </li>
              <li className="nav-item col-lg col-12">
                <a className="nav-link " href="#!">Tuyển Dụng</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )

};



export default Header;