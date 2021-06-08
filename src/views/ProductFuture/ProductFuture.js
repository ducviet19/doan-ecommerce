import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductFuture } from '../../redux/Product/products.action';
import ProductCart from '../ProductCart/ProductCart';
import LoadMore from '../../component/LoadMore/LoadMore';
const mapState = ({ productsData }) => ({
    productsFuture: productsData.productsFuture,
})
function ProductFuture(props) {

    const productsFuture = useSelector(mapState);
    const { data, queryDoc, isLastPage } = productsFuture.productsFuture;


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            fetchProductFuture({})
        )
    }, [])
    const handleLoadMore = () => {
        dispatch(
            fetchProductFuture({
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
            <h2 className="title">Sản phẩm nổi bật</h2>
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
            <div className='page-nation'>
                <div className='m-auto'>
                    {!isLastPage && (
                        <LoadMore {...configLoadMore} />
                    )}
                </div>


            </div>

        </div>









        // <div>
        //     <h2 className="text-center">Sản phẩm nổi bật</h2>
        //     <div className="row d-flex justify-content-center">

        //         {data?.map((product, index) => {
        //             const configProduct = {
        //                 ...product
        //             }
        //             return (<ProductCart key={index} data={product} {...configProduct} />
        //             )

        //         }


        //         )}
        //     </div>
        //     <div className='d-flex'>
        //         <div className='m-auto'>
        //             {
        //                 isLastPage === false ? <LoadMore {...configLoadMore} /> : ""
        //             }
        //         </div>

        //     </div>

        // </div>
    );
}

export default ProductFuture;