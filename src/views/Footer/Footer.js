import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function Footer() {

  return (
    
    // <footer className="row ">
    //   <div className="col-lg col-12">
    //     <h4 className="text-light">Công Ty</h4>
    //     <ul className="list-unstyled">
    //       <li><Link className="text-light" href>Giới Thiệu Về Routine</Link> </li>
    //       <li><Link className="text-light" href>Tuyển Dụng</Link> </li>
    //       <li><Link className="text-light" href>Hệ Thống Cửa Hàng</Link> </li>
    //       <li><Link className="text-light" href>Chăm Sóc Khách Hàng</Link></li>
    //       <li><Link className="text-light" href>Chính Sách Bảo Mật</Link></li>
    //     </ul>
    //   </div>
    //   <div className="col-lg col-12">
    //     <h4 className="text-light">Chính Sách Khách Hàng</h4>
    //     <ul className="list-unstyled">
    //       <li ><Link className="text-light" href>Chính Sách Khách Hàng Thân Thiết</Link></li>
    //       <li><Link className="text-light" href>Chính Sách Đổi Trả</Link></li>
    //       <li><Link className="text-light" href>Chính Sách Bảo Hành</Link></li>
    //       <li><Link className="text-light" href>Câu Hỏi Thường Gặp</Link></li>
    //     </ul>
    //   </div>
    //   <div className="col-lg col-12">
    //     <h4 className="text-light ">Kết nối với Routine</h4>
    //     <ul className="list-unstyled">
    //       <img src="https://img.icons8.com/cute-clipart/50/000000/instagram-new.png" />
    //       <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" />
    //       <img src="https://img.icons8.com/doodle/48/000000/tiktok.png" />
    //     </ul>
    //   </div>
    //   <div className="col-lg col-12">
    //     <h4 className="text-light">Thông Tin Cửa Hàng</h4>
    //     <div>
    //       <h5 className="text-light">Cửa Hàng Thứ 29:</h5>
    //       <p className="text-light">Địa chỉ: Số 25 đường Ba Tháng Hai, Phường 1, TP. Đà Lạt </p>
    //     </div>
      
    //   </div>
    // </footer>

    <div className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col-1">
          <h3>Down load our App</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
          <div className="app-logo">
            <img src="../images/play-store.png" alt="" />
            <img src="../images/app-store.png" alt="" />
          </div>
        </div>
        <div className="footer-col-2">
          <img src="../images/logo-white.png" alt="" />
        </div>
        <div className="footer-col-3">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Email</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="footer-col-4">
          <h3>Công ty</h3>
          <ul>
            <li>Giới Thiệu</li>
            <li>Liên Hệ</li>
            <li>Tin Tức </li>
            <li>Chăm sóc khách hàng</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copy">Coppyright 2021</p>
    </div>
  </div>
  )

};

export default Footer;