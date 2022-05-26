import React from 'react';
import fashion from '../../assets/images/fashion.png';

const MyPortfolio4 = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <img width={500} src={fashion} alt="" />
            <div class="card-body">
                <h2 class="text-5xl font-bold card-title">............</h2>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2 class="text-5xl font-bold card-title"> Project Fashion product </h2>
                <br />
                <br />
                <h2 class="text-3xl font-bold card-title">Languge & Framwork</h2>
                <h2 class="text-2xl font-bold card-title">HTML,CSS,Javascript,nodjs, <br />  react,bootsrap,netlyfy.</h2>
                <p>a e comerch project</p>
                <button class="btn btn-primary"><a href="https://nike-react-assignment3-test.netlify.app/">Live Site</a></button>


            </div>

        </div>
    );
};

export default MyPortfolio4;