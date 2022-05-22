import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Info from './Info';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;