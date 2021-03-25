import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { firestore } from '../../../firebase/ultils';
import { editProduct, fetchProductStart, setProduct } from '../../../redux/Product/products.action';

const mapState = state => ({
    product: state.productsData.product
});

function EditProduct({ props }) {

    const dispatch = useDispatch();
    const { product } = useSelector(mapState)
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [price, setPrice] = useState('');



    let { id } = useParams();

    useEffect(() => {
        setName(product.name);
        setCategory(product.category);
        setDescription(product.description);
        setPrice(product.price);
    }, [product])

    useEffect(() => {
        dispatch(fetchProductStart(id))
        return () => {
            dispatch(
                setProduct({})
            )
        }
    }, [])



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProduct({
            name,
            category,
            description,
            price
        }))
        // const updateRef = firestore.collection('products').doc(id);
        // updateRef
        //     .set({
        //         name,
        //         category,
        //         description,
        //         price
        //     })
        //     .then(() => {
        //     })
        //     .catch((error) => {
        //         console.error("Error adding document: ", error);
        //     });
    }
    return (

        <div>
            <div className="m-2">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="name">Tên sản phẩm</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Nhập tên sản phẩm" />
                    </div>
                    <div className="form-group">
                        <label for="category">Loại sản phẩm</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}  >
                            <option></option>
                            <option>Kem chống nắng</option>
                            <option>Sữa rửa mặt</option>
                            <option>Mặt nạ</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="description">Miêu tả sản phẩm</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" id="description" placeholder="Nhập tên sản phẩm" />
                    </div>
                    <div className="form-group">
                        <label for="price">Giá sản phẩm</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="form-control" id="price" placeholder="Nhập tên sản phẩm" />
                    </div>
                    <button classNameName="btn btn-primary" type="submit">
                        Cập nhật sản phẩm
                    </button>

                </form>
            </div>
        </div>
    );
}

export default EditProduct;

