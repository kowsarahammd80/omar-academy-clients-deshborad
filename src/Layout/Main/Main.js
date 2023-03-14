import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Sheard/Navbar/Navbar";
import './Main.css'

const Main = () => {
  return (
    <div className="max-h-screen">
      <Navbar />

      <div className="container grid grid-cols-3 lg:grid-cols-8 md:grid-cols-5">
        {/* left side  */}

        <div className="hidden max-h-screen lg:block lg:col-span-2 bg-base-100 side-nav overflow-y-auto">

          <ul className="ml-10 mt-6">

            {/* Admin Avatar */}

            <div className="">

              <div className="avatar ml-10">

                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                  <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="admin" />

                </div>

              </div>

              <div className="mt-5 mb-10 ml-5">

                <p className="text-md font-semibold ">Md. Kowsar Ahamed</p>
                <p className="text-sm font-semibold ">example@gmail.com</p>

              </div>

            </div>

            <li className="mt-5 mb-5 text-xl font-bold">
              <Link to="/" className="hover:text-blue-500"> Dashboard </Link>
            </li>

            <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
              <Link to="/allUser"> All User </Link>
            </li>

            <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
              <Link to=""> Student </Link>
            </li>            

            <li className="mt-5 mb-5 text-xl font-semibold hover:text-blue-700">
              <Link to="/academy"> Academy Post </Link>
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

          </ul>

        </div>

        {/* middel side */}

        <div className="col-span-12 lg:col-span-6 mx-0 lg:mx-14">
          <Outlet></Outlet>
        </div>

        {/* left side */}

        {/* <div className="hidden lg:block lg:col-span-2 bg-indigo-50">

          <div className="mx-1">
            <h1 className="text-center text-xl font-semibold"> User List </h1>

            
          </div>

        </div> */}
      </div>

    </div>

  );

};

export default Main;
