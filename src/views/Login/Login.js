import './style.css';

<<<<<<< HEAD
import { auth, signInWithGoogle } from "./../../firebase/ultils";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email,password);
            
        } catch (error) {
            
        }
=======
import { signInWithGoogle } from "./../../firebase/ultils";

function Login() {

    const handleSubmit = async (e) => {
        e.preventDefault();
>>>>>>> 2d2d3e6222b9d982c3220db834fc9a96f6ba85f8
    }

    return (
        <div className="login row m-5">
            <div className="col-lg m-5">
                <h1 className="text-center">Đăng nhập</h1>
            </div>
            <div className="col-lg m-5">
<<<<<<< HEAD
                <form className="login" onSubmit={handleSubmit}>
=======
                <form onSubmit={handleSubmit} className="login">
>>>>>>> 2d2d3e6222b9d982c3220db834fc9a96f6ba85f8
                    <div className="form-group">
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        <div className="form-group mt-4">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value) } className="form-control" id="exampleInputPassword1" placeholder="Mật khẩu" />
                        </div>
                        <button className="btn btn-secondary"  >
                            Đăng Nhập
                        </button>
                        <div>
                            <Link to="/register" className="text-secondary" href>Đăng Kí</Link>
                        </div>
                        <div>
                            <button onClick={signInWithGoogle} className="text-secondary" href>Login With Google</button>
                        </div>
                        <div>
                            <button onClick={signInWithGoogle} className="text-secondary" href>Login With Google</button>
                        </div>
                    </div></form>
            </div>
        </div>
    )

}

export default Login;