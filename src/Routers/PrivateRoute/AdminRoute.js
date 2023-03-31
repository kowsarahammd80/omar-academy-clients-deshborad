import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/Auth/AuthProvider/AuthProvider';
import useAdmin from '../../CustomHook/useAdmin';



const AdminRoute = ({children}) => {
  
  const {user, loading} = useContext(AuthContext)
   const [isAdmin,adminloading]=useAdmin(user?.email)



  const location = useLocation()
 
  
  if(user && isAdmin){

    return children; 

  }


  if(loading || adminloading){

    return <h1 className='text-center flex items-center'> Loading... </h1>

  }

  
  return <Navigate to='/' state={{from: location}} replace></Navigate>
  
};

export default  AdminRoute;