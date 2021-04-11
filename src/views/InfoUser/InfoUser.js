import React, { useEffect, useState } from 'react';
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { editUser, fetchUserId, setUser } from '../../redux/User/user.action';
import * as Yup from 'yup';
import useScrollTop from '../../hook/useScrollTop';
import { useFormik } from "formik";

const mapState = state => ({
    user: state.user.currentUser
});
const validationSchema = Yup.object({
    displayName: Yup
        .string()
        .required('Vui lòng nhập tên'),
    email: Yup
        .string()
        .email('Định dạng email không hợp lệ')
        .required('Vui lòng nhập email'),
    photoUrl: Yup
        .string()
        .required('Vui lòng nhập địa chỉ liên kết ảnh'),


})
function InfoUser(props) {
    const history = useHistory();
    useScrollTop();
    const dispatch = useDispatch();
    const { user } = useSelector(mapState);
    useEffect(() => {
        dispatch(fetchUserId(user.documentID))
        return () => {
            dispatch(
                setUser({})
            )
        }
    }, [])



    console.log('user', user)


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
            userRoles: user.userRoles
        },
        validationSchema,
        onSubmit: values => {
            dispatch(editUser(values, user.documentID));
            formik.resetForm();
            dispatch(fetchUserId(user.documentID))
            dispatch(
                setUser({})
            )
        },
    });

    return (
        <div className="m-2">
            <h1 className='text-center'>Thông tin tài khoản</h1>
            <form className='from_info_user' onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Họ và tên</label>
                    <input className="form-control"
                        id='displayName'
                        type='text'
                        placeholder="Nhập họ và tên"
                        value={formik.values.displayName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.displayName && formik.errors.displayName ? (
                        <div>{formik.errors.displayName}</div>) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Địa Chỉ Email</label>
                    <input className="form-control"
                        id='email'
                        type="email"
                        placeholder="Nhập địa chỉ email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="avata">Avata:  <img className="img-thumbnail avata" src={formik.values.photoUrl} alt='Không có ảnh' /></label>

                    <input className="form-control"
                        id='photoUrl'
                        type="text"
                        placeholder="Nhập địa chỉ liên kết ảnh"
                        value={formik.values.photoUrl}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.photoUrl && formik.errors.photoUrl ? (
                        <div>{formik.errors.photoUrl}</div>) : null}
                </div>

                <button className="btn btn-primary" type="submit">
                    Lưu
              </button>

            </form>
        </div>
    );
}

export default InfoUser;