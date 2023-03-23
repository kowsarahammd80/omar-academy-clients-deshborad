import React from "react";
import { Link } from "react-router-dom";

const CoursCard = ({ cours }) => {
  const { coursThumnil, courseName, _id } = cours;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={coursThumnil} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {courseName}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            <Link to={`/coursdettails/${_id}`}>
              <button>see-Dettails</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursCard;
