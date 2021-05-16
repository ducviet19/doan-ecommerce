import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadMore from '../../component/LoadMore/LoadMore';
import { fetchBestSeller } from '../../redux/Product/products.action';
import ProductCart from '../ProductCart/ProductCart';


const mapState = ({ productsData }) => ({
    productBestSeller: productsData.productBestSeller,
})
function ProductSeller(props) {

    const productBestSeller = useSelector(mapState);
    const { data, queryDoc, isLastPage } = productBestSeller.productBestSeller;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            fetchBestSeller({})
        )
    }, [])

    const handleLoadMore = () => {
        dispatch(
            fetchBestSeller({
                startAfterDoc: queryDoc,
                persistProducts: data
            })
        );
    };

    const configLoadMore = {
        onLoadMoreEvt: handleLoadMore,
    };

    return (
        <div>
            <h2 className="text-center">Sản phẩm bán chạy</h2>
            <div className="row d-flex justify-content-center">

                {data?.map((product, index) => {
                    const configProduct = {
                        ...product
                    }
                    return (<ProductCart key={index} data={product} {...configProduct} />
                    )

                }


                )}
            </div>
            <div className='d-flex'>
                <div className='m-auto'>
                    {!isLastPage && (
                        <LoadMore {...configLoadMore} />
                    )}
                </div>

            </div>

        </div>
    );
}

export default ProductSeller;