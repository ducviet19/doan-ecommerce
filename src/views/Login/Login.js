import './style.css';


import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignInStart , signInSuccess, signInWithGoogle ,googleSignInStart } from '../../redux/User/user.action';
import useScrollTop from '../../hook/useScrollTop';
import swal from 'sweetalert';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
  });

function Login(props) {
    useScrollTop();
    
    const history = useHistory()
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    console.log(currentUser)


    useEffect( () => {
        if(currentUser) {
            
        }
        
    },[currentUser ] )


    const handleSubmit =  (e) => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
        // swal("Đăng nhập thành công!", "", "success");
        history.goBack();
       
    }

    const loginWithGoogle = () => {
        dispatch(googleSignInStart())
        swal("Đăng nhập thành công!", "", "success");

    }

    return (
        <div className="login row">
            <div className="col-lg">
                <h1 className="text-center">Đăng nhập</h1>
            </div>
            <div className="col-lg m-5">
                <form className="login" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        <div className="form-group mt-4">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value) } className="form-control" id="exampleInputPassword1" placeholder="Mật khẩu" />
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
                    </div></form>
            </div>
        </div>
    )

}

export default Login;