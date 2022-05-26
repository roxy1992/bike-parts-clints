import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';
// import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const OrderModal = ({ parts, quantity, setProduct }) => {

    const { _id, name, price } = parts;

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const handleAddCart = event => {

        // const quantity = event.target.quantity.value;
        // const price = event.target.price.value;
        // console.log(name, quantity, price, _id);

        const ordering = {
            productId: _id,
            product: name,
            buyerName: user.displayName,
            buyer: user.email,
            quantity: quantity,
            price: price
        }
        // console.log(ordering);

        fetch('https://guarded-taiga-58586.herokuapp.com/ordering', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ordering)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setProduct(null)
                    toast(` order is successfull`)
                }
                else {
                    toast.error(` ordered failed`)
                }
            });
        event.preventDefault();
    };


    return (
        <div>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="cart-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>

                    <form onSubmit={handleAddCart} className='App grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" name="name" defaultValue={user?.displayName || ''} disabled className="input input-bordered w-full max-w-xs" />

                        <input type="email" name="email" defaultValue={user?.email || ''} disabled className="input input-bordered w-full max-w-xs" />

                        <input type="number" name="quantity" defaultValue={quantity} disabled placeholder="Quantity" className="input input-bordered w-full max-w-xs"
                        />

                        <input type="number" name="price" defaultValue={price * quantity} disabled placeholder="price" className="input input-bordered w-full max-w-xs" />

                        <button type="submit"><label htmlFor="cart-modal" className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" >Submit</label></button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default OrderModal;