import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AdminAvatar from "../../Components/AdminAvatar/AdminAvatar";
import { AuthContext } from "../../Components/Auth/AuthProvider/AuthProvider";
import useAdmin from "../../CustomHook/useAdmin";
import useThecher from "../../CustomHook/useThecher";
import "./SideNav.css";

const SideNav = () => {
   
  const { logOut ,  user} = useContext(AuthContext)

  const logOutAdmin = () => {

    logOut()
    .then(() => {})
    .catch(e => console.error(e))
    
  }


 const [isAdmin]=useAdmin(user?.email)
 const [isThecher]=useThecher(user?.email)


 console.log(isThecher)



  return (
    <div className="">
      <ul className="ml-10 mt-6">
        {/* Admin Avatar */}

        <AdminAvatar />

        {isAdmin && (
          <>
            <li className="mt-5 mb-5 text-xl font-bold">
              <Link to="/dashboard" className="hover:text-blue-500">
                Dashboard
              </Link>
            </li>

            <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
              <Link to="/allusers">Users</Link>
            </li>

            <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
              <Link> Student </Link>
            </li>
            <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
              <Link to="/thecher"> Thecher </Link>
            </li>

            <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700"></li>

            <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
              <Link to="/adminDashbord/course">Course</Link>
            </li>
            <Link to="/adminDashbord/books">
              <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
                Book Store
              </li>
            </Link>
            <Link to="/adminDashbord/questionbank">
              <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
                Question Bank
              </li>
            </Link>
          </>
        )}

        {isThecher && (
          <>
            <Link to="/thecherdashbord">
              <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
                Courses
              </li>{" "}
            </Link>
            <Link to="/theacherBookDashbord">
              {" "}
              <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
                Books
              </li>
            </Link>
            <Link to="/teacherQuestionbank">
              {" "}
              <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
                Question-Bank
              </li>
            </Link>
          </>
        )}

        <button
          onClick={logOutAdmin}
          className="bg-red-500 mt-10 px-5 py-1 text-white font-semibold mb-5"
        >
          {" "}
          Log Out{" "}
        </button>
      </ul>
    </div>
  );

};

export default SideNav;
