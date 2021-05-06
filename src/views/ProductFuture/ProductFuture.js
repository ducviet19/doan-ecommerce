import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../ProductCart/ProductCart';

const mapState = ({ productsData }) => ({
    productsFuture: productsData.productsFuture,
})
function ProductFuture(props) {

    const productsFuture = useSelector(mapState)

    console.log('productsFuture', productsFuture)
    return (
        <div>
                       <div className="row d-flex justify-content-center">       
                       <h2 className="text-center">Sản phẩm nổi bật</h2>
            { productsFuture?.productsFuture.map((product, index) => {
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