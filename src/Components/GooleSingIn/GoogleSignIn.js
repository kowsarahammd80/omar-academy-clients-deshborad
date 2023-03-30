import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import './GooleSignIn.css'

const GoogleSignIn = () => {

  const {googleProvider} = useContext(AuthContext)

  const provider = new GoogleAuthProvider();

  const navigate = useNavigate()

  const handleGoogleLogin =() =>{

    googleProvider(provider)
    .then((res) => {
      const user = res.user
      console.log(user)
      navigate('/dashboard')
    })
    .catch(e => console.log(e))

  }
 
  return (

    <div>
        
         <button onClick={handleGoogleLogin} className='my-5 googleSignInButton'> Sign In With Google
         </button>

    </div>

  );

};

export default GoogleSignIn;