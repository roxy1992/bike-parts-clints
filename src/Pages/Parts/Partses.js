import React, { useEffect, useState } from 'react';
import Parts from './Parts';
import UseParts from '../../Hooks/UseParts';
import Button from '../Shared/Button';
import { Link } from 'react-router-dom';

const Partses = () => {

    // const [partses, setPartses] = useState([]);

    // useEffect(() => {
    //     fetch('Parts.json')
    //         .then(res => res.json())
    //         .then(data => setPartses(data));
    // }, [])

    const [partses] = UseParts();
    console.log(partses)


    return (
        <div >
            <h2 className="text-5xl font-bold text-center p-5"> Our Parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-8 px-4 pt-12 sm:grid-cols-3 pb-10'>
                {
                    partses.slice(0, 6).map(parts => <Parts
                        key={parts.id}
                        parts={parts}
                    ></Parts>)
                }
            </div>
            <div className=' flex justify-center'>
                {/* <Button class="btn btn-active btn-link btn-center">More Parts</Button> */}
                <Link to="/allparts">
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">More Parts</button>
                </Link>
            </div>
        </div>
    );
};

export default Partses;