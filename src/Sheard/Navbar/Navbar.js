import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
  const navLink = (

      <>
           <li>
                <Link to="/allUser">Users</Link>
            </li>

              <li tabIndex={0}>
                <a className="justify-between">
                  Course Post
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-blue-50">

                  <li>
                    <a> Academy Course Post </a>
                  </li>

                  <li>
                    <a> University Course Post </a>
                  </li>

                </ul>

              </li>

              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-blue-50">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>Item 3</a>
              </li>
        
      </>
      
  )

  return (
    <div className="mx-0 lg:mx-16 md:mx-5 block lg:hidden">
      {/* nav start */}

      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >

              {navLink}
            
            </ul>

          </div>

          <Link to="/" className="btn btn-ghost normal-case text-xl lg:text-2xl text-blue-500"> Omar Academy </Link>

        </div>

        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal px-1 font-semibold">
              
             {navLink}

          </ul>

        </div>

        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>

      </div>

      {/* nav end */}
    </div>
  );
};

export default Navbar;
