import './App.css';
import GoogleAuth from './firebase/GoogleAuth';
import FacebookAuth from './firebase/FacebookAuth';
import GithubAuth from './firebase/GithubAuth';
import GoogleSingIn from './auth-recap/GoogleSingIn';

function App() {
  return (
    <div>
      {/* <GoogleAuth /> */}
      {/* <FacebookAuth /> */}
      {/* <GithubAuth /> */}
      <GoogleSingIn />
    </div>
  )
}

export default App;