import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../Auth/AuthProvider/AuthProvider'
import Sbook from './Sbook'



 function Showbooks() {

   const { user } = useContext(AuthContext);
   
  const [books,setBooks]=useState([])


   useEffect(()=>{
     fetch(`http://localhost:5000/books/owner?email=${user?.email}`)
     .then(res=>res.json())
     .then(data=>{
      setBooks(data)
     })

   },[user?.email]) 

 


  return (
    <div>
        <h1  className='text-center capitalize text-2xl mb-4 font-bold'>All books</h1>
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
 




 <div className='grid grid-cols-1 xl:grid-cols-3 my-8 lg:grid-cols-3 md:grid-cols-2  gap-8'>
 {
    books?.map(book=><Sbook book={book} key={book._id}></Sbook>)
  }
 </div>





    
    </div>
  )
}
export default Showbooks