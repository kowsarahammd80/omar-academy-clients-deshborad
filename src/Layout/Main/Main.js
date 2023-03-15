import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Sheard/Navbar/Navbar";
import './Main.css'
import SideNav from "../../Sheard/SideNav/SideNav"

const Main = () => {
  return (
    <div className="max-h-screen">
      <Navbar />

      <div className="container grid grid-cols-3 lg:grid-cols-8 md:grid-cols-5">
        {/* left side  */}

        <div className="hidden max-h-screen lg:block lg:col-span-2 bg-base-100 side-nav overflow-y-auto sticky top-0">
            
            <SideNav/>
          
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
