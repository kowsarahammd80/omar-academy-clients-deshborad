import React from 'react';
import './AcademyProgress.css'

const AcademyProgress = () => {


  return (
    <div>
         <div className="card w-100 shadow-xl mx-5 lg:mx-0 bg-progress-set">
        <div className="card-body ">
          <div className="flex justify-center">
            <div
              className="radial-progress progress-set font-bold"
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
            <p className="text-xl w-full font-semibold mt-4 mb-2">Academy </p>

            <p className="text-md font-bold">120 video</p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default AcademyProgress;