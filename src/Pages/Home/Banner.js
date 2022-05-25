import React from 'react';
import parts from '../../assets/images/banner-img-2-removebg.png';
import Button from '../Shared/Button';


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-neutral-content">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={parts} className="max-w-sm" />
                <div>
                    <h1 className="text-5xl font-bold">RB BIKE PARTS ENTERPRISES</h1>
                    <br />
                    <h1 className="text-5xl font-bold">Best Bike,s Parts
                        Manufacturer</h1>
                    <p className="py-6">A bike parts manufacturing industry. We make parts and wholesale. We are the best in the market. And we have many years of reputation.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;