import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { auth } from './../firebase/ultils'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams
} from "react-router-dom";
import { connect, useDispatch, useSelector } from 'react-redux';
import { signOutUserStart, signOutUserSuccess } from '../redux/User/user.action';
import { checkUserIsAdmin } from '../Utils';
import { selectCartItemsCount } from '../redux/Cart/cart.selectors';
import Search from '../component/Search/Search';

const mapState = (state) => ({
  user: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
  products: state.products
})

function Header(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { user, totalNumCartItems, products } = useSelector(mapState);
  console.log(user)

  const isAdmin = checkUserIsAdmin(user);

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
      <div className="col-12">
        <div className="d-flex justify-content-around row pt-3 pb-3">
          <div className="col">
            <Search />
          </div>
          <div className="col">
            <Link to="/"><img width="200px" src="//theme.hstatic.net/1000341789/1000533258/14/logo.png?v=709" alt="" /> </Link>
          </div>

          <div className="col d-flex">

            <div class="dropdown row">
              {user !== null ? <div className="col-8">  <p class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <a className="m-2"> <i class="fas fa-user"></i> {user.displayName} </a>
              </p>
                <div class="" aria-labelledby="dropdownMenuButton">
                  <div className="show_menu">
                    <div className="p-2"><Link to="/order" style={{ textDecoration: 'none' }} className="m-2" > <i class="fa fa-shopping-bag" aria-hidden="true"></i> <span>Đơn Hàng</span>  </Link></div>
                    <div className="p-2"><Link to="/infouser" style={{ textDecoration: 'none' }} className="m-2"> <i class="far fa-user"></i>  <span>Tài khoản</span>  </Link></div>
                    <div className="p-2"><Link style={{ textDecoration: 'none' }} className="m-2"> {user !== null ? <a>{isAdmin ? <Link to="/admin"><i class="fas fa-users-cog"></i> <span>Quản trị</span> </Link> : ''} </a> : <></>}  </Link></div>
                    <div className="ml-2 p-2">
                      {user ? <button className="btn btn-danger" onClick={() => signOut()} ><i class="fas fa-sign-out-alt"></i> Đăng Xuất</button> : ''}
                    </div>
                  </div>


                </div>

              </div> : <a><Link style={{ textDecoration: 'none' }} to="/login">Đăng nhập</Link> </a>}


              <div className="col-4 p-2">
                <Link to="/cart"><i class="fa fa-shopping-bag" aria-hidden="true"></i> {totalNumCartItems == 0 ? "" : <><span className="numberCart">{totalNumCartItems == 0 ? "" : totalNumCartItems}  </span> </>}     </Link>
              </div>

            </div>


          </div>
        </div>
        <nav className="navbar  navbar-expand-lg navbar-light bg-light mb-5 ">
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
        </nav>
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
// import React, { Component, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { auth } from './../firebase/ultils'
// import { useHistory, useParams } from 'react-router-dom'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { signOutUserStart, signOutUserSuccess } from '../redux/User/user.action';
// import { checkUserIsAdmin } from '../Utils';
// import { selectCartItemsCount } from '../redux/Cart/cart.selectors';

// const mapState = (state) => ({
//   user: state.user.currentUser,
//   totalNumCartItems: selectCartItemsCount(state),
//   products: state.products
// })

// function Header(props) {

//   const dispatch = useDispatch();
//   const history = useHistory();
//   const { filterType } = useParams();
//   const { user, totalNumCartItems, products } = useSelector(mapState);
//   console.log(user)

//   const isAdmin = checkUserIsAdmin(user);

//   console.log(isAdmin)

//   const signOut = () => {
//     dispatch(signOutUserStart())
//   }
//   const handleFilter = (e) => {
//     const nextFilter = e.target.value;
//     history.push(`/shop/${nextFilter}`);

//   }
//   return (
//     <header className="row navbar fixed-top p-0 ">
//       <div className="col-12">
//         <div className="d-flex justify-content-around row pt-3">
//           <div className="col">
//           </div>
//           <div className="col">
//             <Link to="/"><img width="200px" src="//theme.hstatic.net/1000341789/1000533258/14/logo.png?v=709" alt="" /> </Link>
//           </div>
//           <div className="col d-flex">

//             <div class="dropdown row">
//               {user !== null ? <div className="col-9">  <p class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 <a className="m-2"> <i class="fas fa-user"></i> {user.displayName} </a>
//               </p>
//                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                   <div><Link className="m-2 nav-link" to="/order"> <i class="fas fa-shipping-fast"></i> Don Hang  </Link></div>
//                   <div><Link className="m-2 nav-link" to="/infouser"> <i class="far fa-user"></i> Tài khoản  </Link></div>
//                   <div><Link className="m-2 nav-link"> {user !== null ? <a>{isAdmin ? <Link className='nav-link' to="/admin"><i class="fas fa-users-cog"></i>Admin</Link> : ''} </a> : <></>}  </Link></div>
//                 </div>

//               </div> : <a><Link className='nav-link' to="/login">Đăng nhập</Link> </a>}


//               <div className="col-3 px-0">
//                 <Link className='nav-link' to="/cart"><i className="fas fa-shopping-cart"></i> {totalNumCartItems == 0 ? "" : <><span className="numberCart">{totalNumCartItems == 0 ? "" : totalNumCartItems}  </span> </>}     </Link>
//               </div>
//             </div>
//             <div className="ml-2">
//               {user ? <button className="btn" onClick={() => signOut()} >Đăng Xuất</button> : ''}
//             </div>

//           </div>
//         </div>
//         <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
//           <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse justify-content-center m-3" id="navbarTogglerDemo02 ">
//             <ul className="nav nav-pills row ">
//               <li className="nav-item dropdown col-lg col-12">
//                 <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sản phẩm</a>
//                 <div className="dropdown-menu">

//                   <li><Link to='/shop/Sữa rửa mặt'>Sữa rửa mặt</Link></li>
//                   <li><Link to='/shop/Kem chống nắng'>Kem chống nắng</Link></li>
//                   <li><Link to='/shop/Mặt nạ'>Mặt nạ</Link></li>
//                   <li><Link to='/shop/Nước Hoa'>Nước Hoa</Link></li>
//                 </div>
//               </li>

//               <li className="nav-item col-lg col-12 ">
//                 <Link className='nav-link' to='/shop'>Cửa hàng</Link>
//               </li>
//               <li className="nav-item col-lg col-12">
//                 <Link className='nav-link' to='/contact'>Liên Hệ</Link>
//               </li>
//               <li className="nav-item col-lg col-12">
//                 <a className="nav-link " href="#!">Hướng Dẫn mua hàng</a>
//               </li>
//               <li className="nav-item col-lg col-12">
//                 <a className="nav-link " href="#!">Tuyển Dụng</a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   )

// };



// export default Header;