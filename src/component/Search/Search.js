import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductsHome } from '../../redux/Product/products.action';
import './style.css';

const mapState = ({ productsData }) => ({
    products: productsData.productsHome
})
function Search(props) {

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
        <div className="search-client">
            <div className="search_box ">
                <input className="search_bar form-control" type="text" placeholder="Tìm kiếm sản phẩm" value={searchItem} onChange={(e) => { setSearchItem(e.target.value) }} />
            </div>
            <div className="box">
                {products?.filter((item) => {
                    if (searchItem == "") {
                        return;
                    }
                    else if ((item.name.toLowerCase().includes(searchItem.toLowerCase())) || (item.category.toLowerCase().includes(searchItem.toLowerCase()))) {
                        return item
                    }
                }).map((product, index) => {
                    return (
                        <div className="search_bar  border-top-0 border">
                            <Link key={index} style={{ textDecoration: 'none' }} to={`/product/${product.documentID}`}>
                                <div className="search">
                                    <div className="search-main text-nowrap col-8">
                                        <div className="name"> {product.name} </div>
                                        <div className="text-center ">{formatter.format(product.price)}</div>
                                    </div>
                                    <div className="search-img">
                                        <img className="img-thumbnail" src={product.thumbnail} alt="Thumbnail image" />
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

export default Search;