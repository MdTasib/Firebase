import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase.confiq';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


function GithubAuth() {

    const provider = new firebase.auth.GithubAuthProvider();




    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const user = res.user;
                console.log(user)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('code : ', errorCode, 'message: ', errorMessage)
            })
    }

    return (
        <div>
            <h3>Github Sign In</h3>
            <button onClick={handleSignIn}>Github Sign In</button>
        </div>
    )
}

export default GithubAuth;