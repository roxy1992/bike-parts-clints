import React from 'react';

const Business = ({ business }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={business.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1>{business.number}</h1>
                <h2 className="card-title">{business.text}</h2>
                <h2>{business.description}</h2>
                {/* <p></p> */}
                {/* <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default Business;