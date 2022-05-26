import React from 'react';
import UseParts from '../../Hooks/UseParts';

const ManageParts = () => {
    const [parts, setParts] = UseParts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://guarded-taiga-58586.herokuapp.com/parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = parts.filter(parts => parts._id !== id)
                    setParts(remaining)
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Manage Your Parts {parts.length}</h2>
            {
                parts.map(parts => <div key={parts.id}> <br />
                    <h3>{parts.name} </h3>
                    <button className="btn btn-primary text-white font-bold " onClick={() => handleDelete(parts._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageParts;