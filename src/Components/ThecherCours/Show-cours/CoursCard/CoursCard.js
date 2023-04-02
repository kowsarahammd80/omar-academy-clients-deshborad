import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

const CoursCard = ({ cours }) => {
  const { coursThumnil, courseName, _id } = cours;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={coursThumnil}
          alt="Shoes"
          className="w-full object-cover academy-course-image"
        />
      </figure>

      <div className="card-body">
        <h2 className="text-xl "> Cours: {courseName}</h2>
        <div className="card-actions justify-center">
          <Link to={`/thecherdashbord/coursdettails/${_id}`}>
            <button className="academy-see-details-button">See Details</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default CoursCard;
