import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatter } from '../../App';
import LoadMore from '../../component/LoadMore/LoadMore';
import { fetchProductRelative } from '../../redux/Product/products.action';
import ProductCart from '../ProductCart/ProductCart';
import Start from '../Start/Start';


const mapState = ({ productsData }) => ({
    productRelative: productsData.productRelative,
})
function ProductRelative(props) {

    return (

        <div className="small-container">
            <div className="row"  >
                {props.data.productRelative?.map((product, index) => {

                    return (
                        <div className="col-4">
                            <img src={product.thumbnail} alt="" />
                            <Link  to={`/product/${product.documentID}`} onClick={() => props.handleChangeRelative(product.documentID)} className=""> <h4>{product.name}</h4></Link>
                           
                            <Start product={product} />
                            <p>{formatter.format(product.price)}</p>
                        </div>
                    )
                }
                )}
            </div>

        </div>
    );
}

export default ProductRelative;