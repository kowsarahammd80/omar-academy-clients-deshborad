import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import Confirmation from '../../../Sheard/ConfirmationModal/Confirmation'

export default function Alladmin() {

    const [alladmins,setAlladmin]=useState([])

    const [deletinguser,setDeletinguser]=useState(null)
  
    const closemodal=()=>{
     setDeletinguser(null)
    }
 
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
      
      }
      })
 
    }
      



useEffect(()=>{

   fetch("http://localhost:5000/getalladmin",{
    authorization:`bearer ${localStorage.getItem("accessToken")}`
   })
   .then(res=>res.json())
   .then(data=>{
    setAlladmin(data)
   })

},[alladmins])

  
    return (
        <div>

     <div className='flex justify-center items-center my-11'>
     <h1  className='capitalize text-4xl font-bold'>All  Admin</h1>
     </div>

       <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Contact</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}



          {

        alladmins?.map(admin=>  <tr className='capitalize'>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={admin.photoURL} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{admin?.name}</div>
                
                </div>
              </div>
            </td>
            <td>
               {admin.email}
              <br/>
              <span className="badge badge-ghost badge-sm">{admin?.phonNumbe}</span>
            </td>
            <td>{admin?.role}</td>
            <th>
              
              <label  onClick={()=>setDeletinguser(admin)} htmlFor="confirmation-modal" className="btn  btn-circle btn-outline" >  
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</label> 
            </th>
          </tr>)
       
          }


  
            
           
        
          
          </tbody>
         
          
        </table>
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
  )
}
