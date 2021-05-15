import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductFuture } from '../../redux/Product/products.action';
import ProductCart from '../ProductCart/ProductCart';

const mapState = ({ productsData }) => ({
    productsFuture: productsData.productsFuture,
})
function ProductFuture(props) {

    const productsFuture = useSelector(mapState);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            fetchProductFuture()
        )
    }, [])

   
    return (
        <div>
              <h2 className="text-center">Sản phẩm nổi bật</h2>
            <div className="row d-flex justify-content-center">
              
                {productsFuture?.productsFuture?.map((product, index) => {
                    const configProduct = {
                        ...product
                    }
                    return (<ProductCart key={index} data={product} {...configProduct} />
                    )

                }


                )}
            </div>

        </div>
    );
}

export default ProductFuture;