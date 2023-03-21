import React, { useState } from "react";

const CoursePost = () => {
   
  const [chapters, setChapter] = useState([])

  const chapterAddHandler = () => {
    const chapterInput = [...chapters, []]
    setChapter(chapterInput)
  }

  const handleCourse = (event) => {
    event.preventDefault()

  }

  const handleChapter = () => {
    
  }

  return (

    <div>
      {/* headline */}

      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-4xl font-semibold">Course Post here</h1>
      </div>

      {/* post input */}

      <div className="mx-5">
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-center ">
              {/* form start */}

              <form onSubmit={handleCourse}>
                <div className="">
                  <p className="text-xl font-semibold">Course Details</p>
                </div>

                <div className="mt-3 mb-2 grid grid-cols-1 lg:grid-cols-2 gap-3">

                  <div>

                    <p className="font-semibold mb-2">Course Type</p>

                     <select className="select select-bordered w-full">

                      <option disabled selected>
                        Please select your course type
                      </option>

                      <option name="Academy course">Academy course</option>

                      <option name="University preparation course">University preparation course</option>

                      <option name="Jop preparation course">Jop preparation course</option>

                     </select>

                  </div>

                  <div>
                    <p className="font-semibold mb-2">Course Name</p>
                    <input
                      type="text"
                      name="courseName"
                      placeholder="Course Name"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Course Image</p>
                    <input
                      type="file"
                      placeholder="Course Image"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <p className="font-semibold text-xl">
                    Course's Teacher's Details
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3 mb-3">
                  <div>
                    <p className="font-semibold mb-2">Teacher's Name</p>

                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Teacher's Image</p>

                    <input
                      type="file"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <p className="font-semibold mb-2">
                      Teacher's Study or institute name
                    </p>

                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                <div className="mt-5 lg:mt-10 mb-5">
                  <h1 className="text-xl font-semibold">
                    What will taught in the course and video lectures
                  </h1>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Introduction"
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    placeholder="Write Some Details"
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    placeholder="Chapter1 Name"
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    placeholder="Write some Details"
                    className="input input-bordered w-full"
                  />

                  
                </div>

                <div>
                  <textarea
                    className="textarea textarea-bordered w-full mt-5"
                    placeholder="write in more details about course"
                  ></textarea>
                </div>

                <div>
                  <h1 className="text-xl font-semibold mt-5 lg:mt-10">
                    Video and chapter count
                  </h1>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                  <input
                    type="number"
                    placeholder="video count "
                    className="input input-bordered w-full"
                  />

                  <input
                    type="number"
                    placeholder="chapter count"
                    className="input input-bordered w-full"
                  />
                </div>

                <button type="submit">Post</button>

                {/*  */}
              </form>

              {/* form end */}
            </div>
          </div>
        </div>
      </div>
     
     <div>

      <button onClick={chapterAddHandler}>Add</button>

              
      {
        chapters.map((c, i) => {
          return (
            <input onChange={(e) => handleChapter(e,i)} type="text" />
          )
        })
      }

     </div>

    </div>
  );
};

export default CoursePost;
