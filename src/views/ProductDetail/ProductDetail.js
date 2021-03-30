import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import useScrollTop from '../../hook/useScrollTop';
import { addToCart } from '../../redux/Cart/cart.action';
import { fetchProductStart, setProduct } from '../../redux/Product/products.action';
import LazyLoad from 'react-lazyload';

const mapState = state => ({
    product: state.productsData.product
});



function ProductDetail({ match }) {
    useScrollTop();
    const history = useHistory()
    const dispatch = useDispatch();
    const { product } = useSelector(mapState)
    let { id } = useParams();


    useEffect(() => {
        dispatch(fetchProductStart(id))
        return () => {
            dispatch(
                setProduct({})
            )
        }
    }, [])

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(addToCart(product));

        // history.push('/cart')

    }
    return (

        <>
            <div className="row">
                <div className="col-7 d-flex justify-content-center">
                    <img className="w-75 h-75" src={product.thumbnail}  />
                </div>
                <div className="col-5">
                    <div className="title ">
                        <h2>{product.name}</h2>
                    </div>
                    <div className="status-product mt-2">
                        <p>Trạng Thái  : Còn Hàng</p>
                    </div>
                    <div className="price-product border w-50 p-2">
                        <strong>{product.price}đ</strong>
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
                            <p className="col">Dung Tích</p>
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
                        <button className="btn btn-primary mr-3" onClick={() => { handleAddToCart(product) }}>Thêm vào giỏ hàng</button>
                        <button className="btn btn-danger">Mua Ngay</button>
                    </div>
                    <div className="desctiption mt-3 pt-3">
                        <div>
                            <strong>Mô tả</strong>
                            <div>
                                <p className="text-left">
                                    {product.description}
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
                        <img className="w-100  h-100" src={product.imgDetail} alt="Card image" />
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