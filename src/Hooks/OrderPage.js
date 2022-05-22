import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const OrderPage = () => {
    const { partsesId } = useParams()
    const [product, setPartses] = useState({});

    useEffect(() => {
        const url = `https://gentle-springs-06548.herokuapp.com/service/${partsesId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPartses(data));
    }, [])
    return (
        <div className='container' >
            <div className='text-center'>
                <img src={product.img} alt="" />
                <h2>{product.name} </h2>
                <h4>Price : {product.price}</h4>
                <h5>{product.description}</h5>
                <h4>Stock:{product.quantity}</h4>
                <Link to="/">
                    <button className='btn btn-primary'>Manage Product</button>
                </Link>
            </div>
        </div>
    );
};

export default OrderPage;