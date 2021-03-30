import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser } from '../../redux/User/user.action'


const mapState = ({ user }) => ({
    users: user.users
})
function ListUser(props) {

    const dispatch = useDispatch()
    const { users } = useSelector(mapState)

    useEffect(() => {
        dispatch(
            fetchUser()
        )
    }, [])
    console.log('sadad', users)
    return (
        <div>
            <h2>Danh sách tài khoản</h2>
            <table class="table table-light">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Roles</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            const { displayName, email, userRoles, documentID } = user
                            return (
                                <tr key={index}>
                                    <th scope="row">{documentID}</th>
                                    <td><Link to={`/editproduct/${documentID}`} >{displayName}</Link> </td>
                                    <td>{email}</td>
                                    <td>{userRoles}</td>
                                    {/* <td ><button onClick={() => dispatch(deleteProduct(documentID))}>X</button></td> */}
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>

        </div>
    );
}

export default ListUser;


