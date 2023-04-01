import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";

const AdminAvatar = () => {

  const {user} = useContext(AuthContext)
const[curentuser,setCurentuser]=useState({})
 
 
///get  login user or  theacher   or admin  
useEffect(()=>{
 fetch(`http://localhost:5000/userinfo?email=${user?.email}`,{
  method:"GET",
  headers:{
    authorization:`bearer${localStorage.getItem("accessToken")}`
  }
 })
 .then(res=>res.json())
 .then(data=>{
  setCurentuser(data)
 })
 },[user.email])


  return (

    <div className="">

          <div className="avatar ml-10">

            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

             {
              curentuser.photoURL?  <img
              src={curentuser?.photoURL}
              alt="profile"
            />: <img
            src="https://i.ibb.co/wSJpnqQ/download.png"
            alt="admin"
          />
             }

            </div>

          </div>

          <div className="mt-5 mb-10 ml-5">

            <p className="text-md font-semibold ">{curentuser.name}</p>
            
            <p className="text-sm font-semibold ">{curentuser?.email}</p>
            {
              curentuser?.role && <p className="text-sm font-semibold "> Role: {curentuser?.role}</p>
            }
            

          </div>
          
        </div>

  );
};

export default AdminAvatar;
