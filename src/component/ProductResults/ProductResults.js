import React, { useEffect, useState } from 'react';
import './index.css';
import { useHistory, useParams } from 'react-router-dom'
import { fetchProducts, updateNumber } from '../../redux/Product/products.action'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
import ProductCart from '../../views/ProductCart/ProductCart'
import LoadMore from '../../component/LoadMore/LoadMore'
import { fetchCategories } from '../../redux/Category/category.action';

const mapState = ({ productsData }) => ({
    products: productsData.products
})

const mapCategory = ({ category }) => ({
    categories: category.categories
})
const ProductResults = ({ }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { filterType } = useParams();
    const { products } = useSelector(mapState);
    const { categories } = useSelector(mapCategory);
    const { data, queryDoc, isLastPage } = products;
    const [filter,setFilter] = useState(false);
    useEffect(() => {
        dispatch(
            fetchProducts({ filterType })
        )
    }, [filterType]);
    useEffect(() => {
        dispatch(
            fetchProducts({ filterType })
        )
    }, [filter]);

    useEffect(() => {
        dispatch(
            fetchCategories()
        )
    }, []);
    const handleChange = (e) => {
        setFilter(e)
    }
    const handleUpdateNumber = (product , id) => {
        dispatch(updateNumber(product,id))
    } 

    const handleFilter = (e) => {
        const nextFilter = e.target.value;
        history.push(`/shop/${nextFilter}`);

    }
    if (!Array.isArray(data)) return null;
    if (data.length < 1) {
        return (
            <>
                <div className='products'>
                    <div className="col-md-3 order-md-0 mt-2 mt-md-0 mb-3">
                        <select className="form-control form-control-sm" value={filterType} onChange={handleFilter}>
                            <option value="">Tất cả</option>
                            {categories.map((option) => (
                                <option value={option.name}>{option.name}</option>
                            ))}
                        </select>
                    </div>

                    <p>
                        Không có sản phẩm
                </p>
                </div>
            </>
        )
    }
    const handleLoadMore = () => {
        dispatch(
            fetchProducts({
                filterType,
                startAfterDoc: queryDoc,
                persistProducts: data
            })
        )
    };

    const configLoadMore = {
        onLoadMoreEvt: handleLoadMore,
    };
    return (
        <div className='container products'>
            <div className="col-md-3 order-md-0 mt-2 mt-md-0 mb-3">
                <select className="form-control form-control-sm" value={filterType} onChange={handleFilter}>
                    <option value="">Tất cả</option>
                    {categories.map((option) => (
                        <option value={option.name}>{option.name}</option>
                    ))}
                </select>
            </div>

            <div className='row justify-content-center'>
                {data.map((product, pos) => {
                    const { documentID, thumbnail, name, price, number } = product;
                    // if (!thumbnail || !name || typeof price === 'undefined') return null;
                    const configProduct = {
                        documentID, thumbnail, name, price, number
                    };
                    return (
                        <ProductCart data={product} handleChange={handleChange} handleUpdateNumber={handleUpdateNumber}  {...configProduct} />
                    )
                })}

            </div>
            {!isLastPage && (
                <LoadMore {...configLoadMore} />
            )}


        </div>
    )
}
export default ProductResults