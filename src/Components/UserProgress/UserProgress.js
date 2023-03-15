import React from "react";

const UserProgress = () => {
  return (
    <div>
      <div className="card w-100 shadow-xl mx-5 lg:mx-16 mb-5 lg:mb-10 bg-blue-100">
        <div className="card-body ">
          <div className="flex justify-center">
            <div
              className="radial-progress text-blue-600 font-bold"
              style={{
                "--value": "70",
                "--size": "12rem",
                "--thickness": "10px",
              }}
            >
              70%
            </div>
          </div>

          {/*  headline */}

          <div className="text-center lg:text-start w-full">
            <h1 className="text-2xl min-w-full font-semibold mt-4 mb-2">
              User
            </h1>

            <p className="text-md font-bold">100 people</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProgress;
