import React from 'react';
import InfoCard from './InfoCard';
import Exhaust from '../../assets/icons/catagory1.png';
import Brakes from '../../assets/icons/catary-2.png';
import Body from '../../assets/icons/catary-3.png';

const Info = () => {

    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Exhaust" bgClass="bg-gradient-to-r from-secondary to-primary" img={Exhaust}></InfoCard>
            <InfoCard cardTitle="Brakes" bgClass="bg-accent" img={Brakes}></InfoCard>
            <InfoCard cardTitle="Body" bgClass="bg-gradient-to-r from-secondary to-primary" img={Body}></InfoCard>
        </div>
    );
};

export default Info;