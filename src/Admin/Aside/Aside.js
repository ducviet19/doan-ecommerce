import React from 'react';
import { Link } from 'react-router-dom';


function Aside(props) {
    return (
       
            <aside className="col-2 bg-light">
                <div className="avatar">
                    <img src="https://img.icons8.com/wired/50/000000/admin-settings-male.png" />

                </div>
                <div>
                    <ul className="list-group">
                    <li className="list-group-item"><Link to="/">Website</Link> </li>
                        <li className="list-group-item"><Link to="/admin">Tong Quan</Link> </li>
                        <li className="list-group-item"><Link to="/admin/order">Đơn Hàng</Link> </li>
                        <li className="list-group-item"> <Link to="/admin/listproduct">San pham</Link> </li>
                        <li className="list-group-item"> <Link to="/admin/listuser">Nguoi Dung</Link> </li>
                        <li className="list-group-item">Bao Cao</li>
                    </ul>
                </div>
            </aside>
           
       
    );
}

export default Aside;