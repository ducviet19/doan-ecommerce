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
                        // <div className="justyfy-content-center card p-1 m-5 col-lg-2 col-md-3 col-sm-3 col-12 text-decoration-none">
                        //     <img className="img-fluid m-auto" src={product.thumbnail} alt="Card image" />
                        //     <Link style={{ textDecoration: 'none' }} to={`/product/${product.documentID}`} onClick={() => props.handleChangeRelative(product.documentID)} className="">
                        //         <div className="detail">
                        //             <p className="card-text text-center bold  ">{product.name}</p>
                        //         </div>
                        //     </Link>
                        //     <p className="text-center"><strong> {formatter.format(product.price)}</strong></p>
                        //     <div className="d-flex justify-content-center">
                        //     </div>
                        //     <div className="rating text-center p-3">
                        //         <span>
                        //            <Start product={product}  />
                        //         </span>
                        //     </div>
                        // </div>
                    )
                }
                )}
            </div>

        </div>
    );
}

export default ProductRelative;