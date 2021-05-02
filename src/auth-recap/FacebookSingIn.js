import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Button } from '@material-ui/core';
import firebaseConfig from '../firebase.confiq';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const FacebookSingIn = () => {
    const [user, setUser] = useState({
        isLogedIn: false,
        displayName: '',
        email: '',
        error: '',
    });

    const provider = new firebase.auth.FacebookAuthProvider();

    // sing in user
    const handleSingIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const user = {
                    isLogedIn: true,
                    displayName,
                    email,
                }
                setUser(user);
            })
            .catch(error => {
                setUser(error.message);
            })
    }

    // sing out user
    const handleSingOut = () => {
        firebase.auth().signOut()
            .then(result => {
                const user = {
                    displayName: '',
                    email: '',
                }
                setUser(user);
            })
    }

    return (
        <div className='text-center p-5'>
            <h3 className='m-4'>Facebook Sing In</h3>
            {
                user.isLogedIn ?
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<FacebookIcon />}
                        onClick={handleSingOut}
                    >Facebook Sing Out</Button>
                    :
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<FacebookIcon />}
                        onClick={handleSingIn}
                    >Facebook Sing In</Button>
            }
            <div className='p-5'>
                <h3>User Name : {user.displayName}</h3>
                <p>Email : {user.email}</p>
            </div>
        </div>
    );
};

export default FacebookSingIn;