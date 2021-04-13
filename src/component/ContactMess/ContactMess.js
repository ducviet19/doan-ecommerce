import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addMessage, fetchMessage } from '../../redux/Contact/contact.action'
import './style.css';
import * as Yup from 'yup';
import { useFormik } from "formik";
import GoogleMap from './GoogleMap';

const validationSchema = Yup.object({
    name: Yup
        .string()
        .required('Vui lòng nhập tên'),
    email: Yup
        .string()
        .email('Định dạng email không hợp lệ')
        .required('Vui lòng nhập email'),
    subject: Yup
        .string()
        .required('Vui lòng nhập chủ đề'),
    message: Yup.string().required('Vui lòng nhập nội dung'),


})
const ContactMess = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            fetchMessage()
        );
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema,
        onSubmit: values => {
            dispatch(addMessage(values))
            formik.resetForm();
        },
    });
    return (
        <div className="GetInTouch flex">
            <div className="getintouch-container">
                <div className="map">
                    <GoogleMap />
                </div>
                <form onSubmit={formik.handleSubmit} className="getintouch-form">
                    <label>Contact Us</label>
                    <input
                        id='name'
                        type='text'
                        placeholder="Nhập tên"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}></input>
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>) : null}
                    <input
                        id='email'
                        type='email'
                        placeholder="Nhập địa chỉ email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}></input>
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>) : null}
                    <input
                        id='subject'
                        type='text'
                        placeholder="Nhập chủ đề"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject}></input>
                    {formik.touched.subject && formik.errors.subject ? (
                        <div>{formik.errors.subject}</div>) : null}
                    <input
                        id='message'
                        type='text'
                        placeholder="Nhập nội dung"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}></input>
                    {formik.touched.message && formik.errors.message ? (
                        <div>{formik.errors.message}</div>) : null}
                    <button className="btn">Send message</button>
                </form>
            </div>
        </div>
    )
}
export default ContactMess



