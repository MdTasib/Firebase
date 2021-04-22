import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase.confiq';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


function GoogleAuth() {

    const [user, setUser] = useState({});

    const googleProvider = new firebase.auth.GoogleAuthProvider();


    const googleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const creadential = result.credential;
                const token = creadential.accessToken;
                const user = result.user;

                setUser(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.creadential;

                console.log(errorMessage, errorCode)
            })
    }





    return (
        <div>
            <h4>Google Sign In</h4>
            <button onClick={googleSignIn}>Google Sign in</button><br />
            <h4>Email : {user.email}</h4>
            <img src={user.photoURL} alt="" />
        </div>
    );
}

export default GoogleAuth;