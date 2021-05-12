import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBestSeller } from '../../redux/Product/products.action';
import ProductCart from '../ProductCart/ProductCart';


const mapState = ({ productsData }) => ({
    productBestSeller: productsData.productBestSeller,
})
function ProductSeller(props) {

    const productBestSeller = useSelector(mapState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            fetchBestSeller()
        )
    }, [])
    console.log('productBestSeller', productBestSeller)
    return (
        <div>
             <h2 className="text-center">Sản phẩm bán chạy</h2>
            <div className="row d-flex justify-content-center">
               
                {productBestSeller?.productBestSeller?.map((product, index) => {
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

export default ProductSeller;