import './style.css';

function Login() {

    return (
        <div className="login row m-5">
            <div className="col-lg m-5">
                <h1 className="text-center">Đăng nhập</h1>
            </div>
            <div className="col-lg m-5">
                <form className="login">
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                        <div className="form-group mt-4">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mật khẩu" />
                        </div>
                        <button type="submit" className="btn btn-secondary">Đăng nhập</button>
                        <div>
                            <a className="text-secondary" href>Đăng Kí</a>
                        </div>
                    </div></form>
            </div>
        </div>
    )

}

export default Login;