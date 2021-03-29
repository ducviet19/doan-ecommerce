import React from 'react';
import { Link } from 'react-router-dom';

function ButtonCheckOut(props) {
    return (
        <>
            <div className="col-12 d-flex justify-content-between">
                <button className="btn btn-primary">Tiếp tục mua sắm</button>
              <Link to="/payment" ><button className="btn btn-primary">Tiến hành thanh toán</button></Link>  
            </div>
            
        </>
    );
}

export default ButtonCheckOut;