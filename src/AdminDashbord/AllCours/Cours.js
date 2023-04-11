import React from "react";
import { Link } from "react-router-dom";

function Cours({ course, deletcourse }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="h-40">
        <img src={course.coursThumnil} alt="tumbnil" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Course Name: {course.courseName}</h2>
        <h2 className="card-title">Course Name: {course.coursType}</h2>
        <h1>Price: {course?.coursPrice} Taka </h1>
        <div className="flex justify-between items-center">
          <div className="w-16">
            <img
              className="rounded-full w-full border-blue-700"
              src={course?.owerimg}
            />
          </div>
          <div>
            <h2>owner-Name: {course.ownerName}</h2>
            <h2>owner-Email: {course.owner} </h2>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link to={`/adminDashbord/course/coursdettails/${course._id}`}>
            <button className="btn "> See Details</button>
          </Link>

          <button onClick={() => deletcourse(course._id)} className="btn">
            Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cours;
