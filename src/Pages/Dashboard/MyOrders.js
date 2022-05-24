import React, { useEffect, useState } from 'react';

const MyOrders = () => {

    // const [orders, setOrders] = useState([]);
    // const [user] = useAuthState(auth);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders`)
    //         .then(res =>? res.json())
    //         .then(data => setOrders(data))
    // }, [])

    return (
        <div>
            <h2>My Order</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Order Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;