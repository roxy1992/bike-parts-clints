import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT'
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed make admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`success made an admin`);
                }
            })
    }
    return (
        <tr className='font-bold'>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs btn-success">Make Admin</button>}</td>
            <td><button class="btn btn-xs btn-warning">Remove User</button></td>
            {/* <td>Blue</td> */}
        </tr>
    );
};

export default UserRow;