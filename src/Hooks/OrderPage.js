import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderModal from './OrderModal';

// import Button from '../Pages/Shared/Button';

const OrderPage = () => {
    const { partsId } = useParams();
    const [parts, setParts] = useState({});

    /* */

    const [quantity, setQuantity] = useState(5)
    const handleIncrease = () => {
        setQuantity(quantity + 1)

    }
    const handleDecrease = () => {

        if (quantity <= 5) {

        }
        else {
            setQuantity(quantity - 1)
        }

    }


    useEffect(() => {
        const url = `https://guarded-taiga-58586.herokuapp.com/parts/${partsId}`;

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
                <div className='my-5'>
                    <button onClick={() => handleDecrease()} className="btn btn-xs">-</button>
                    <input className='border-2 rounded-lg bg-zinc-500 text-white font-bold' type="tel" value={quantity} placeholder='Your product pices' id="" />
                    <button onClick={() => handleIncrease()} className="btn btn-xs">+</button>
                </div>
                <div className="card-actions">

                    <label
                        htmlFor="cart-modal"
                        onClick={() => setParts(parts)}
                        className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Add Cart</label>

                </div>
                {
                    parts && <OrderModal parts={parts} setParts={setParts}></OrderModal>

                }
            </div>
        </div>
    );
};

export default OrderPage;