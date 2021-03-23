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

const mapState = ({ user }) => ({
  user: user.currentUser
})

function Header(props) {

  const dispatch = useDispatch();

  const { user } = useSelector(mapState);

  const isAdmin = checkUserIsAdmin(user);

  console.log(isAdmin)


  const signOut = () => {
    dispatch(signOutUserStart())
  }

  return (
    <header className="row navbar fixed-top">
      <div className="col-12">
        <div className="d-flex justify-content-around row">
          <div className="col">
          </div>
          <div className="col">
            <Link to="/"><img width="200px" src="//theme.hstatic.net/1000341789/1000533258/14/logo.png?v=709" alt="" /> </Link>
          </div>
          <div className="col">
            {user !== null ? <a>{user.displayName} </a> : <Link to="/login">Đăng nhập</Link>}


            <i className="fas fa-search" />
            <i className="fas fa-shopping-cart" />
            <i> {user !== null ? <a>{isAdmin ? <Link to="/admin">Admin </Link> : 'user'} </a> : <></>}  </i>
            
            {user ? <button onClick={() => signOut() } >LogOut</button> : ''}
          </div>
        </div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
            <ul className="nav nav-pills row ">
              <li className="nav-item dropdown col-lg col-12">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Thời Trang Nam</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#!">Áo Nam</a>
                  <a className="dropdown-item" href="#!">Quần Nam</a>
                </div>
              </li>
              <li className="nav-item dropdown col-lg col-12">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Thời Trang Nữ</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#!">Áo Nữ</a>
                  <a className="dropdown-item" href="#!">Quần Nữ</a>
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