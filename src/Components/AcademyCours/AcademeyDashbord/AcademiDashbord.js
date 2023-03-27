import React from "react";
import { Outlet } from "react-router-dom";
import CoursePost from "../CoursePost";
import Academynav from "./AcademyNav/Academynav";

const AcademiDashbord = () => {
  return (
    <div>
      <Academynav></Academynav>
        <Outlet></Outlet>
    
    </div>
  );
};

export default AcademiDashbord;
