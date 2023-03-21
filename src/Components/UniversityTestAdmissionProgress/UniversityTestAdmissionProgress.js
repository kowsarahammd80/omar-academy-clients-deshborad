import React from "react";
import './UniversityTestAdmissionProgress.css'

const UniversityTestAdmissionProgress = () => {

  return (

    <div>

      <div className="card w-100 bg-base-100 shadow-xl mx-5 lg:mx-0 bg-background-uni">

        <div className="card-body ">

          <div className="flex justify-center">

            <div
              className="radial-progress progress-set-uni font-bold"
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

            <h1 className="text-xl font-semibold mt-4 mb-2">University Test Admission</h1>

            <p className="text-md font-bold">120 video</p>

          </div>

        </div>
        
      </div>

    </div>
    
  );

};

export default UniversityTestAdmissionProgress;
