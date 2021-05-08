import React from 'react';
import { useSelector } from 'react-redux';


const mapState = ({ productsData }) => ({
    productBestSeller: productsData.productBestSeller,
})
function ProductSeller(props) {

    const productBestSeller = useSelector(mapState);
    console.log('productBestSeller',productBestSeller)
    return (
        <div>
            
        </div>
    );
}

export default ProductSeller;