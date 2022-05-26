import React from 'react';
import { useForm } from "react-hook-form";

const AddParts = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://guarded-taiga-58586.herokuapp.com/parts`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>

            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Add Parts</span>
                </label>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="name" class="input input-bordered w-full max-w-xs" {...register("name", { required: true, maxLength: 20 })} />
                    <input type="text" placeholder="Description" class="input input-bordered w-full max-w-xs" {...register("description")} />
                    <input type="number" placeholder="Minimum quantity" class="input input-bordered w-full max-w-xs" {...register("minimum")} />
                    <input type="number" placeholder="available quantity" class="input input-bordered w-full max-w-xs" {...register("available")} />
                    <input type="number" placeholder="price per quantity" class="input input-bordered w-full max-w-xs" {...register("price")} />
                    <input type="text" placeholder="iamges" class="input input-bordered w-full max-w-xs" {...register("img")} />
                    <input type="submit" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddParts;