import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div className="">
      <ul className="ml-10 mt-6">
        {/* Admin Avatar */}

        <div className="">
          <div className="avatar ml-10">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                alt="admin"
              />
            </div>
          </div>

          <div className="mt-5 mb-10 ml-5">
            <p className="text-md font-semibold ">Md. Kowsar Ahamed</p>
            <p className="text-sm font-semibold ">example@gmail.com</p>
          </div>
        </div>

        <li className="mt-5 mb-5 text-xl font-bold">
          <Link to="/" className="hover:text-blue-500">
            {" "}
            Dashboard{" "}
          </Link>
        </li>

        <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
          <Link to="/allUser"> All User </Link>
        </li>

        <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
          <Link to=""> Student </Link>
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
      </ul>
    </div>
  );
};

export default SideNav;
