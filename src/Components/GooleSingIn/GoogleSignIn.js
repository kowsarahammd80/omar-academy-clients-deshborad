import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveuserInfo } from '../../api/userinfo/userinfo';
import useToken from '../../CustomHook/useToken';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import './GooleSignIn.css'

const GoogleSignIn = () => {

  const {googleProvider} = useContext(AuthContext)

  const provider = new GoogleAuthProvider();

  const navigate = useNavigate()


    const [singinEmail,setSinginEmail]=useState("")
    const [ token]=useToken(singinEmail)

    if(token){
      navigate('/dashboard')
    }
 
  const handleGoogleLogin =() =>{

    googleProvider(provider)
    .then((res) => {
      const user = res.user
      console.log(user)

      const information = {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
      };

       //get token 
       setSinginEmail(user?.email)

      //save info database
      saveuserInfo(information)
   
    })
    .catch(e => console.log(e))

  }
 
  return (

    <div className='w-full mx-0 lg:px-28 xl:px-28'>
        
         <button onClick={handleGoogleLogin} className='my-5 googleSignInButton'> Sign In With Google
         </button>

    </div>

  );

};

export default GoogleSignIn;