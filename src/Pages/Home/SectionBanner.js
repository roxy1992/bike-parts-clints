import React from 'react';
import SecBanner from '../../assets/images/banner-parst.jpg';
// import background from '../../assets/images/bacr-00.png';
import Button from '../Shared/Button';

const SectionBanner = () => {
    return (
        <section style={{
            // background: `url(${background})`
        }}
            className='  flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='' src={SecBanner} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Bike,s Parts Manufacturer</h3>
                <h2 className='text-3xl text-dark'>Make Quality Full Parts For Bike</h2>
                <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                <Button>Get Started</Button>
            </div>
        </section>
    );

};

export default SectionBanner;