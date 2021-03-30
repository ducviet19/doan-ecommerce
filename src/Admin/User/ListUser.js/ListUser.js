import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useScrollTop from '../../../hook/useScrollTop';
import { fetchUsers } from '../../../redux/User/user.action';


const mapState = ({ user }) => ({
    users: user.users
})

function ListUser(props) {


    useScrollTop();
    const { users } = useSelector(mapState)
    const dispatch = useDispatch()

    console.log(users)


    useEffect(() => {
        dispatch(
            fetchUsers()
        )
    }, [])
    return (
        <div>

            <div className="">
                <Link to="/admin/newproduct"><button className="btn btn-primary">Thêm mới</button> </Link>
                <h2>Danh sách người dùng </h2>

                <table class="table table-light">
                    <thead>
                        <tr>
                            <th scope="col">Tên người dùng</th>
                            <th scope="col">Email</th>
                            <th scope="col">Vai trò</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((product, index) => {
                                const { displayName, email,documentID ,userRoles } = product
                                return (
                                    <tr key={index}>
                                        <td><Link to={`/admin/editproduct/${documentID}`} >{displayName}</Link> </td>
                                        <td>{email}</td>
                                        <td>{userRoles}</td>
                                        <td ><button className="btn btn-danger" >X</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default ListUser;