import React, { useEffect, useState } from "react";
import CoursCard from "./CoursCard/CoursCard";

const Getacademycours = () => {
  const [Course, setAllcourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getacadmic")
      .then((res) => res.json())
      .then((Data) => {
        setAllcourses(Data);

        console.log(Data);
      });
  }, []);

  return (
    <div className="mt-5 lg:mt-10">
      {/* search input */}

      <div className="flex justify-center">
        <div className="mt-5 mb-10 w-3/4 flex">
          <input
            type="text"
            placeholder="Search your course"
            className="input input-bordered w-96 rounded-none"
          />
          <button className="course-search-button">Search</button>
        </div>
      </div>

      {/* card */}

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-4">
        {Course?.reverse().map((cours) => (
          <CoursCard key={cours._id} cours={cours}></CoursCard>
        ))}
      </div>
    </div>
  );
};

export default Getacademycours;
