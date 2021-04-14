import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { firestore } from '../../../firebase/ultils';
import { editProduct, fetchProductStart, setProduct } from '../../../redux/Product/products.action';
import swal from 'sweetalert';
import ListReview from '../../ReviewAdmin/ListReview';
const mapState = state => ({
    product: state.productsData.product
});

function EditProduct({ props }) {

    const history = useHistory()




    const dispatch = useDispatch();
    const { product } = useSelector(mapState)
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [price, setPrice] = useState('');
    const [imgDetail, SetImgDetail] = useState('');
    const [number, setNumber] = useState('');
    const [sizes, setSize] = useState('');



    let { id } = useParams();
    useEffect(() => {
        dispatch(fetchProductStart(id))
    }, [])

    useEffect(() => {
        setName(product?.name);
        setCategory(product?.category);
        setDescription(product?.description);
        setPrice(product?.price);
        setThumbnail(product?.thumbnail);
        setNumber(product?.number);
        SetImgDetail(product?.imgDetail);
        setSize(product?.sizes);
    }, [product])

    console.log(name)





    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProduct({
            name,
            category,
            description,
            price,
            thumbnail,
            imgDetail,
            number
        }, id))

        swal("Cập nhật thành công!","", "success");
        // history.push('/admin/listproduct')
        history.goBack()
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
                        <label for="number">Số lượng tả sản phẩm</label>
                        <input value={number} onChange={(e) => setNumber(e.target.value)} type="text" className="form-control" id="number" placeholder="Nhập tên sản phẩm" />
                    </div>
                    <div className="form-group">
                        <label for="description">Miêu tả sản phẩm</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" id="description" placeholder="Nhập tên sản phẩm" />
                    </div>
                    <div className="form-group">
                        <label for="price">Ảnh sản phẩm</label>
                        <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} type="text" className="form-control" id="price" placeholder="Nhập ảnh sản phẩm" />
                    </div>
                    <div className="form-group">
                        <label for="price">Ảnh chi tiết</label>
                        <input value={imgDetail} onChange={(e) => SetImgDetail(e.target.value)} type="text" className="form-control" id="price" placeholder="Nhập ảnh sản phẩm" />
                    </div>
                    <div className="form-group">
                        <label for="price">Giá sản phẩm</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="form-control" id="price" placeholder="Nhập tên sản phẩm" />
                    </div>
                    <div className="form-group">
                        <label for="price">size sản phẩm</label>
                        {/* <select value="banana">
                            {newArr.map((option) => (
                                <option value={option}>{option}</option>
                            ))}
                        </select> */}
                       
                    </div>
                    <button classNameName="btn btn-primary" type="submit">
                        Cập nhật sản phẩm
                    </button>

                </form>
            </div>
            <h2>Đánh gía của người dùng</h2>

            <ListReview id={id} />
        </div>
    );
}

export default EditProduct;

