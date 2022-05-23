import React from 'react';
import UseParts from '../../Hooks/UseParts';
import Parts from './Parts';

const AllParts = () => {
    const [partses] = UseParts();
    return (
        <div >
            <h2 className="text-5xl font-bold text-center p-5"> Our Parts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-8 px-4 pt-12 sm:grid-cols-3 pb-10'>
                {
                    partses.map(parts => <Parts
                        key={parts._id}
                        parts={parts}
                    ></Parts>)
                }
                {/* <div>
                <Button>More Parts</Button>
            </div> */}
            </div>
        </div>
    );
};

export default AllParts;