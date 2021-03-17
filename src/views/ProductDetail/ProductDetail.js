import React, { Component } from 'react';
import { useEffect, useState } from "react";
function ProductDetail({ match }) {


    useEffect(() => {

        console.log(match);
    }, [])
    return (

        <>
            <div className="row">
                <div className="col-7 d-flex justify-content-center">
                    <img className="w-75 h-75" src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                </div>
                <div className="col-5">
                    <div className="title ">
                        <h2>Áo khoác Jean nam trơn form Loose</h2>
                    </div>
                    <div className="status-product mt-2">
                        <p>Trạng Thái  : Còn Hàng</p>
                    </div>
                    <div className="price-product border w-50 p-2">
                        <strong>650,000đ</strong>
                    </div>
                    <div className="mt-3 mb-3">
                        <div className="row w-50 p-2">
                            <p className="col">Số lượng</p>
                            <div className="col">
                                <select class="custom-select w-75">

                                    <option selected value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className="row w-50 p-2">
                            <p className="col">Size</p>
                            <div className="col">
                                <select class="custom-select w-75">

                                    <option selected value="1">S</option>
                                    <option value="2">M</option>
                                    <option value="3">L</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary mr-3">Thêm vào giỏ hàng</button>
                        <button className="btn btn-danger">Mua Ngay</button>
                    </div>
                    <div className="desctiption mt-3 pt-3">
                        <div>
                            <strong>Mô tả</strong>
                            <div>
                                <p className="text-left">
                                    Chất liệu: 100% polyester.

                                    Đặc tính: Chống nhăn, cản gió tốt, độ bền màu cao.

                                    Hướng dẫn sử dụng:

                                    Giặt ở chế độ bình thường, với đồ có màu tương tự.

                                    Không được dùng hóa chất tẩy.

                                    Hạn chế sử dụng máy sấy, ủi ở nhiệt độ thích hợp
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <h2>
                    Hình ảnh chi tiết
                </h2>


                <div>
                    <div>
                        <img className="w-100  h-100" src="//product.hstatic.net/1000341789/product/mausac_mindigo_10f20dja003__1__2fbe278d8d664cda9378f63e1dc5dcb4_master.jpg" alt="Card image" />
                    </div>
                    <div>
                        <img className="w-100  h-100" src="//product.hstatic.net/1000341789/product/mausac_mindigo_10f20dja003__1__2fbe278d8d664cda9378f63e1dc5dcb4_master.jpg" alt="Card image" />
                    </div>
                    <div>
                        <img className="w-100  h-100" src="//product.hstatic.net/1000341789/product/mausac_mindigo_10f20dja003__1__2fbe278d8d664cda9378f63e1dc5dcb4_master.jpg" alt="Card image" />
                    </div>
                </div>


            </div>
        </>

    )

};

export default ProductDetail;