import React, { useEffect } from 'react';
import './index.css';
import { useHistory, useParams } from 'react-router-dom'
import { fetchProducts } from '../../redux/Product/products.action'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product'

const mapState = ({ productsData }) => ({
    products: productsData.products
})
const ProductResults = ({ }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { filterType } = useParams();
    const { products } = useSelector(mapState);

    console.log(products)

    useEffect(() => {
        dispatch(
            fetchProducts({ filterType })
        )
    }, [filterType]);
    const handleFilter = (e) => {
        const nextFilter = e.target.value;
        history.push(`/shop/${nextFilter}`);

    }
    if (!Array.isArray(products)) return null;
    if (products.length < 1) {
        return (
            <div className='products'>
                <div className="col-md-3 order-md-0 mt-2 mt-md-0 mb-3">
                    <select className="form-control form-control-sm" value={filterType} onChange={handleFilter}>
                        <option value="">Tất cả</option>
                        <option value="Sữa rửa mặt">Sữa rửa mặt</option>
                        <option value="Kem chống nắng">Kem chống nắng</option>
                        <option value="Mặt nạ">Mặt nạ</option>
                    </select>
                </div>
                <p>
                    Không có sản phẩm
                </p>
            </div>
        )
    }
    return (
        <div className='products'>
            <h1 className='text-center'>
                Sản Phẩm
            </h1>
            <div className="col-md-3 order-md-0 mt-2 mt-md-0 mb-3">
                <select className="form-control form-control-sm" value={filterType} onChange={handleFilter}>
                    <option value="">Tất cả</option>
                    <option value="Sữa rửa mặt">Sữa rửa mặt</option>
                    <option value="Kem chống nắng">Kem chống nắng</option>
                    <option value="Mặt nạ">Mặt nạ</option>
                </select>
            </div>

            <div className='row'>
                {products.map((product, pos) => {
                    console.log(product.name)
                    const { thumbnail, name, price } = product;
                    // if (!thumbnail || !name || typeof price === 'undefined') return null;
                    const configProduct = {
                        thumbnail,
                        name,
                        price
                    };
                    return (
                        <Product {...configProduct} />
                    )
                })}

            </div>

        </div>
    )
}
export default ProductResults