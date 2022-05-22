import React, { useEffect, useState } from 'react';
import Parts from './Parts';

const Partses = () => {

    const [partses, setPartses] = useState([]);

    useEffect(() => {
        fetch('Parts.json')
            .then(res => res.json())
            .then(data => setPartses(data));
    }, [])


    return (
        <div >
            <h2 className="text-5xl font-bold text-center"> Our Parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-8 px-4 pt-12 sm:grid-cols-3 pb-10'>
                {
                    partses.map(parts => <Parts
                        key={parts.id}
                        parts={parts}
                    ></Parts>)
                }
            </div>
        </div>
    );
};

export default Partses;