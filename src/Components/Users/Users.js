import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import Confirmation from "../../Sheard/ConfirmationModal/Confirmation";
import User from "./User";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";

const Users = () => {
  const {logOut,user}=useContext(AuthContext)
    
   const [deletinguser,setDeletinguser]=useState(null)
  
   //close modal 
   const closemodal=()=>{
    setDeletinguser(null)
   }



   //delet  user
   const  deletUser=user=>{
     fetch(`http://localhost:5000/deletuser/${user?._id}`,{
      method:"DELETE",
      headers:{
        authorization:`bearer ${localStorage.getItem("accessToken")}`
      }
     })
     .then(res=>res.json())
     .then(data=>{
     console.log(data)
     if(data.deletedCount >0){
      toast.success(`${user?.name} Deleted succesfully`)
      refetch()
     }
     })

   }
     
 


   //get all users data

  const { data: alluser = [], isLoading, isError, error, refetch } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/alluser`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data.filter(users => users.email !== user?.email);
    },
    onError: (err) => {
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        logOut();
      }
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }






//make  admin 
   const makeAdmin=(id)=>{
      fetch(`http://localhost:5000/user/admin/${id}`,{
        method:"PUT",
        headers:{
          authorization:`bearer ${localStorage.getItem("accessToken")}`
        }

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        refetch()
        if(data.acknowledge){
          toast.success("make admin succefully")
        }
      })

   }
 

  return (
    <div>
      {/* headline */}
      <div className="text-center font-bold">
        <h1 className="text-2xl lg:text-4xl mt-5 mb-5 lg:mt-10 lg:mb-8">
          {" "}
          User List{" "}
        </h1>
      </div>

      {/* user list  */}

      <div>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">

            {/* head */}

            <thead>

              <tr>
                <th>
                  image
                </th>

                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
         
                 <th>Admin</th>
                 <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {
  alluser?.map(user=> <User makeAdmin={makeAdmin} setDeletinguser={setDeletinguser}  key={user._id} user={user}> </User>)
 }
               
              
            </tbody>
            {/* foot */}
          
          </table>
        </div>
      </div>

 {
  deletinguser && <Confirmation 
  closemodal={ closemodal}
   title={"Are you sure you  want  to delete ?? "}
    img={deletinguser.photoURL}
   msg={`If you want to delete  ${deletinguser.name} it cannot be undone` }
    successAction={deletUser}
    modalData={deletinguser}

  ></Confirmation>
 }

    </div>
  );
};

export default Users;
