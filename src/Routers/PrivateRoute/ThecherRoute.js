import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/Auth/AuthProvider/AuthProvider';
import useThecher from '../../CustomHook/useThecher';




const  ThecherRoute= ({children}) => {
  
  const {user, loading} = useContext(AuthContext)

  const location = useLocation()

   const [isThecher,thecherloading]=useThecher(user?.email)
   
 
  
  if(user && isThecher){
    return children; 
  }
  if(loading && thecherloading){
    return <h1 className='text-center flex items-center'> Loading... </h1>
  }

  
  return <Navigate to='/' state={{from: location}} replace></Navigate>
  
};

export default ThecherRoute;