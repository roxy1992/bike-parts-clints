import React from 'react';
import roxy1 from '../.././assets/images/roxy.jpg'
import Info from '../Home/Info';


const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-4xl font-bold">MD MAJADUL ISLAM ROXY BHUIYAN</h1>
                    <p className="py-6 text-2xl">I am a junior frontend web developer. I am also a digital marketing expert. I love programming a lot. As a programmer, I know HTML, CSS, javascript, bootstrap, tailwinds, daisyui, nodejs, express, monfodb, firebase, git, jquery. Also many more.I gave links to some of my projects <br /> * https://convention-center-assignment3.netlify.app/ <br />
                        * https://mobile-corner-service.web.app/  <br /> * https://roxy92.github.io/roxy-bhuiyan/</p> <br />


                </div>
                <img src={roxy1} className="max-w-sm" />
            </div>


        </div>

    );
};

export default MyPortfolio;