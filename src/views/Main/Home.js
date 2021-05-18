import React, { useEffect, useState } from 'react';

import './style.css';
import {
    BrowserRouter as Router,
    Link,
    useHistory
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fetchProductsHome, updateNumber } from '../../redux/Product/products.action';
import ProductCart from '../ProductCart/ProductCart';
import useScrollTop from '../../hook/useScrollTop';
import LoadMore from '../../component/LoadMore/LoadMore';
import LoadingBox from '../../component/LoadingBox/LoadingBox';
import ProductFuture from '../ProductFuture/ProductFuture';
import ProductSeller from '../ProductSeller/ProductSeller';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
const mapState = ({ productsData }) => ({
    productsHome: productsData.productsHome,
    products: productsData.products,
    loading: productsData.loading,
    loadingDetail: productsData.loadingDetail
})

const Load = React.lazy(() => import('../ProductCart/ProductCart'));
function Home() {
    useScrollTop();
    const dispatch = useDispatch();
    const history = useHistory()
    const { products, loading } = useSelector(mapState)
    const { data, queryDoc, isLastPage } = products;
    const [filter, setFilter] = useState(false);

    const [email, setEmail] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        let templateParams = {
            from_name: 'Routine Store',
            to_name: email,
            message: "ấdasdassa"
        }
        try {
            emailjs.send('service_ag5s9pa', 'template_drtx4me', templateParams, 'user_xIM0XRWJlXjbCTUs0eRDH')
            resetForm();
            swal("Kiếm tra mail để xem thông tin khuyến mãi!", "", "success")
        } catch (err) {
            swal(`${err}`, "", "error")
        }



    }
    const resetForm = () => {
        setEmail('');
    }







    useEffect(() => {
        dispatch(
            fetchProducts({})
        )
    }, [filter])


    const handleLoadMore = () => {
        dispatch(
            fetchProducts({
                startAfterDoc: queryDoc,
                persistProducts: data
            })
        );
    };

    const configLoadMore = {
        onLoadMoreEvt: handleLoadMore,
    };

    const handleChange = (e) => {
        setFilter(e)
    }
    const handleUpdateNumber = (product, id) => {
        dispatch(updateNumber(product, id))
    }
    return (
        <>{loading === true ? <LoadingBox /> :
            <main className="main">
                <div className="new-product m-5 ">
                    <div>
                        <h3 className="text-center text-nowrap m-5"><a href>SẢN PHẨM MỚI</a> </h3>
                    </div>
                    <div className="row d-flex justify-content-center">

                        {
                            (Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                                const configProduct = {
                                    ...product
                                }
                                return (
                                    <ProductCart key={index} data={product} handleChange={handleChange} handleUpdateNumber={handleUpdateNumber} loading={loading} {...configProduct} />
                                )
                            })
                        }
                    </div>
                                  
                   
         
                    <div className='d-flex'>
                        <div className='m-auto'>
                            {!isLastPage && (
                                <LoadMore {...configLoadMore} />
                            )}
                        </div>

                    </div>
                </div>
            
                <ProductFuture />

                <ProductSeller />



               
                <div className="form_info row  m-3 p-5 border">
                <form onSubmit={sendEmail} className="input-group w-75 m-auto">
                    <input type="email"
                        name='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className="form-control p-2x text-primary"
                        placeholder="Đăng kí để nhận thông tin khuyến mãi"
                        aria-label aria-describedby="basic-addon1" />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="submit">Đăng ký</button>
                    </div>
                </form>
            </div>
            </main>


        }



        </>
    )

};

export default Home;