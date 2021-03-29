import React from 'react';
import Cart from '../Cart/Cart';
import CheckOut from '../CheckOut/CheckOut';

function Payment(props) {
    return (
        <div className="row">
           
            <div className="col-6">
            <h2 className="text-center">Thông tin giao hàng</h2>
                <form >
                    <div className="form-group">
                        <label htmlFor="inputAddress">Họ và Tên</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Số điện thoại</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Địa Chỉ</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
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