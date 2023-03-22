import React, { useEffect, useState } from "react";
import CoursCard from "./CoursCard/CoursCard";

const Getacademycours = () => {
  const [Course, setAllcourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getcourse")
      .then((res) => res.json())
      .then((Data) => {
        setAllcourses(Data);

        console.log(Data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-20 p-3 ">
      {Course?.map((cours) => (
        <CoursCard key={cours._id} cours={cours}></CoursCard>
      ))}
    </div>
  );
};

export default Getacademycours;
