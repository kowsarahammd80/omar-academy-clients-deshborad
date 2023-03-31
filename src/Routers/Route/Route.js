import { createBrowserRouter } from "react-router-dom";
import AcademiDashbord from "../../Components/AcademyCours/AcademeyDashbord/AcademiDashbord";
import CoursePost from "../../Components/AcademyCours/CoursePost";
import CoursDettails from "../../Components/AcademyCours/Show-cours/CoursCard/CoursDettails";
import Getacademycours from "../../Components/AcademyCours/Show-cours/Getacademycours";
import AddThecher from "../../Components/AddThecher/AddThecher";
import DisplayThecher from "../../Components/AddThecher/DisplayThecher";
import Alladmin from "../../Components/AdminAvatar/GetallAdmin/Alladmin";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Sign from "../../Components/User/Sign/Sign";
import SignUp from "../../Components/User/SignUp/SignUp";
import Users from "../../Components/Users/Users";
import UserLayot from "../../Components/Users/UsersLayot/UserLayot";
import Wellcome from "../../Components/Wellcome/Wellcome";
import Main from "../../Layout/Main/Main";
import AdminRoute from "../PrivateRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routers = createBrowserRouter([

  {
    path: "/",
    element: <Sign/>
  },

  {
    path: "/signUp",
    element: <SignUp/>
  },

  

  {
    path: "/",
    element: <PrivateRoute><Main></Main></PrivateRoute>,
    children: [
  
      {
        path: "/dashboard",
        element: <PrivateRoute><Wellcome></Wellcome></PrivateRoute>,
      },
    { 
            path:"/thecher",
            element:<AddThecher></AddThecher>
          },
     {
      path:"/allusers",
      element:<UserLayot></UserLayot>,
      children:[{
        path: "/allusers",
        element:<AdminRoute><Users/></AdminRoute>
      },
      {
        path:"/allusers/thecher",
        element:<DisplayThecher></DisplayThecher>
      },
      {
        path:"/allusers/admin",
        element:<Alladmin></Alladmin>
      }
      
    
    
    ]
     }
        
      ,

      {
        path: "/academicCours",
        element: <PrivateRoute><AcademiDashbord></AcademiDashbord></PrivateRoute>,
        children: [
          {
            path: "/academicCours",
            element: <CoursePost></CoursePost>,
          },
          {
            path: "/academicCours/getacademicCourse",
            element: <Getacademycours></Getacademycours>,
          },
          {
            path: "/academicCours/coursdettails/:id",
            loader: async ({ params }) =>
              fetch(`http://localhost:5000/academic/${params.id}`),
            element: <CoursDettails></CoursDettails>,
          },
        ],
      },
      
     
      
    ],
  },
]);

export default routers;
