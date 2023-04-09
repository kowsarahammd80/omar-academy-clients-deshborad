import React from 'react'
import { Link } from 'react-router-dom'

 function ThecherNav() {
  return (
     
<div class="flex justify-center items-center my-4 rounded-md shadow-sm">


   <Link to="/thecher">
   <a href="#" aria-current="page" class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    All Teacher
  </a>
   </Link>


<Link to="/thecher/addTeacher"><a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
     Add Teacher
  </a></Link>
  
  
</div>

  )
}
export default ThecherNav