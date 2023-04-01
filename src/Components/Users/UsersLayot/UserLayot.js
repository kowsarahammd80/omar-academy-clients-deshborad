import React from 'react'
import { Outlet } from 'react-router-dom'
import UsersNav from './UsertsNav/UsersNav'

export default function UserLayot() {
  return (
    <div>
        <UsersNav></UsersNav>
        <Outlet></Outlet> 
       
    </div>
  )
}
