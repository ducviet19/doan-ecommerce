import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import CheckOut from '../CheckOut/CheckOut';
import { Formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addToOrder } from '../../redux/Order/order.action';
import { firestore } from '../../firebase/ultils';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cart.selectors';
import { clearCart } from '../../redux/Cart/cart.action';
import useScrollTop from '../../hook/useScrollTop';
import { updateNumber } from '../../redux/Product/products.action';


const validate = values => {

    const errors = {};

    if (!values.name) {
        errors.name = 'Vui lòng nhập Họ Tên';
    }


    if (!values.phone) {
        errors.phone = 'Vui lòng nhập Số điện thoại';
    } else if (values.phone.length < 10) {
        errors.phone = 'Số điện thoại không đúng';
    }

    if (!values.address) {
        errors.address = 'Vui lòng nhập địa chỉ nhận hàng';
    }

    if (!values.email) {
        errors.email = 'Vui lòng nhập địa chỉ Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Địa chỉ email không hợp lệ';
    }

    return errors;
};


const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

const mapProduct = ({ productsData }) => ({
    products: productsData.products
})

const mapUser = ({ user }) => ({
    user: user.currentUser
  })
function Payment(props) {
    useScrollTop();
    const { user } = useSelector(mapUser)
    console.log(user)

    const { cartItems } = useSelector(mapState)
    const { products } = useSelector(mapProduct)

    const dispatch = useDispatch()

    cartItems.map((e) => { console.log(e.documentID)  } )



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            phone: ''
        },
        validate,
        onSubmit: values => {
            const timestamp = new Date();
            const data = {
                item: cartItems,
                shipping: values,
                datePlaced: timestamp,
                userID: user.id,
                finish: false
            }
            dispatch(
                addToOrder(data)
            )
            dispatch(
                    clearCart()
            )
            formik.resetForm();
        
        },
    });


    return (

        <div className="row">
            <div className="col-6">
                <h2 className="text-center">Thông tin giao hàng</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Họ và Tên</label>
                        <input class="form-control" id="name"
                            name="name"
                            type="text"
                            placeholder="Họ và Tên"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name} />
                        {formik.touched.name && formik.errors.name ? (
                            <div>{formik.errors.name}</div>) : null}
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input class="form-control" id="email"
                                name="email"
                                type="text"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>) : null}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="phone">Số điện thoại</label>
                            <input class="form-control" id="phone"
                                name="phone"
                                type="text"
                                placeholder="Phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone} />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div>{formik.errors.phone}</div>) : null}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Địa Chỉ</label>
                        <input class="form-control" id="address"
                            name="address"
                            type="text"
                            placeholder="Địa Chỉ"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address} />
                        {formik.touched.address && formik.errors.address ? (
                            <div>{formik.errors.address}</div>) : null}
                    </div>
                    <button type="submit" className="btn btn-primary">Hoàn Tất Đơn Hàng</button>
                </form>
            </div>
            <div className="col-6">
                <Cart />
            </div>
        </div>

    );
}

export default Payment;