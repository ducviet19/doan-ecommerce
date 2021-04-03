import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { storage } from '../../../firebase/ultils'
import { editUser, fetchUserId, setUser } from '../../../redux/User/user.action';
import ModalAdd from './../../../component/Modal/Modal';
import { useFormik } from "formik";

const mapState = state => ({
    users: state.user.user
});
const validate = values => {
    const errors = {};

    if (!values.displayName) {
        errors.displayName = 'Vui lòng nhập Họ Tên';
    }
    if (!values.email) {
        errors.email = 'Vui lòng nhập địa chỉ Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Địa chỉ email không hợp lệ';
    }

    return errors;
};
function EditUser(props) {
    const dispatch = useDispatch();
    const { users } = useSelector(mapState);
    useEffect(() => {
        dispatch(fetchUserId(props.id))
        return () => {
            dispatch(
                setUser({})
            )
        }
    }, [])
    console.log(users)

    const formik = useFormik({
        initialValues: {
            displayName: users.displayName,
            email: users.email,
            userRoles: users.userRoles
        },
        validate,
        onSubmit: values => {
            dispatch(editUser({ values }, props.id));
            formik.resetForm();
            props.toggleModal()
        },
    });

    return (
        <div className="m-2">
            <ModalAdd toggleModal={props.toggleModal} show={props.showModal}>
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
                        <label htmlFor="roles">Vai Trò</label>
                        <select onChange={formik.handleChange} >
                            <option value='admin'>admin</option>
                            <option value='user'>user</option>
                        </select>
                    </div>

                    <button className="btn btn-primary" type="submit">
                        Cập Nhật
              </button>

                </form>
            </ModalAdd>
        </div>
    );
}

export default EditUser;