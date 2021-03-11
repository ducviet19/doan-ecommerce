import React, { Component } from 'react';

function ProductDetail() {

    return (

        <>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img className="w-75 h-75" src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                </div>
                <div className="col">
                    <div>
                        <h2>Áo khoác Jean nam trơn form Loose</h2>
                    </div>
                    <div className="status-product">
                        <p>Trạng Thái  : Còn Hàng</p>
                    </div>
                    <div className="price-product">
                        <strong>650,000đ</strong>
                    </div>
                    <div>
                        <div className="row">
                            <p className="col">Số lượng</p>
                            <div className="col">
                                <select>
                                    <option >1</option>
                                    <option >2</option>
                                    <option >3</option>
                                    <option >4</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary mr-3">Thêm vào giỏ hàng</button>
                        <button className="btn btn-danger">Mua Ngay</button>
                    </div>
                    <div>
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