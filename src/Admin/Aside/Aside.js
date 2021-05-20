import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const mapState = (state) => ({
    currentUser: state.user.currentUser
})

function Aside(props) {

    const { currentUser } = useSelector(mapState)


    useEffect(() => {

    })

    return (

        <div className="sidebar">
            <div className="sidebar-header">
                <h3 className="brand">
                    <span className="ti-unlink" />
                    <span>Quản lý</span>
                </h3>
                <label htmlFor="sidebar-toggle" className="ti-menu-alt" />
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <Link to="/">
                            <span className="ti-home" />
                            <span>Website</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin">
                            <span className="ti-home" />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/listproduct">
                            <span className="ti-face-smile" />
                            <span>Quản lý sản phẩm</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/order">
                            <span className="ti-agenda" />
                            <span>Quản lý đơn hàng</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/listuser">
                            <span className="ti-clipboard" />
                            <span>Quản lý người dùng</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/feedback">
                            <span className="ti-folder" />
                            <span>Quản lý phản hồi</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/category">
                            <span className="ti-time" />
                            <span>Quản lý danh mục</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>





        // <aside className="aside">
        //     <div className="avatar">
        //         <img className="img-thumbnail" src={currentUser.photoUrl} alt="Thumbnail image" />
        //         <div>
        //             <p className="text-white">{currentUser.displayName}</p>
        //         </div>

        //     </div>
        //     <div>
        //         <div></div>
        //         <ul className="list-unstyled">
        //             <li className="m-3"><Link to="" style={{ textDecoration: 'none' }} className="text-white" to="/"><i className="fas fa-home"></i> Website</Link> </li>
        //             <li className="m-3"><Link to="" style={{ textDecoration: 'none' }} className="text-white" to="/admin"><i className="fas fa-tablet-alt"></i> Tổng quan</Link> </li>
        //             <li className="m-3"><Link to="" style={{ textDecoration: 'none' }} className="text-white" to="/admin/order"><i className="fas fa-truck"></i> Quản lý đơn hàng</Link> </li>
        //             <li className="m-3"> <Link to="" style={{ textDecoration: 'none' }} className="text-white" to="/admin/listproduct"><i className="fas fa-bookmark"></i> Quản lý sản phẩm</Link> </li>
        //             <li className="m-3"> <Link to="" style={{ textDecoration: 'none' }} className="text-white" to="/admin/listuser"><i className="fas fa-users-cog"></i> Quản lý người dùng</Link> </li>
        //             <li className="m-3"> <Link to="" style={{ textDecoration: 'none' }} className="text-white" to="/admin/category"><i className="fas fa-users-cog"></i> Quản lý danh mục</Link> </li>
        //             <li className="m-3"> <Link to="" style={{ textDecoration: 'none' }} className="text-white" to="/admin/category"><i className="fas fa-users-cog"></i> Quản lý phản hồi</Link> </li>
        //         </ul>
        //     </div>
        // </aside>

    );
}

export default Aside;