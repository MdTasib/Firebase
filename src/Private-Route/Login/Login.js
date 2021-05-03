import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.confiq';
import GoogleSingIn from '../../auth-recap/GoogleSingIn';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })

    // handle form submit
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(result => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                })
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(result => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log('sing in user info', result.user);
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

    // update user profile
    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        })
            .then(() => {
                console.log('user name update successfully');
            })
            .catch(error => {
                console.log(error);
            })
    }

    // handle form validation
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
            <input className="form-check-input" type="checkbox" name="checkbok" onChange={() => setNewUser(!newUser)} />
            <label className="form-check-label" htmlFor="newUser">New User Sing Up</label>
            <form onSubmit={handleSubmit}>
                {newUser && <input className='form-control' name='name' onBlur={handleBlur} type="text" placeholder='User Name' required />}<br />
                <input className='form-control' name='email' onBlur={handleBlur} type="text" placeholder='Your Email' required /><br />
                <input className='form-control' name='password' onBlur={handleBlur} type="password" placeholder='Your Password' required /><br />
                <input className='btn btn-outline-success' type="submit" value={newUser ? 'Sing Up' : 'Sing In'} />
            </form>
            <h3 className='m-2'>User Info</h3>
            <h6>Name : {user.name}</h6>
            {
                user.success ?
                    <p className='text-success'>User {newUser ? 'Created' : 'Loged In'} Successfully.</p>
                    :
                    <p className='text-danger'>{user.error}</p>
            }
            <GoogleSingIn />
        </div>
    );
};

export default Login;