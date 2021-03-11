import React, { Component } from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './Login/Login';
function Home() {

    return (

            
        <>
            <main className="main">
                
                <div className="new-product mt-2">
                    <div>
                        <h2 className="text-center m-3"><a href>Sản Phẩm Mới</a> </h2>
                    </div>
                    <div className="row">
                        <Link to="/product" className="card col-lg col-12">
                            <img src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                            <div className="card-body">
                                <p className="card-text text-center">Áo Sơ Mi Nam</p>
                                <p className="text-center"><strong>450.000</strong></p>
                            </div>
                        </Link>
                        <div className="card col-lg col-12">
                            <img src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                            <div className="card-body">
                                <p className="card-text text-center">Áo Sơ Mi Nam</p>
                                <p className="text-center"><strong>450.000</strong></p>
                            </div>
                        </div>
                        <div className="card col-lg col-12">
                            <img src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                            <div className="card-body">
                                <p className="card-text text-center">Áo Sơ Mi Nam</p>
                                <p className="text-center"><strong>450.000</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="best-seller mt-2">
                    <div>
                        <h2 className="text-center m-3"> <a href>Sản Phẩm Bán Chạy</a> </h2>
                    </div>
                    <div className="row">
                        <div className="card col-lg col-12">
                            <img src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                            <div className="card-body">
                                <p className="card-text text-center">Áo Sơ Mi Nam</p>
                                <p className="text-center"><strong>450.000</strong></p>
                            </div>
                        </div>
                        <div className="card col-lg col-12">
                            <img src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                            <div className="card-body">
                                <p className="card-text text-center">Áo Sơ Mi Nam</p>
                                <p className="text-center"><strong>450.000</strong></p>
                            </div>
                        </div>
                        <div className="card col-lg col-12">
                            <img src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                            <div className="card-body">
                                <p className="card-text text-center">Áo Sơ Mi Nam</p>
                                <p className="text-center"><strong>450.000</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form_info m-3 p-3 border">
                    <div className="input-group w-75 m-auto">
                        <input type="text" className="form-control" placeholder="Đăng kí thông tin để nhận sản phẩm" aria-label aria-describedby="basic-addon1" />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">Đăng kí</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

};

export default Home;