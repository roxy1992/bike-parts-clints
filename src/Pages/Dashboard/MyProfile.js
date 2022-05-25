import React from 'react';
import roxy from '../../assets/images/roxy.jpg';

const MyProfile = () => {
    return (
        <div>
            <h2 className='text-center font-bold'>my profile</h2>
            <div class="avatar">
                <div class="w-24 rounded-xl">
                    <img src={roxy} />
                </div>
                <div>
                    <h1> iam roxy Bhuiyan</h1>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;