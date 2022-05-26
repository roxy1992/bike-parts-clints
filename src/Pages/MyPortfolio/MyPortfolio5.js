import React from 'react';
import protfolio from '../../assets/images/protfolio.png';

const MyPortfolio5 = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">

            <div class="card-body">
                <h2 class="text-5xl font-bold card-title">............</h2>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2 class="text-5xl font-bold card-title"> Project Protfolio </h2>
                <br />
                <br />
                <h2 class="text-3xl font-bold card-title">Languge & Framwork</h2>
                <h2 class="text-2xl font-bold card-title">HTML,CSS,Javascript,react,nodjs, <br />  react,bootsrap,netlyfy.</h2>
                <p>a protfolio project</p>
                <button class="btn btn-primary"><a href="https://roxy92.github.io/roxy-bhuiyan/">Live Site</a></button>


            </div>
            <img width={500} src={protfolio} alt="" />
        </div>
    );
};

export default MyPortfolio5;