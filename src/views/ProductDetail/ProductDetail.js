import React, { Component, Suspense } from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import useScrollTop from '../../hook/useScrollTop';
import { addToCart, cartDefault, cartLoading } from '../../redux/Cart/cart.action';
import { editProduct, fetchProductStart, setProduct, updateNumber } from '../../redux/Product/products.action';
import LazyLoad from 'react-lazyload';
import swal from 'sweetalert';
import Review from '../Review/Review';
import Rate from '../Rate/Rate';
import Start from '../Start/Start';
import { formatter } from '../../App';
import LoadingBox from '../../component/LoadingBox/LoadingBox';

const mapState = state => ({
    product: state.productsData.product,
    loading: state.productsData.loadingDetail
})

const mapLoading = state => ({
    loadingCart: state.cartData.loadingCart,
    success: state.cartData.success
});


function ProductDetail({ match }) {
    useScrollTop();
    const history = useHistory()
    const dispatch = useDispatch();
    const { product, loading } = useSelector(mapState)
    const { loadingCart, success } = useSelector(mapLoading)

    const [productChange, setProductChange] = useState(
        false
    )
    const [size, setSize] = useState(
    )
    let { id } = useParams();
    console.log('success', success)
    console.log('loading', success)

    const src = [
        product.thumbnail,
        product.imgDetail,
        product.imgDetail2
    ];
    const [stt, setStt] = useState(0)
    useEffect(() => {
        dispatch(fetchProductStart(id));
    }, [productChange])

    console.log('size',product.sizes)

    const handleAddToCart = async (product) => {
        if (!product) return;
        dispatch(addToCart(product))
        handleUpdateNumber(product, product.documentID)
        setProductChange(true)
        // dispatch(cartLoading(product.documentID))
        // loadingButton(loadingCart)
        swal({
            button: false,
            text: "Sản phẩm đã được thêm vào giỏ hàng",
            icon: "success",
            timer: 1000
        })

    }
    console.log('product',product)
    const handleUpdateNumber = (data, id) => {
        dispatch(updateNumber(data, id))
    }
    const handletab = index => {
        setStt(index)
    }
    const handleChangeReview = (value) => {
        setProductChange(value)
    }
    const handleSize = (e) => {
        console.log(e)
    }

    return (

        <>
            {loading === false ? <>  <div className="row px-1 pt-5 mt-2">
                <div className="col-md-6 mb-4 mb-md-0">
                    <div id="mdb-lightbox-ui" />
                    <div className="mdb-lightbox">
                        <div className="row product-gallery mx-1">
                            <div className="col-12 mb-0">
                                <figure className="view overlay rounded z-depth-1 main-img">
                                    <a data-size="710x823">
                                        <img src={src[stt]} className="img-fluid w-75 h-75 z-depth-1" />
                                    </a>
                                </figure>

                            </div>
                            <div className="col-12">
                                <div className="row">
                                    {
                                        src.map((img, index) => {
                                            return (
                                                <div className="col-3">
                                                    <div className="view overlay rounded z-depth-1 gallery-item">
                                                        <img src={img} className="img-fluid border w-75 h-75 " onClick={() => { handletab(index) }} />

                                                        <div className="mask rgba-white-slight" />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5 className="font-weight-bold">{product.name}</h5>
                    <p className="mb-2 text-muted text-uppercase small">{product.category}</p>
                    <select 
                        className="form-control w-25"
                        name="size" onChange={(e) => { setSize(e.target.value) } }
                    >
                        {product.sizes.map((option) => (
                            <option  value={option}>{option}</option>
                        ))}

                    </select>

                    <Start product={product} id={id} />
                    <p><span className="mr-1 "><strong>   {formatter.format(product.price)}</strong></span></p>
                    {product.number > 0
                        ?
                        <> {loadingCart == false ? <LoadingBox /> : <button className="btn btn-secondary mr-3 mt-3 mb-3 w-100 p-2" onClick={() => { handleAddToCart({...product , size}) }}>THÊM VÀO GIỎ</button>} </>
                        :
                        <button disabled className="btn btn-secondary mr-3 mt-3 mb-3 w-100 p-2" >HẾT HÀNG</button>}

                    <strong>Mô tả</strong>
                    <div>
                        <p className="pt-1">{product.description}</p>
                    </div>


                    <hr />

                </div>
            </div>
                <Review handleChangeReview={handleChangeReview} product={product} />
                <Rate id={id} /> </> : <LoadingBox />}

        </>

    )

};



export default ProductDetail;