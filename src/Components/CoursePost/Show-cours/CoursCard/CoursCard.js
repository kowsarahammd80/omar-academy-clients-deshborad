import React from "react";
import './CourseCard.css'
import { Link } from "react-router-dom";

const CoursCard = ({ cours }) => {
  const { coursThumnil, courseName, _id } = cours;


  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">

      <figure>
        <img src={coursThumnil} alt="Shoes" className="w-full academy-course-image"/>
      </figure>

      <div className="card-body">

        <div className="card-actions justify-center">
          
          <Link to={`/coursdettails/${_id}`}>
            <button className="academy-see-details-button">See Details</button>
          </Link>{" "}
          
        </div>

      </div>

    </div>
  );
};

export default CoursCard;
