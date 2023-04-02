import React from "react";
import { Link } from "react-router-dom";

const CoursPostNav = () => {
  return (
    <div
      className="flex justify-center my-8	 items-center rounded-md shadow-sm"
      role="group"
    >
      <Link to="/thecherdashbord">
        {" "}
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Post Course
        </button>
      </Link>

      <Link to="/thecherdashbord/showTheacherCours">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        >
          Show cours
        </button>
      </Link>
    </div>
  );
};

export default CoursPostNav;
