import React from 'react';
// import contactBacImg from '../../assets/images/bacr-02.png';
import Button from '../Shared/Button';

const Contact = () => {
    return (
        <div style={{
            // background: `url(${contactBacImg})`
        }} className='bg-neutral-content px-10 py-14 '>
            <div className='text-center pb-14 text-white'>
                <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                    Contact Us
                </h1>
                <h1 className='text-4xl'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <Button>Submit</Button>
            </div>
        </div>
    );
};

export default Contact;