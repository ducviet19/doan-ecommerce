import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

const mapState = ({ productsData }) => ({
    products: productsData.products
})
function Search(props) {

    const { products } = useSelector(mapState);

    const [searchItem, setSearchItem] = useState("")
    return (
        <div>
            <input type="text" placeholder="Search" value={searchItem} onChange={(e) => { setSearchItem(e.target.value) }} />
            {products.filter((item) => {
                if (searchItem == "") {
                    return ;
                }
                else if (item.category.toLowerCase().includes(searchItem.toLowerCase())) {
                    return item
                }
            }).map((product, index) => {
                return (
                    <div className="search_bar border  border-top-0  ">
                        <Link style={{ textDecoration: 'none' }} to={`/product/${product.documentID}`}>
                        <div className="search row p-2 text-decoration-none">
                            <div className="text-nowrap col-8 d-flex flex-column align-items-start">
                                <div className="name font-weight-bold text-center "> {product.name}    </div>
                                <div className="text-center "> {product.category}    </div>
                                <div className="text-center ">{product.price} đ</div>
                            </div>
                            <div className="col-3">
                                <img className="img-thumbnail" src={product.thumbnail} alt="Thumbnail image" />
                            </div>
                        </div>
                        </Link>
                        


                    </div>
                )
            })
            }
        </div>
    );
}

export default Search;