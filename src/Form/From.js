import React from 'react';

const From = () => {
    const handleSubmit = () => {

    }
    const handleBlur = e => {
        console.log(e.target.name, e.target.value);
        if (e.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isEmailValid);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            console.log(isPasswordValid && passwordHasNumber);
        }
    }

    return (
        <div className='text-center pt-5 w-50 m-auto'>
            <h2>Our Own Authentication</h2>
            <form action={handleSubmit}>
                <input className='form-control' name='email' onBlur={handleBlur} type="text" placeholder='Your Name' required /><br />
                <input className='form-control' name='password' onBlur={handleBlur} type="password" placeholder='Your Password' required /><br />
                <input className='btn btn-outline-success' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default From;