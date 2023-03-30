import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AdminAvatar from "../../Components/AdminAvatar/AdminAvatar";
import { AuthContext } from "../../Components/Auth/AuthProvider/AuthProvider";
import "./SideNav.css";

const SideNav = () => {
   
  const { logOut } = useContext(AuthContext)

  const logOutAdmin = () => {

    logOut()
    .then(() => {})
    .catch(e => console.error(e))
    
  }

  return (

    <div className="">

      <ul className="ml-10 mt-6">

        {/* Admin Avatar */}

        <AdminAvatar/>

        <li className="mt-5 mb-5 text-xl font-bold">

          <Link to="/dashboard" className="hover:text-blue-500">
            
            Dashboard

          </Link>

        </li>

        <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">

          <Link to="/allUser"> All User </Link>

        </li>

        <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">

          <Link> Student </Link>

        </li>

        <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">

          <Link to="/academicCours"> Academy Cours </Link>

        </li>

        <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">

          <Link> Job Preparation </Link>

        </li>

        <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">

          <Link> Admission Test </Link>

        </li>

        <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">

          <Link> Book Store </Link>

        </li>

        <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">

          <Link> Question Bank </Link>

        </li>

        <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">

          <Link to="/coursePost/academicours"> Course View </Link>

        </li>

        <button onClick={logOutAdmin} className="bg-red-500 mt-10 px-5 py-1 text-white font-semibold mb-5"> Log Out </button>
        
      </ul>

    </div>

  );

};

export default SideNav;
