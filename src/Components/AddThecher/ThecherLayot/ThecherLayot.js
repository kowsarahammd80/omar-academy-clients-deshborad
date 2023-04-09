import React from 'react'
import ThecherNav from '../ThecherNav/ThecherNav'
import { Outlet } from 'react-router-dom'

 function ThecherLayot() {
  return (
    <div>
     <ThecherNav></ThecherNav>
       <Outlet></Outlet>
      
    </div>
  )
}
export default ThecherLayot