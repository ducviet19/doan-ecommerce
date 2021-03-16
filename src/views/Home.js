import React, { Component } from 'react';

import data from "../data"

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

                
                <div className="new-product m-5 ">
                    <div>
                        <h2 className="text-center m-5"><a href>SẢN PHẨM MỚI</a> </h2>
                    </div>
                    <div className="row">

                        {
                            data.products.map((product) => {
                                return (
                                    <Link to={`/product/${product.id}`} className="card p-0  col-lg col-12 mr-3 text-decoration-none">
                                    <img src={product.image} alt="Card image" />
                                    <div className="card-body">
                                        <p className="card-text text-center">{product.name}</p>
                                        <p className="text-center"><strong>{product.price}</strong></p>
                                    </div>
                                    <div className="rating text-center">
                                        <span>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                </Link>
                                )
                            })
                        }

                      
                      
                    </div>
                </div>
                <div className="best-seller m-5">
                    <div>
                        <h2 className="text-center m-5"> <a href>SẢN PHẨM BÁN CHẠY</a> </h2>
                    </div>
                    <div className="row">
                        <Link to="/product" className="card p-0 col-lg col-12 mr-3">
                            <img src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                            <div className="card-body">
                                <p className="card-text text-center">Áo Sơ Mi Nam</p>
                                <p className="text-center"><strong>450.000</strong></p>
                            </div>
                            <div className="rating text-center">
                                <span>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                </span>
                            </div>
                        </Link>
                        <Link to="/product" className="card p-0 col-lg col-12 mr-3">
                            <img src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                            <div className="card-body">
                                <p className="card-text text-center">Áo Sơ Mi Nam</p>
                                <p className="text-center"><strong>450.000</strong></p>
                            </div>
                            <div className="rating text-center">
                                <span>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                </span>
                            </div>
                        </Link>
                        <Link to="/product" className="card p-0 col-lg col-12 mr-3">
                            <img src="//product.hstatic.net/1000341789/product/mausac_black_10f20shl031__1__c825731865054f5dafb26c6bcd8a3525_1024x1024.jpg" alt="Card image" />
                            <div className="card-body">
                                <p className="card-text text-center">Áo Sơ Mi Nam</p>
                                <p className="text-center"><strong>450.000</strong></p>
                            </div>
                            <div className="rating text-center">
                                <span>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="form_info m-3 p-5 border">
                    <div className="input-group w-75 m-auto">
                        <input type="text" className="form-control p-2x" placeholder="Đăng kí thông tin để nhận sản phẩm" aria-label aria-describedby="basic-addon1" />
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