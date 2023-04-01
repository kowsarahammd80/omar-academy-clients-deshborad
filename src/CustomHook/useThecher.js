import { useEffect, useState } from "react"

const useThecher=(email)=>{
   const[isThecher,setISthecher]=useState(null)
   console.log(isThecher + " yesr or not ")

    const[thecherloading,setThecherLoading]=useState(true)

   useEffect(()=>{

      fetch(`http://localhost:5000/user/thecher/${email}`)
      .then(res=>res.json())
      .then(data=>{
        setISthecher(data.isThecher)
        setThecherLoading(false)
        
      })

    },[email]) 

  return[isThecher,thecherloading]
}




export default useThecher