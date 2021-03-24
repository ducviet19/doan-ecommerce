import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { addProduct, fetchProducts } from './../../redux/Product/products.action'

const mapState = ({ productsData }) => ({
    products: productsData.products
})

function FormProduct(props) {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [price, setPrice] = useState(0);


    useEffect(() => {
        dispatch(
            fetchProducts()
        );
    }, []);

    const resetForm = () => {
        setName('');
        setPrice('');
        setDescription('');
        setThumbnail('');
        setCategory('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            addProduct({
                name,
                category,
                description,
                price,
                thumbnail
            })

        );
        resetForm();
    }

    return (
        <div className="m-2">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="name">Tên sản phẩm</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Nhập tên sản phẩm" />
                </div>
                <div className="form-group">
                    <label for="category">Loại sản phẩm</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} >
                        <option>Kem chống nắng</option>
                        <option>Sữa rửa mặt</option>
                        <option>Mặt nạ</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="description">Miêu tả sản phẩm</label>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" id="description" placeholder="Nhập tên sản phẩm" />
                </div>
                <div className="form-group">
                    <label for="price">Giá sản phẩm</label>
                    <input value={price} onChange={e => setPrice(e.target.value)} type="text" className="form-control" id="price" placeholder="Nhập tên sản phẩm" />
                </div>
                <div className="form-group">
                    <label for="image">Hình ảnh sản phẩm</label>
                    <input value={thumbnail} onChange={e => setThumbnail(e.target.value)} type="file" className="form-control" id="image" placeholder="Nhập tên sản phẩm" />
                </div>

                <button classNameName="btn btn-primary" type="submit">
                    Thêm sản phẩm
              </button>

            </form>
        </div>


     
    );
}

export default FormProduct;