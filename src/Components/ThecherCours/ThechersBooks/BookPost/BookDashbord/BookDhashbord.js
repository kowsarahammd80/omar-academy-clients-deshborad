import React from 'react'
import BookNav from '../../BookNav/BookNav'
import { Outlet } from 'react-router-dom'

 function BookDhashbord() {
  return (
    <div> 
        <BookNav></BookNav>
        <Outlet></Outlet>

    </div>
  )
}

export default BookDhashbord
