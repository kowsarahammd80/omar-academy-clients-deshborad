import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider'

 function AllQuestion() {
 const {user}=useContext(AuthContext)

 console.log(user ,"this is  user")
 const [allquestion,setAllquestion]=useState([])


   useEffect(()=>{
   fetch(`http://localhost:5000/questionbank/owner?email=${user?.email}`)
   .then(res=>res.json())
   .then(data=>{
   setAllquestion(data)
   })
   },[user?.email])
  

  return (
    <div>
        <h1 className='text-center m-auto capitalize text-3xl font-bold'>All question </h1>


        <div  className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                allquestion?.map(question=><div className="card bg-base-100 shadow-xl">
                
                <div className='w-full h-56 p-3 m-auto'>

            <iframe  className='w-full h-full '  src={`http://localhost:5000${question.pdf.url}`} ></iframe>
                </div>

                <div className="card-body">
                  <h2 className="card-title">
                  Question-Type : {question.questiontype}
                    
                  </h2>
                  <p>Subject-Name: {question.subjectname}</p>
                  {
                    question?.classname && <p>ClassName: {question.classname}</p>
                  }
                  
                  
                </div>
              </div>)
            }
        </div>
    </div>
  )
}



export default AllQuestion