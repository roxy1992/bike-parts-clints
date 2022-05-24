import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import Button from '../Pages/Shared/Button';

const OrderPage = () => {
    const { partsId } = useParams();
    const [parts, setParts] = useState({});

    /* */


    useEffect(() => {
        const url = `http://localhost:5000/parts/${partsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <div className=" card w-96 bg-base-100 shadow-xl flex h-screen justify-center items-center ">
            <figure className="px-10 pt-10">
                <img src={parts.img} alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2>{parts.name}</h2>
                {/* <img src={img} alt="" /> */}
                <p>{parts.description}</p>
                <h3>Minimum Order Qnty:{parts.minimum}</h3>
                <h3>Available:{parts.available}</h3>
                <h2>Price Per Qnty:{parts.price}</h2>
                <div className="card-actions">
                    <Link to="/allparts">
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">More Parts</button>
                    </Link>
                    {/* <Button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Order Now</Button> */}
                </div>

            </div>


        </div>
    );
};

export default OrderPage;