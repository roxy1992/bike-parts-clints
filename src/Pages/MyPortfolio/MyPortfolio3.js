import React from 'react';
import rox from '../../assets/images/paanda.png';

const MyPortfolio3 = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">

            <div class="card-body">
                <h2 class="text-5xl font-bold card-title">............</h2>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2 class="text-5xl font-bold card-title"> Project PANDA Comarch </h2>
                <br />
                <br />
                <h2 class="text-3xl font-bold card-title">Languge & Framwork</h2>
                <h2 class="text-2xl font-bold card-title">HTML,CSS,Javascript,nodjs, <br />  react,bootsrap,netlyfy.</h2>
                <p>a e comerch project</p>
                <button class="btn btn-primary"><a href="https://panda-comarce-jh.netlify.app/">Live Site</a></button>


            </div>
            <img width={500} src={rox} alt="" />
        </div>
    );
};

export default MyPortfolio3;