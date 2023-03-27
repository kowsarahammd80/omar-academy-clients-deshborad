import { createBrowserRouter } from "react-router-dom";
import AcademiDashbord from "../../Components/AcademyCours/AcademeyDashbord/AcademiDashbord";
import CoursePost from "../../Components/AcademyCours/CoursePost";
import UploadCoursVideo from "../../Components/AcademyCours/CoursVideo/UploadCoursVideo";
import Getacademycours from "../../Components/AcademyCours/Show-cours/Getacademycours";
import Dashboard from "../../Components/Dashboard/Dashboard";
import CoursDettails from "../../Components/GetAcademycours/CoursDettails";
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
        ],
      },
      {
        path: "/coursdettails/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/academic/${params.id}`),
        element: <CoursDettails></CoursDettails>,
      },
    ],
  },
]);

export default routers;
