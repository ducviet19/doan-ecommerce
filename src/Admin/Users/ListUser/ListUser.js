import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap'
import { deleteUser, fetchUser } from '../../../redux/User/user.action'
import EditUser from '../EditUser/EditUser';
import AddUser from '../AddUser/AddUser'

const mapState = ({ user }) => ({
    users: user.users
})
function ListUser(props) {

    const dispatch = useDispatch()
    const { users } = useSelector(mapState)
    const [showModal, setShowModal] = useState(false);
    const [id, setID] = useState('');

    console.log(id)

    const toggleModal = () => setShowModal(false);


    useEffect(() => {
        dispatch(
            fetchUser()
        )
    }, [])
    return (
        <div>
            <ButtonToolbar>
                <Button className='btn btn-primary' onClick={() => { setShowModal(true) }}>Thêm thành viên</Button>
            </ButtonToolbar>

            <h2>Danh sách tài khoản</h2>
            <table class="table table-light">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Vai Trò</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            const { displayName, email, userRoles, documentID } = user
                            return (
                                <tr key={index}>
                                    <th scope="row">{documentID}</th>
                                    <td>{displayName}</td>
                                    <td>{email}</td>
                                    <td>{userRoles}</td>
                                    <td ><button className='btn btn-danger' onClick={() => dispatch(deleteUser(documentID))}>X</button></td>
                                    <td ><button className='btn btn-success' onClick={() => { setShowModal(true); setID(documentID) }} > Edit</button></td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
            <EditUser showModal={showModal} toggleModal={toggleModal} id={id} />
            <AddUser showModal={showModal} toggleModal={toggleModal} />
        </div>
    );
}

export default ListUser;


