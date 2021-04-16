import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup';
import { useFormik } from "formik";
import { addProduct, fetchProducts } from './../../redux/Product/products.action'
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { fetchCategories } from '../../redux/Category/category.action';
const mapState = ({ productsData }) => ({
    products: productsData.products
})

const mapCategory = ({ category }) => ({
    categories: category.categories
})

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
        imgDetail2: Yup
        .string()
        .required('Vui lòng nhập địa chỉ liên kết ảnh chi tiết sản phẩm'),
    number: Yup
        .string()
        .required('Vui lòng nhập số lượng sản phẩm'),

})

function FormProduct(props) {
    const { products } = useSelector(mapState);
    const { categories } = useSelector(mapCategory);
    const dispatch = useDispatch();
    const history = useHistory()
   


    useEffect(() => {
        dispatch(
            fetchProducts()
        );
    }, []);


    useEffect(() => {
        dispatch(
            fetchCategories()
        );
    }, []);

    console.log(categories)


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            category: '',
            description: '',
            price: '',
            thumbnail: '',
            number: '',
            imgDetail: '',
            imgDetail2: ''
        },
        validationSchema,
        onSubmit: values => {
            dispatch(
                addProduct({
                    name: values.name,
                    category: values.category,
                    description: values.description,
                    price: values.price,
                    thumbnail: values.thumbnail,
                    number: values.number,
                    imgDetail: values.imgDetail,
                    imgDetail2: values.imgDetail2
                })
            );
            formik.resetForm();
            swal("Thêm sản phẩm thành công!", "", "success");
            history.goBack()
        },
    });

    return (
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
                    {/* <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Nhập tên sản phẩm" /> */}
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
                        <option value="">Chọn</option>
                         {categories.map((option) => (
                
              <option value={option.name}>{option.name}</option>
            ))}

                    </select>
                    {formik.touched.category && formik.errors.category ? (
                        <div>{formik.errors.category}</div>) : null}

                    {/* <select value={category} onChange={e => setCategory(e.target.value)} >
                        <option></option>
                        <option>Kem chống nắng</option>
                        <option>Sữa rửa mặt</option>
                        <option>Mặt nạ</option>
                        <option>Nước Hoa</option>
                    </select> */}
                </div>
                <div className="form-group">
                    <label for="number">Số lượng sản phẩm</label>
                    <input className="form-control"
                        id='number'
                        type='text'
                        placeholder="Nhập Số lượng sản phẩm"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.number && formik.errors.number ? (
                        <div>{formik.errors.number}</div>) : null}
                    {/* <input value={number} onChange={e => setNumber(e.target.value)} type="text" className="form-control" id="number" placeholder="Nhập tên sản phẩm" /> */}
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
                    {/* <textarea value={description} onChange={e => setDescription(e.target.value)} type="text" className="form-control" id="description" placeholder="Nhập tên sản phẩm" /> */}
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
                    {/* <input value={price} onChange={e => setPrice(e.target.value)} type="text" className="form-control" id="price" placeholder="Nhập tên sản phẩm" /> */}
                </div>
                <div className="form-group">
                    <label for="thumbnail">Hình ảnh sản phẩm</label>
                    <input className="form-control"
                        id='thumbnail'
                        type='text'
                        placeholder="Hình ảnh sản phẩm"
                        value={formik.values.thumbnail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.thumbnail && formik.errors.thumbnail ? (
                        <div>{formik.errors.thumbnail}</div>) : null}
                    {/* <input value={thumbnail} onChange={e => setThumbnail(e.target.value)} type="text" className="form-control" id="image" placeholder="Nhập tên sản phẩm" /> */}
                </div>
                <div className="form-group">
                    <label for="imgDetail">Hình ảnh chi tiết 1</label>
                    <input className="form-control"
                        id='imgDetail'
                        type='text'
                        placeholder="Hình ảnh chi tiết"
                        value={formik.values.imgDetail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.imgDetail && formik.errors.imgDetail ? (
                        <div>{formik.errors.imgDetail}</div>) : null}
                    {/* <input value={imgDetail} onChange={e => SetImgDetail(e.target.value)} type="text" className="form-control" id="imgDetail" placeholder="Nhập tên sản phẩm" /> */}
                </div>
                <div className="form-group">
                    <label for="imgDetail2">Hình ảnh chi tiết 2</label>
                    <input className="form-control"
                        id='imgDetail2'
                        type='text'
                        placeholder="Hình ảnh chi tiết"
                        value={formik.values.imgDetail2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.imgDetail2 && formik.errors.imgDetail2 ? (
                        <div>{formik.errors.imgDetail2}</div>) : null}
                    {/* <input value={imgDetail} onChange={e => SetImgDetail(e.target.value)} type="text" className="form-control" id="imgDetail" placeholder="Nhập tên sản phẩm" /> */}
                </div>

                <button classNameName="btn btn-primary" type="submit">
                    Thêm sản phẩm
              </button>

            </form>
        </div>



    );
}

export default FormProduct;