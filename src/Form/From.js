import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase.confiq';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const From = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(result => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                })
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signOut()
                .then(result => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                })
        }
        e.preventDefault();
    }

    const handleBlur = e => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    return (
        <div className='text-center pt-5 w-50 m-auto'>
            <h2>Our Own Authentication</h2>
            <input class="form-check-input" type="checkbox" name="checkbok" onChange={() => setNewUser(!newUser)} />
            <label class="form-check-label" htmlFor="newUser">New User Sing Up</label>
            <form onSubmit={handleSubmit}>
                {newUser && <input className='form-control' name='name' onBlur={handleBlur} type="text" placeholder='User Name' required />}<br />
                <input className='form-control' name='email' onBlur={handleBlur} type="text" placeholder='Your Email' required /><br />
                <input className='form-control' name='password' onBlur={handleBlur} type="password" placeholder='Your Password' required /><br />
                <input className='btn btn-outline-success' type="submit" value="Submit" />
            </form>
            <h3 className='m-2'>User Info</h3>
            <h6>Name : {user.name}</h6>
            {
                user.success ?
                    <p className='text-success'>User {newUser ? 'Created' : 'Loged In'} Successfully.</p>
                    :
                    <p className='text-danger'>{user.error}</p>
            }
        </div>
    );
};

export default From;