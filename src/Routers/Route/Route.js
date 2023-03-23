import { createBrowserRouter } from "react-router-dom";
import AcademyPost from "../../Components/AcademyPost/AcademyPost";
import CoursDettails from "../../Components/CoursDettails/CoursDettails";
import CoursePost from "../../Components/CoursePost/CoursePost";
import UploadCoursVideo from "../../Components/CoursePost/CoursVideo/UploadCoursVideo";
import Getacademycours from "../../Components/CoursePost/Show-cours/Getacademycours";
import Dashboard from "../../Components/Dashboard/Dashboard";
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
        path: "/academy",
        element: <AcademyPost></AcademyPost>,
      },

      {
        path: "/coursePost",
        element: <CoursePost />,
      },

      {
        path: "/coursePost/academicours",
        element: <Getacademycours></Getacademycours>,
      },
      {
        path: "/coursePost/academicours/video",
        element: <UploadCoursVideo></UploadCoursVideo>,
      },
      {
        path: "/coursdettails/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/singleCourse/${params.id}`),
        element: <CoursDettails></CoursDettails>,
      },
    ],
  },
]);

export default routers;
