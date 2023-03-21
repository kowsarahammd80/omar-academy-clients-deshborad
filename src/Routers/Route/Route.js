import { createBrowserRouter } from "react-router-dom";
import AcademyPost from "../../Components/AcademyPost/AcademyPost";
import CoursePost from "../../Components/CoursePost/CoursePost";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Users from "../../Components/Users/Users";
import Main from "../../Layout/Main/Main";


 const routers = createBrowserRouter([
    
   {

     path: '/',
     element: <Main></Main>,
     children: [

      {
        path: '/',
        element: <Dashboard/>
      },
       
      {
        path: '/allUser',
        element: <Users/>
      },

      {
        path:'/academy',
        element: <AcademyPost></AcademyPost>
      },

      {
        path: "/coursePost",
        element: <CoursePost/>
      }
      
     ]

   }
   
 ])

 export default routers;