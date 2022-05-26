import React from 'react';
import icon1 from '../../assets/images/roxy.jpg';
import icon2 from '../../assets/images/reve2.jpg';
import icon3 from '../../assets/images/rve3.jpg';

const Testimonials = () => {
    return (
        <div className='my-28 '>
            <div >
                <h4 className="text-xl text-center text-primary font-bold">Testimonials</h4>
                <h2 className='text-3xl text-center'>What our Patients say</h2>
            </div>


            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 my-20'>
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">kalam bbc</h2>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={icon1} />
                            </div>
                        </div>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>I always carry parts for my car from now on. Very good in service</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">sabuj khan</h2>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src={icon2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>They prepare their parts very efficiently. I am satisfied</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Belal ahmed</h2>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <div class="avatar offline">
                                    <div class="w-24 rounded-full">
                                        <img src={icon3} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>The parts are made very strong. That's why I don't have parts all the time now.</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;