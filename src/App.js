import './App.css';
import GoogleAuth from './firebase/GoogleAuth';
import FacebookAuth from './firebase/FacebookAuth';
import GithubAuth from './firebase/GithubAuth';

function App() {
  return (
    <div>
      <GoogleAuth />

      {/* <FacebookAuth /> */}

      {/* <GithubAuth /> */}
    </div>
  )
}

export default App;