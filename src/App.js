import './App.css';
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.confiq';

firebase.initializeApp(firebaseConfig);

function App() {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
  })


  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignInd = () => {
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        console.log(displayName, email, photoURL)

        // user setState --> setUser
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        }
        setUser(signedInUser);

      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(result => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: '',
        }
        // user setState --> setUser
        setUser(signedOutUser)
      })
      .catch(error => {
        console.log(error.message)
      })

  }



  const handleBlur = e => {
    console.log(e.target.name, e.target.value);
    if (e.target.name === 'email') {
      const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      console.log(isEmailValid);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value > 5;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      console.log(isPasswordValid && passwordHasNumber);
    }
  }
  const handleSubmit = () => {

  }



  // state destructuring
  const { name, email, photo } = user;

  return (
    <div className="App">
      <header className="App-header">
        {
          user.isSignedIn
            ?
            <button onClick={handleSignOut}>Sing Out</button>
            :
            <button onClick={handleSignInd}>Sing In</button>
        }
        {
          user.isSignedIn && <div>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <img src={photo} alt="" />
          </div>
        }



        {/* form validation */}
        <h3>Form Validation</h3>
        <form action={handleSubmit}>
          <input type="email" name="email" onBlur={handleBlur} placeholder='Your email address' required /><br />
          <input type="password" name="password" onBlur={handleBlur} placeholder='Your password' required /><br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
