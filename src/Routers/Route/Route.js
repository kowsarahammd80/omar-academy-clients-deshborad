import { createBrowserRouter } from "react-router-dom";
import AcademiDashbord from "../../Components/AcademyCours/AcademeyDashbord/AcademiDashbord";
import CoursePost from "../../Components/AcademyCours/CoursePost";
import CoursDettails from "../../Components/AcademyCours/Show-cours/CoursCard/CoursDettails";
import Getacademycours from "../../Components/AcademyCours/Show-cours/Getacademycours";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Sign from "../../Components/User/Sign/Sign";
import SignUp from "../../Components/User/SignUp/SignUp";
import Users from "../../Components/Users/Users";
import Main from "../../Layout/Main/Main";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
        path: "/allUser",
        element: <Users />,
      },

      {
        path: "/academicCours",
        element: <AcademiDashbord></AcademiDashbord>,
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
      
      {
        path: "/signUp",
        element: <SignUp/>
      },

      {
        path: "/signIn",
        element: <Sign/>
      }
      
    ],
  },
]);

export default routers;
