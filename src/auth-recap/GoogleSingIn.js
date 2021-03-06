import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase.confiq';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const GoogleSingIn = () => {
    const [user, setUser] = useState({
        isLoggedIn: false,
        displayName: '',
        email: '',
        photoURL: '',
    })

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSingIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const userSingIn = {
                    isLoggedIn: true,
                    displayName,
                    email,
                    photoURL,
                }
                setUser(userSingIn);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGoogleSingOut = () => {
        firebase.auth().signOut()
            .then(result => {
                const userSingOut = {
                    isLoggedIn: false,
                    displayName: '',
                    email: '',
                    photoURL: '',
                }
                setUser(userSingOut);
            })
    }

    return (
        <div className='text-center p-5'>
            <h2>Google Sing In With Firebase</h2>
            {user.isLoggedIn ?
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<EmailIcon />}
                    onClick={handleGoogleSingOut}
                >
                    Google Sing Out
              </Button>
                :
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<EmailIcon />}
                    onClick={handleGoogleSingIn}
                >
                    Google Sing In
              </Button>
            }
            {
                user.isLoggedIn && <div>
                    <h3>Welcome {user.displayName}</h3>
                    <p>Email : {user.email}</p>
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            }
        </div>
    );
};

export default GoogleSingIn;