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
                        <h5 className="font-weight-bold">{product.name}</h5>
                        <p className="mb-2 text-muted text-uppercase small">{product.category}</p>

                        <Start id={id} />
                        <p><span className="mr-1 "><strong>   {formatter.format(product.price)}</strong></span></p>
                        <button className="btn btn-secondary mr-3 mt-3 mb-3 w-100 p-2" onClick={() => { handleAddToCart(product) }}>THÊM VÀO GIỎ</button>
                        <strong>Mô tả</strong>
                        <div>
                        <p className="pt-1">{product.description}</p>
                        </div>
                      

                        <hr />
                       
                    </div>
                </div>
            </Suspense>
            <Review product={product} />
            <Rate id={id} />


        </>

    )

};



export default ProductDetail;