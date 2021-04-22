import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase.confiq';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


function FacebookAuth() {
    const [facebookUser, setFacebookUser] = useState({});


    const facebookProvider = new firebase.auth.FacebookAuthProvider();

    const facebookSignIn = () => {
        firebase.auth().signInWithPopup(facebookProvider)
            .then(result => {
                const credential = result.credential;
                const user = result.user;
                const accessToken = credential.accessToken;
                setFacebookUser(user);
                console.log(user)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage)
            })
    }


    return (
        <div>
            <h4>Facebook Sign In</h4>
            <button onClick={facebookSignIn}>Facebook Sign in</button><br />
            <h3>Name : {facebookUser.displayName}</h3>
            <h4>Email : {facebookUser.email}</h4>
            <img src={facebookUser.photoURL} alt="" />
        </div>
    );
}

export default FacebookAuth;