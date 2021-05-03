import './App.css';
import GoogleAuth from './firebase/GoogleAuth';
import FacebookAuth from './firebase/FacebookAuth';
import GithubAuth from './firebase/GithubAuth';
import GoogleSingIn from './auth-recap/GoogleSingIn';
import From from './Form/From';
import FacebookSingIn from './auth-recap/FacebookSingIn';
import Commarce from './Private-Route/Commarce';

function App() {
  return (
    <div>
      {/* <p className='text-secondary'>Google Auth</p><hr />
      <GoogleAuth />
      <p className='text-secondary'>Facebook Auth</p><hr />
      <FacebookAuth />
      <p className='text-secondary'>Github Auth</p><hr />
      <GithubAuth />
      <p className='text-secondary'>Google Sing In</p><hr />
      <GoogleSingIn />
      <p className='text-secondary'>Facebook Sing In</p><hr />
      <FacebookSingIn />
      <p className='text-secondary'>Sing up form</p><hr />
      <From /> */}
      <Commarce />
    </div>
  )
}

export default App;