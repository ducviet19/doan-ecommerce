import React, { useEffect, useState } from 'react';
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { storage } from '../../../firebase/ultils'
import { editUser, editUserAdmin, fetchUserAdmin, fetchUserId, setUser } from '../../../redux/User/user.action';
import * as Yup from 'yup';
import useScrollTop from '../../../hook/useScrollTop';
import { useFormik } from "formik";
import swal from 'sweetalert';

const mapState = state => ({
    userEdit: state.user.user,
    currentUser: state.user.currentUser
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
    userRoles: Yup.string().required('Vui lòng chọn vai trò'),


})
function EditUser(props) {
    const history = useHistory();
    useScrollTop();
    const dispatch = useDispatch();
    const { userEdit ,currentUser } = useSelector(mapState);
    let { id } = useParams();
    useEffect(() => {
        dispatch(fetchUserAdmin(id))
        // return () => {
        //     dispatch(
        //         setUser({})
        //     )
        // }
    }, [])



    console.log('userEdit', userEdit)


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            displayName: userEdit.displayName,
            email: userEdit.email,
            photoUrl: userEdit.photoUrl,
            userRoles: userEdit.userRoles
        },
        validationSchema,
        onSubmit: values => {
            dispatch(editUserAdmin(values, id));
            formik.resetForm();
            history.goBack();
       
            swal("Cập nhật thành công!", "", "success");

        },
    });

    return (
        <div className="m-2">
            <form onSubmit={formik.handleSubmit}>
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
                <div className="form-group">
                    <label htmlFor="roles">Vai Trò</label>
                    { currentUser.id == userEdit.id ? <div> {formik.values.userRoles}  </div>  :  <>   <select
                        name='userRoles'
                        value={formik.values.userRoles}
                        onChange={formik.handleChange} >
                        <option value='admin'>admin</option>
                        <option value='user'>user</option>
                    </select>
                    {formik.touched.userRoles && formik.errors.userRoles ? (
                        <div>{formik.errors.userRoles}</div>) : null} </>    }
                  
                </div>

                <button className="btn btn-primary" type="submit">
                    Cập Nhật
              </button>

            </form>
        </div>
    );
}

export default EditUser;