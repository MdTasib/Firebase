import './App.css';
import GoogleAuth from './firebase/GoogleAuth';
import FacebookAuth from './firebase/FacebookAuth';
import GithubAuth from './firebase/GithubAuth';
import GoogleSingIn from './auth-recap/GoogleSingIn';
import From from './Form/From';

function App() {
  return (
    <div>
      {/* <GoogleAuth /> */}
      {/* <FacebookAuth /> */}
      {/* <GithubAuth /> */}
      {/* <GoogleSingIn /> */}
      <From />
    </div>
  )
}

export default App;