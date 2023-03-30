import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/Auth/AuthProvider/AuthProvider';



const PrivateRoute = ({children}) => {
  
  const {user, loading} = useContext(AuthContext)

  const location = useLocation()
 
  
  if(user){

    return children; 

  }


  if(loading){

    return <h1 className='text-center flex items-center'> Loading... </h1>

  }

  
  return <Navigate to='/' state={{from: location}} replace></Navigate>
  
};

export default PrivateRoute;