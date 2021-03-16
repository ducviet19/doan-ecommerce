import React, { Component } from 'react';

function Footer() {

  return (
    <footer className="row">
      <div className="col">
        <h4>Công Ty</h4>
        <ul className="list-unstyled">
          <li><a href>Giới Thiệu Về Routine</a> </li>
          <li><a href>Tuyển Dụng</a> </li>
          <li><a href>Hệ Thống Cửa Hàng</a> </li>
          <li><a href>Chăm Sóc Khách Hàng</a></li>
          <li><a href>Chính Sách Bảo Mật</a></li>
        </ul>
      </div>
      <div className="col">
        <h4>Chính Sách Khách Hàng</h4>
        <ul className="list-unstyled">
          <li><a href>Chính Sách Khách Hàng Thân Thiết</a></li>
          <li><a href>Chính Sách Đổi Trả</a></li>
          <li><a href>Chính Sách Bảo Hành</a></li>
          <li><a href>Câu Hỏi Thường Gặp</a></li>
        </ul>
      </div>
      <div className="col">
        <h4>Kết nối với Routine</h4>
        <ul className="list-unstyled">
          <img src="https://img.icons8.com/cute-clipart/50/000000/instagram-new.png" />
          <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" />
          <img src="https://img.icons8.com/doodle/48/000000/tiktok.png" />
        </ul>
      </div>
      <div className="col">
        <h4>Thông Tin Cửa Hàng</h4>
        <div>
          <h5>Cửa Hàng Thứ 29:</h5>
          <p>Địa chỉ: Số 25 đường Ba Tháng Hai, Phường 1, TP. Đà Lạt </p>
        </div>
        <div>
          <h5>Cửa Hàng Thứ 29:</h5>
          <p>Địa chỉ: Số 25 đường Ba Tháng Hai, Phường 1, TP. Đà Lạt </p>
        </div>
      </div>
    </footer>
  )

};

export default Footer;