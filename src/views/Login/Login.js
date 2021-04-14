import './style.css';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignInStart, signInSuccess, signInWithGoogle, googleSignInStart } from '../../redux/User/user.action';
import useScrollTop from '../../hook/useScrollTop';
import swal from 'sweetalert';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});


const validationSchema = Yup.object({
    email: Yup
        .string()
        .required('Vui lòng nhập tên'),
    email: Yup
        .string()
        .email('Định dạng email không hợp lệ')
        .required('Vui lòng nhập email'),
    password: Yup
        .string()
        .required('Vui lòng nhập mật khẩu'),


})
function Login(props) {
    useScrollTop();

    const history = useHistory()
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    console.log(currentUser)


    useEffect(() => {
        if (currentUser) {

        }

    }, [currentUser])


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
        history.goBack();

    }

    const loginWithGoogle = () => {
        dispatch(googleSignInStart())
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            password: ''

        },
        validationSchema,
        onSubmit: values => {
            // values.preventDefault();
            dispatch(emailSignInStart(values));
            formik.resetForm();
            // history.goBack()
        },
    });


    return (
        <div className="login row">
            <div className="col-lg">
                <h1 className="text-center">Đăng nhập</h1>
            </div>
            <div className="col-lg m-5">
                <form className='login' onSubmit={formik.handleSubmit}>
                  
                        {/* <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" /> */}
                        <div className="form-group">
                            <input className="form-control"
                                id='email'
                                type='text'
                                placeholder="Nhập  Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>) : null}
                        </div>

                        <div className="form-group">
                            <input className="form-control"
                                id='password'
                                type='password'
                                placeholder="Nhập  password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            {formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>) : null}
                            {/* <input type="password" value={password} onChange={(e) => setPassword(e.target.value) } className="form-control" id="exampleInputPassword1" placeholder="Mật khẩu" /> */}
                        </div>
                        <button className="btn btn-secondary" type='submit' >
                            Đăng Nhập
                        </button>
                        <div>
                            <Link to="/register" className="text-secondary" href>Đăng Kí</Link>
                        </div>
                        <div>
                            <button onClick={loginWithGoogle} className="text-secondary" href>Login With Google</button>
                        </div>
                   
                </form>
            </div>
        </div>
    )

}

export default Login;