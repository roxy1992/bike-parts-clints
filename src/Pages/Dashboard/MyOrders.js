import React, { useEffect, useState } from 'react';

const MyOrders = () => {

    // const [orders, setOrders] = useState([]);
    // const [user] = useAuthState(auth);

    // useEffect(() => {
    //     fetch(`https://guarded-taiga-58586.herokuapp.com/orders`)
    //         .then(res =>? res.json())
    //         .then(data => setOrders(data))
    // }, [])

    return (
        <div>
            <h2 className='text-center font-bold'>My Order</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Mail</th>
                            <th>Order Item</th>
                            <th>Remove Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {/* <tr className='font-bold'>
                            <th>1</th>
                            <td>kalam@bbc.com</td>
                            <td>Yoshimura Alpha</td>
                            <td><button class="btn btn-xs btn-warning">Remove Order</button></td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;