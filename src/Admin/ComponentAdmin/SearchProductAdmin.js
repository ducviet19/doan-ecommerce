import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductsHome } from '../../redux/Product/products.action';
import './style.css';

const mapState = ({ productsData }) => ({
    products: productsData.productsHome
})
function SearchProductAdmin(props) {

    const dispatch = useDispatch()
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'vnd'
    })
    const { products } = useSelector(mapState);

    useEffect(() => {
        dispatch(
            fetchProductsHome()
        )
    }, [])


    const [searchItem, setSearchItem] = useState("")
    return (
        <div className="search_admin">
            <div className="search_box  input-group">
                <input className="search_bar" type="text" placeholder="Tìm kiếm sản phẩm" value={searchItem} onChange={(e) => { setSearchItem(e.target.value) }} />
            </div>
            <div className="box-admin">
                {products?.filter((item) => {
                    if (searchItem == "") {
                        return;
                    }
                    else if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
                        return item
                    }
                }).map((product, index) => {
                    return (
                        <div className="search_bar">
                            <Link key={index} style={{ textDecoration: 'none' }} to={`/admin/editproduct/${product.documentID}`}>
                                <div className="search_bar__main">
                                    <div className="search_bar__content">
                                        <div className="search_bar__main--name"> {product.name}</div>
                                        <div className="search_bar__main--texr">{formatter.format(product.price)}</div>
                                    </div>

                                    <div className="search_bar__img">
                                        <img  src={product.thumbnail} alt="Thumbnail image" />
                                    </div>
                                </div>
                            </Link>



                        </div>
                    )
                })
                }
            </div>


        </div>
    );
}

export default SearchProductAdmin;