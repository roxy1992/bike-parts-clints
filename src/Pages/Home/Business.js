import React from 'react';

const Business = ({ business }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={business.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h1>{business.number}</h1>
                <h2 class="card-title">{business.text}</h2>
                <h2>{business.description}</h2>
                {/* <p></p> */}
                {/* <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default Business;