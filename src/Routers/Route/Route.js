import { createBrowserRouter } from "react-router-dom";
import AddThecher from "../../Components/AddThecher/AddThecher";
import DisplayThecher from "../../Components/AddThecher/DisplayThecher";
import Alladmin from "../../Components/AdminAvatar/GetallAdmin/Alladmin";
import Sign from "../../Components/User/Sign/Sign";
import SignUp from "../../Components/User/SignUp/SignUp";
import Users from "../../Components/Users/Users";
import UserLayot from "../../Components/Users/UsersLayot/UserLayot";
import Wellcome from "../../Components/Wellcome/Wellcome";
import Main from "../../Layout/Main/Main";
import AdminRoute from "../PrivateRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import GetThecherCors from "../../Components/ThecherCours/Show-cours/GetThecherCors";
import ThecherCoursDashbord from "../../Components/ThecherCours/TheacherCorsDashbord/ThecherCoursDashbord";
import CoursePost from "../../Components/ThecherCours/CoursePost";
import CoursDettails from "../../Components/ThecherCours/Show-cours/CoursCard/CoursDettails";
import BookDhashbord from "../../Components/ThecherCours/ThechersBooks/BookPost/BookDashbord/BookDhashbord";
import BookPost from "../../Components/ThecherCours/ThechersBooks/BookPost/BookPost";
import Showbooks from "../../Components/ThecherCours/ThechersBooks/BookPost/BookDashbord/ShowBook/Showbooks";
import ThecherLayot from "../../Components/AddThecher/ThecherLayot/ThecherLayot";
import QuestionbankDashbord from "../../Components/QuestionBanck/QuestionbankDashbord";
import AllQuestion from "../../Components/QuestionBanck/AllQuestion/AllQuestion";
import Addquestion from "../../Components/QuestionBanck/AddQuestion/Addquestion";

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
            element:<ThecherLayot></ThecherLayot>,
            children:[
              {
                path:"/thecher",
                element:<DisplayThecher></DisplayThecher>
              },
              {
                path:"/thecher/addTeacher",
                element:<AddThecher></AddThecher>
              }
            ]
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
        path: "/thecherdashbord",
        element: <PrivateRoute><ThecherCoursDashbord></ThecherCoursDashbord></PrivateRoute>,
        children: [
          {
            path: "/thecherdashbord",
            element:<GetThecherCors></GetThecherCors> ,
          },
          {
            path: "/thecherdashbord/postcours",
            element:<CoursePost></CoursePost> ,
          },
          {
            path: "/thecherdashbord/coursdettails/:id",
            loader: async ({ params }) =>
              fetch(`http://localhost:5000/cours/${params.id}`),
            element: <CoursDettails></CoursDettails>,
          },
        ],
      },
      {
        path:"/theacherBookDashbord",
        element:<BookDhashbord></BookDhashbord>,
        children:[
          {
            path:"/theacherBookDashbord",
            element:<Showbooks></Showbooks> ,
          },
          {
            path:"/theacherBookDashbord/bookpost",
            element: <BookPost></BookPost>
          }
        ]
      },
      {
        path:"/teacherQuestionbank",
        element:<QuestionbankDashbord></QuestionbankDashbord>,
        children:[
          {
            path:"/teacherQuestionbank",
            element:<AllQuestion></AllQuestion>
          },
          {
            path:"/teacherQuestionbank/addQuestion",
            element:<Addquestion></Addquestion>
          }
        ]
      }
    ],
  },
  
]);

export default routers;
