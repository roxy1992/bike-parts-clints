import React from 'react';
import cuntry from '../../assets/icons/cuntry.jpg';
import clients from '../../assets/icons/clicnt.png';
import feedback from '../../assets/icons/fedbk.png';
import Business from './Business';

const BusinessSummary = () => {
    const businessSummary = [
        {
            _id: 1,
            text: 'Countries',
            description: 'We have business in 72 countries. Where we are doing regular business',
            number: '72',
            img: cuntry
        },
        {
            _id: 2,
            text: 'Happy Clints',
            description: 'We have 382+ and more happy clients. And we clients are very happy',
            number: '273+',
            img: clients
        },
        {
            _id: 3,
            text: 'Feedbaks',
            description: 'We have 432+ better feedback. Which puts us above all.',
            number: '432+',
            img: feedback
        },
    ]
    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Business Summary</h3>
                <h2 className='text-4xl'>try to understand user expectation</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20'>
                {
                    businessSummary.map(business => <Business
                        key={business._id}
                        business={business}
                    ></Business>)
                }
            </div>

        </div>
    );
};

export default BusinessSummary;