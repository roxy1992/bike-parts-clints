import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import SectionBanner from './SectionBanner';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <BusinessSummary></BusinessSummary>
            <SectionBanner></SectionBanner>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;