import React from "react";
import { Outlet } from "react-router-dom";
import CoursPostNav from "./CoursPostNav/CoursPostNav";



const ThecherCoursDashbord = () => {
  return (
    <div>
      <CoursPostNav></CoursPostNav>
        <Outlet></Outlet>
    
    </div>
  );
};

export default ThecherCoursDashbord;
