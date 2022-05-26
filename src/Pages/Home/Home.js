import React from 'react';
import Partses from '../Parts/Partses';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
// import Footer from './Footer';
// import Info from './Info';
import SectionBanner from './SectionBanner';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <Banner></Banner>
            {/* <Info></Info> */}
            <Partses></Partses>
            <BusinessSummary></BusinessSummary>
            <Testimonials></Testimonials>
            <SectionBanner></SectionBanner>
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;