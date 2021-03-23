import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, resetAllAuthForm, signUpUserStart } from '../../redux/User/user.action';
import './style.css';



const mapState = ({user}) => ({
    currentUser : user.currentUser,
    useErr: user.userErr

})

function Register() {

    const { currentUser, useErr } = useSelector(mapState);
    const dispatch = useDispatch();

    
    useEffect( () => {
        if(currentUser) {

        }
    } ,[currentUser])

    useEffect(() => {
        if(useErr) {

        } 
    },[useErr])


    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



    const [error_fullName, setError_fullName] = useState();
    const [error_email, setError_email] = useState("");
    const [error_password, setError_password] = useState("");
    const [error_confirmPassword, setError_confirmPassword] = useState("");






    const handleSubmit = async (e) => {
        e.preventDefault();
    

        
        displayName === "" ? setError_fullName("Vui lòng điền tên của bạn")  : setError_fullName("")
        email === "" ? setError_email("Vui lòng điền email của bạn") : setError_email("")
        password === "" ? setError_password("Vui lòng mật khẩu  của bạn") : setError_password("")
        confirmPassword === "" ? setError_confirmPassword("Vui lòng nhập lại mật khẩu  của bạn") : setError_confirmPassword("")
        if (confirmPassword !== password) {
            setError_confirmPassword("Mật khẩu không trùng khớp ! hãy nhập lại")
            return ;
        }

        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }))

    }

    const reset = () => {
        setEmail("");
        setPassword("");
        setDisplayName("");
        setConfirmPassword("")

    }

    return (
        <div className="login row m-5">
            <div className="col-lg m-5 pt-5">
                <h1 className="text-center">Tạo Tài Khoản</h1>
            </div>
            <div className="col-lg m-5">
                <form onSubmit={handleSubmit} className="login">
                    <div className="form-group">
                        <label >Họ và Tên</label>
                        <input value={displayName} onChange={(e) => { setDisplayName(e.target.value) }} type="text" className="form-control" id="fullName" placeholder="Nhập Tên của bạn" />
                        <div value={error_fullName} className="error_fullName">{error_fullName}</div>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" id="email" placeholder="Email" />
                        <div value={error_email} className="error_Email">{error_email}</div>
                    </div>
                    <div className="form-group">
                        <label >Mật Khẩu</label>
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" id="password" placeholder="Mật Khẩu" />
                        <div value={error_password} className="error_password">{error_password}</div>
                    </div>
                    <div className="form-group">
                        <label >Xác nhận Mật Khẩu</label>
                        <input value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" className="form-control" id="confirmPassword" placeholder="Xác Nhận Mật Khẩu" />
                        <div value={error_confirmPassword} className="error_confirmPassword">{error_confirmPassword}</div>
                    </div>

                    <input className="btn btn-success"  type="submit" value="Đăng ký" />
                </form>
            </div>
        </div>
    )

}

export default Register;



