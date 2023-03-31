import { useEffect, useState } from "react"

const useAdmin=(email)=>{
    
 const [isAdmin,setIsAdmin]=useState(false)
 const [adminloading,setAdminloading]=useState(true)
    useEffect(()=>{
     if(email){
        fetch(`http://localhost:5000/user/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
            setIsAdmin(data.isAdmin)
            setAdminloading(false)
        })
     }
    },[email])
    return [ isAdmin, adminloading]

}


export default useAdmin