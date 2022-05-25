import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';


const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-black-500">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;