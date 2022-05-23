import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../Shared/Button';

const Parts = ({ parts }) => {
    const { _id, name, img, description, minimum, available, price } = parts;
    const navigate = useNavigate();

    const navigateToOrder = id => {
        navigate(`/parts/${id}`);
    }
    return (
        <div className=" card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2>{name}</h2>
                {/* <img src={img} alt="" /> */}
                <p>{description}</p>
                <h3>Minimum Order Qnty:{minimum}</h3>
                <h3>Available:{available}</h3>
                <h2>Price Per Qnty:{price}</h2>
                {/* <div className="card-actions">
                    <Button>Order Now</Button>
                </div> */}

                <button onClick={() => navigateToOrder(_id)} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Order Now</button>

            </div>
        </div>
    );
};

export default Parts;