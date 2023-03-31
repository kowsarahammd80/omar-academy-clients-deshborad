import React from 'react'

export default function User({user,makeAdmin,setDeletinguser}) {
  
   const {email
, _id, name,presentDistrict,photoURL,phonNumber
}=user
  
  return (
    <tr>

    <th>

    <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
          
{
  photoURL?  <img
  src={photoURL}
  alt="Avatar Tailwind CSS Component"
/>:<img
              src="https://i.ibb.co/T47bsjy/download.png"
              alt="Avatar Tailwind CSS Component"
            />
}
         </div>
        </div>
     
    </th>

    <td>

      <div className="flex items-center space-x-3">
        

        <div>

          <div className="font-bold">

        <p>{name}</p>
        
        {
          user?.role &&  <p  className='text-sm capitalize'>Role: {user.role}</p>
        }
      

          </div>
         

        </div>

      </div>
    </td>

    <td>
     {email}
       
    </td>

 {
  phonNumber? <td>{phonNumber}</td>:<td>NaN</td>
 }
  
    


  {
    user?.role==="admin"? <th><button className='btn bg-green-600'>Admin</button></th>  :
    <th>
      <button onClick={()=>makeAdmin(_id)}   className="btn">Make-Admin</button>
    </th>
  }

    <th>

    <label  onClick={()=>setDeletinguser(user)}  htmlFor="confirmation-modal" className="btn  btn-circle btn-outline" >  
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</label>


  
    </th>

  </tr>
  )
}
