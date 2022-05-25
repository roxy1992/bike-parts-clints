import React from 'react';

const AddAReview = () => {
    return (
        <div >
            <h2 className='font-bold'>add a revew </h2> <br />
            <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div> <br />
            <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" /> <br />
            <button class="btn btn-error">Submit</button>

        </div>
    );
};

export default AddAReview;