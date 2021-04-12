import React, { Component, Suspense } from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import useScrollTop from '../../hook/useScrollTop';
import { addToCart } from '../../redux/Cart/cart.action';
import { fetchProductStart, setProduct } from '../../redux/Product/products.action';
import LazyLoad from 'react-lazyload';
import swal from 'sweetalert';
import Review from '../Review/Review';
import Rate from '../Rate/Rate';
import Start from '../Start/Start';
import { formatter } from '../../App';

const mapState = state => ({
    product: state.productsData.product
});


function ProductDetail({ match }) {
    useScrollTop();
    const history = useHistory()
    const dispatch = useDispatch();
    const { product } = useSelector(mapState)
    let { id } = useParams();
    console.log(product)





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
        swal({
            button: false,
            text: "Sản phẩm đã được thêm vào giỏ hàng",
            icon: "success",
            timer: 1000
          });

        // history.push('/cart')

    }
    return (

        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="row pt-5">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div id="mdb-lightbox-ui" />
                        <div className="mdb-lightbox">
                            <div className="row product-gallery mx-1">
                                <div className="col-12 mb-0">
                                    <figure className="view overlay rounded z-depth-1 main-img">
                                        <a data-size="710x823">
                                            <img src={product.thumbnail} className="img-fluid z-depth-1" />
                                        </a>
                                    </figure>
                                    
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="view overlay rounded z-depth-1 gallery-item">
                                                <img src={product.imgDetail} className="img-fluid" />
                                                <div className="mask rgba-white-slight" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="view overlay rounded z-depth-1 gallery-item">
                                                <img src={product.imgDetail} className="img-fluid" />
                                                <div className="mask rgba-white-slight" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="view overlay rounded z-depth-1 gallery-item">
                                                <img src={product.imgDetail} className="img-fluid" />
                                                <div className="mask rgba-white-slight" />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="view overlay rounded z-depth-1 gallery-item">
                                                <img src={product.imgDetail} className="img-fluid" />
                                                <div className="mask rgba-white-slight" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h5>{product.name}</h5>
                        <p className="mb-2 text-muted text-uppercase small">{product.category}</p>
                                 
                        <Start id={id} />    
                        <p><span className="mr-1"><strong>   {formatter.format(product.price)}</strong></span></p>
                        <strong>Mô tả</strong>
                        <p className="pt-1">{product.description}</p>
                        
                        <hr />
                        <div>
                            <button className="btn btn-secondary mr-3" onClick={() => { handleAddToCart(product) }}><i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>




                {/* <div className="row pt-5">
                    <div className="col-12 col-lg-7 d-flex justify-content-center">
                        <img className="w-75 h-75" src={product.thumbnail} />
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="title ">
                            <h2>{product.name}</h2>
                        </div>
                        <div className="status-product mt-2">
                            <p>Trạng Thái  : Còn Hàng</p>
                        </div>
                        <div className="price-product w-50 p-2">
                            <strong>{product.price}đ</strong>
                        </div>
                        <div className="mt-3 mb-3">

                            <div className="row w-50 p-2">
                                <div> <p className="col">Dung Tích</p></div>
                                <div className="col h-75">
                                    <select class="custom-select w-75">
                                        <option selected value="1">S</option>
                                        <option value="2">M</option>
                                        <option value="3">L</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-secondary mr-3" onClick={() => { handleAddToCart(product) }}><i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng</button>
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
                    <div className="text-center d-flex justify-align-center">
                        <h2 >
                            Hình ảnh chi tiết
                </h2> </div>

                    <div>
                        <div>
                            <img className="w-75  h-75" src={product.imgDetail} alt="Card image" />
                        </div>
                        <div>
                            <img className="w-75  h-75" src={product.imgDetail} alt="Card image" />
                        </div>
                        <div>
                            <img className="w-75  h-75" src={product.imgDetail} alt="Card image" />
                        </div>
                    </div>


                </div> */}
            </Suspense>
            <Review product={product} />
            <Rate id={id} />


        </>

    )

};

export default ProductDetail;