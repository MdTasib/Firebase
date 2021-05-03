import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../Commarce';

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className='m-3' defaultValue={loggedInUser.name} {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}<br />

            <input className='m-3' defaultValue={loggedInUser.email} {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}<br />

            <input className='m-3' type="submit" />
        </form>
    );
};

export default Shipment;