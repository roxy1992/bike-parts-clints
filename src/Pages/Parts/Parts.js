import React from 'react';
import Button from '../Shared/Button';

const Parts = ({ parts }) => {
    const { name, img, description, minimum, available, price } = parts;
    return (
        <div class=" card w-96 bg-base-100 shadow-xl ">
            <figure class="px-10 pt-10">
                <img src={img} alt="" />
            </figure>
            <div class="card-body items-center text-center">
                <h2>{name}</h2>
                {/* <img src={img} alt="" /> */}
                <p>{description}</p>
                <h3>Minimum Order Qnty:{minimum}</h3>
                <h3>Available:{available}</h3>
                <h2>Price Per Qnty:{price}</h2>
                <div class="card-actions">
                    <Button>Order Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Parts;