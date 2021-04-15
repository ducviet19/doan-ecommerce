import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { firestore } from '../../../firebase/ultils';
import { editProduct, fetchProductStart, setProduct } from '../../../redux/Product/products.action';
import swal from 'sweetalert';
import ListReview from '../../ReviewAdmin/ListReview';
import * as Yup from 'yup';
import { useFormik } from "formik";
const mapState = state => ({
    product: state.productsData.product
});

const validationSchema = Yup.object({
    name: Yup
        .string()
        .required('Vui lòng nhập tên sản phẩm'),
    category: Yup
        .string()
        .required('Vui chọn danh mục sản phẩm'),
    description: Yup
        .string()
        .required('Vui lòng nhập miêu tả sản phẩm'),
        thumbnail: Yup
        .string()
        .required('Vui lòng nhập địa chỉ liên kết ảnh'),

    imgDetail: Yup
        .string()
        .required('Vui lòng nhập địa chỉ liên kết ảnh chi tiết sản phẩm'),
    number: Yup
        .string()
        .required('Vui lòng nhập số lượng sản phẩm'),

})

function EditProduct({ props }) {

    const history = useHistory()




    const dispatch = useDispatch();
    const { product } = useSelector(mapState)

    let { id } = useParams();
    useEffect(() => {
        dispatch(fetchProductStart(id))
    }, [])

    // const [name, setName] = useState('');
    // const [category, setCategory] = useState('');
    // const [description, setDescription] = useState('');
    // const [thumbnail, setThumbnail] = useState('');
    // const [price, setPrice] = useState('');
    // const [imgDetail, SetImgDetail] = useState('');
    // const [number, setNumber] = useState('');
    // const [sizes, setSize] = useState('');




    // useEffect(() => {
    //     setName(product?.name);
    //     setCategory(product?.category);
    //     setDescription(product?.description);
    //     setPrice(product?.price);
    //     setThumbnail(product?.thumbnail);
    //     setNumber(product?.number);
    //     SetImgDetail(product?.imgDetail);
    //     setSize(product?.sizes);
    // }, [product])

    // console.log(name)





    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(editProduct({
    //         name  :product?.name,
    //         category: product?.category,
    //         description: product?.description,
    //         price: product?.price,
    //         thumbnail: product?.thumbnail,
    //         imgDetail:product?.imgDetail,
    //         number: product?.number
    //     }, id))

    //     swal("Cập nhật thành công!", "", "success");
    //     history.goBack()
    // }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name  :product?.name,
            category: product?.category,
            description: product?.description,
            price: product?.price,
            thumbnail: product?.thumbnail,
            imgDetail:product?.imgDetail,
            number: product?.number
        },
        validationSchema,
        onSubmit: values => {
            dispatch(
                editProduct({
                    name: values.name,
                    category: values.category,
                    description: values.description,
                    price: values.price,
                    thumbnail: values.thumbnail,
                    number: values.number,
                    imgDetail: values.imgDetail
                },id)
            );
            formik.resetForm();
            swal("Cập nhật thành công!", "", "success");
            history.goBack()
        },
    });

    return (

        <div>
            <div className="m-2">
            <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label for="name">Tên sản phẩm</label>
                        <input className="form-control"
                        id='name'
                        type='text'
                        placeholder="Nhập tên sản phẩm"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>) : null}
                        {/* <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Nhập tên sản phẩm" /> */}
                    </div>
                    <div className="form-group">
                        <label for="category">Loại sản phẩm</label>
                        <select
                        className="form-control w-25"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{ display: 'block' }}
                    >
                        <option>Chọn</option>
                        <option>Kem chống nắng</option>
                        <option>Sữa rửa mặt</option>
                        <option>Mặt nạ</option>
                        <option>Nước Hoa</option>

                    </select>
                    </div>
                    <div className="form-group">
                        <label for="number">Số lượng tả sản phẩm</label>
                        <input className="form-control"
                        id='number'
                        type='text'
                        placeholder="Nhập Số lượng sản phẩm"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.number && formik.errors.number ? (
                        <div>{formik.errors.number}</div>) : null}
                        {/* <input value={number} onChange={(e) => setNumber(e.target.value)} type="text" className="form-control" id="number" placeholder="Nhập tên sản phẩm" /> */}
                    </div>
                    <div className="form-group">
                        <label for="description">Miêu tả sản phẩm</label>
                        <textarea className="form-control"
                        id='description'
                        type='text'
                        placeholder="Miêu tả sản phẩm"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.description && formik.errors.description ? (
                        <div>{formik.errors.description}</div>) : null}
                        {/* <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" id="description" placeholder="Nhập tên sản phẩm" /> */}
                    </div>
                    <div className="form-group">
                        <label for="price">Ảnh sản phẩm</label>
                        <input className="form-control"
                        id='thumbnail'
                        type='text'
                        placeholder="Hình ảnh sản phẩm"
                        value={formik.values.thumbnail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.thumbnail && formik.errors.thumbnail ? (
                        <div>{formik.errors.thumbnail}</div>) : null}
                        {/* <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} type="text" className="form-control" id="price" placeholder="Nhập ảnh sản phẩm" /> */}
                    </div>
                    <div className="form-group">
                        <label for="price">Ảnh chi tiết</label>
                        <input className="form-control"
                        id='imgDetail'
                        type='text'
                        placeholder="Hình ảnh chi tiết"
                        value={formik.values.imgDetail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.imgDetail && formik.errors.imgDetail ? (
                        <div>{formik.errors.imgDetail}</div>) : null}
                        {/* <input value={imgDetail} onChange={(e) => SetImgDetail(e.target.value)} type="text" className="form-control" id="price" placeholder="Nhập ảnh sản phẩm" /> */}
                    </div>
                    <div className="form-group">
                        <label for="price">Giá sản phẩm</label>
                        <input className="form-control"
                        id='price'
                        type='text'
                        placeholder="Nhập Giá sản phẩm"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.price && formik.errors.price ? (
                        <div>{formik.errors.price}</div>) : null}
                        {/* <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="form-control" id="price" placeholder="Nhập tên sản phẩm" /> */}
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

