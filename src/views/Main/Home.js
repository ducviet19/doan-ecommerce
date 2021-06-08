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

    console.log('product hone' , data)
    return (
        <>
        {
            loading === true ? <LoadingBox /> :

                <div className="small-container">
                <h2 className="title">Sản phẩm mới</h2>
                <div className="row">
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
                <div className='page-nation'>
                        <div className='m-auto'>
                            {!isLastPage && (
                                <LoadMore {...configLoadMore} />
                            )}
                        </div>
                    </div>
                <ProductFuture />
                <ProductSeller />
            </div>
        }

        </>
    )

};

export default Home;