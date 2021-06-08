import React, { Component, Suspense } from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import useScrollTop from '../../hook/useScrollTop';
import { addToCart, cartDefault, cartLoading } from '../../redux/Cart/cart.action';
import { editProduct, fetchProductRelative, fetchProductStart, setProduct, updateNumber } from '../../redux/Product/products.action';
import LazyLoad from 'react-lazyload';
import swal from 'sweetalert';
import Review from '../Review/Review';
import Rate from '../Rate/Rate';
import Start from '../Start/Start';
import { formatter } from '../../App';
import LoadingBox from '../../component/LoadingBox/LoadingBox';
import { Link } from 'react-router-dom';
import ProductRelative from '../ProductRelative/ProductRelative';

const mapState = state => ({
    product: state.productsData.product,
    loading: state.productsData.loadingDetail,
    loadingCart: state.cartData.loadingCart
})

const mapRelative = ({ productsData }) => ({
    productRelative: productsData.productRelative,
})




function ProductDetail({ match }) {
    useScrollTop();
    const history = useHistory()
    const dispatch = useDispatch();
    const { product, loading, loadingCart } = useSelector(mapState);
    const productRelative = useSelector(mapRelative);
    // const { loadingCart } = useSelector(mapLoading)

    const [productChange, setProductChange] = useState(false)
    const [idProduct, setIdProduct] = useState(product.documentID)
    const [size, setSize] = useState('')
    let { id } = useParams();


    const src = [
        product.thumbnail,
        product.imgDetail,
        product.imgDetail2
    ];
    const [stt, setStt] = useState(0)
    useEffect(() => {
        dispatch(fetchProductStart(id));
    }, [productChange])

    useEffect(() => {
        dispatch(fetchProductStart(id));
    }, [idProduct])

    useEffect(() => {
        dispatch(
            fetchProductRelative(product.category)
        )
    }, [product])


    const handleAddToCart = async (product) => {

        try {
            if (!product) return;

            if (size == "") {
                swal("Hãy chọn loại sản phẩm")
            }

            else {
                await dispatch(addToCart(product))
                await handleUpdateNumber(product, product.documentID)
                await setProductChange(true)
                // dispatch(cartLoading(product.documentID))
                // loadingButton(loadingCart)
                swal({
                    button: false,
                    text: "Sản phẩm đã được thêm vào giỏ hàng",
                    icon: "success",
                    timer: 1000
                })
            }

        } catch (error) {

        }




    }
    const handleUpdateNumber = (data, id) => {
        dispatch(updateNumber(data, id))
    }
    const handletab = index => {
        setStt(index)
    }
    const handleChangeReview = (value) => {
        setProductChange(value)
    }

    const handleChangeRelative = (value) => {
        setIdProduct(value)
    }
    return (
        <>
            { loading === false ?

                <div className="small-container product-detail">
                    <div className="row">
                        <div className="col-2">
                            <img src={src[stt]} alt="" id="productImg" />

                            <div className="small-img-row">

                                {
                                    src.map((img, index) => {
                                        return (
                                            <div className="small-img-col">
                                                <img src={img} class="small-img" width="95px" height="95px" onClick={() => { handletab(index) }} />
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                        <div className="col-2">
                            <h3>{product.name}</h3>
                            <p>{product.category}</p>
                            <h4>{formatter.format(product.price)}</h4>
                            <p> {product.numOrder} Sản phẩm đã được bán  </p>

                            <Start product={product} id={id} />

                            <select name="sizes" onChange={(e) => { setSize(e.target.value); console.log(e.target.value) }}>
                                <option value="">Chọn loại sản phẩm</option>
                                {product?.sizes?.map((option) => (
                                    <option value={option}>{option}</option>
                                ))}

                            </select>
                            {product.number > 0
                                ?
                                <> {loadingCart == false ? <LoadingBox /> : <button className="btn btn-secondary mr-3 mt-3 mb-3 w-100 p-2" onClick={() => { handleAddToCart({ ...product, size }) }}>THÊM VÀO GIỎ</button>} </>
                                :
                                <button disabled className="btn btn-secondary mr-3 mt-3 mb-3 w-100 p-2" >HẾT HÀNG</button>}
                            <h3>Product Detail</h3>
                            <p>
                                <br />
                                {product.description}
                            </p>
                        </div>
                    </div>

                    <div className="small-container">
                        <div className="row row-2">
                            <h2>Sản phẩm liên quan</h2>

                        </div>
                    </div>
                    <ProductRelative id={id} handleChangeReview={handleChangeReview} data={productRelative} category={product.category} handleChangeRelative={handleChangeRelative} />
                    <Review handleChangeReview={handleChangeReview} product={product} />
                    <Rate id={id} />
                </div>
                :
                <LoadingBox />
            }
        </>


    )

};



export default ProductDetail;