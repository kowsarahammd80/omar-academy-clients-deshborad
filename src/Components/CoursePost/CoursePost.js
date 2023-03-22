import React, { useState } from "react";

const CoursePost = () => {
  const [chapters, setChapters] = useState([{ name: "", details: "" }]);

  //handleimage
  const [coursimg, setCoursImg] = useState();
  const [thecherimg, setTexherImg] = useState();

  ///cours img
  const handleCourseImg = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("image", img);
    const url =
      "https://api.imgbb.com/1/upload?key=1378f6494e6b39ad2fd39769a2d2ffef";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const img = imgData.data.url;
        setCoursImg(img);
      })
      .catch((e) => {
        alert("internet  problem");
      });
  };
  const handleThecherImg = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("image", img);
    const url =
      "https://api.imgbb.com/1/upload?key=1378f6494e6b39ad2fd39769a2d2ffef";

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const img = imgData.data.url;
        setTexherImg(img);
      })
      .catch((e) => {
        alert("internet  problem");
      });
  };

  const handleChapterNameChange = (index, event) => {
    const newChapters = [...chapters];
    newChapters[index].name = event.target.value;
    setChapters(newChapters);
  };

  const handleChapterDetailsChange = (index, event) => {
    const newChapters = [...chapters];
    newChapters[index].details = event.target.value;
    setChapters(newChapters);
  };

  const handleAddChapter = () => {
    setChapters([...chapters, { name: "", details: "" }]);
  };

  ///key point add
  const [keyPoint, setKeypoint] = useState([{ name: "" }]);

  const handleKeypoint = () => {
    setKeypoint([...keyPoint, { name: "", details: "" }]);
  };

  const handleKeypointName = (index, event) => {
    const newkeyPoint = [...keyPoint];
    newkeyPoint[index].name = event.target.value;
    setKeypoint(newkeyPoint);
  };

  const handleCourse = (event) => {
    event.preventDefault();

    const from = event.target;
    const courseName = from.courseName.value;
    const ThecherEducation = from.ThecherEducation.value;
    const aboutCours = from.aboutCours.value;
    const ThecherName = from.ThecherName.value;
    const videoQuantity = from.videoqty.value;
    const chapterQuantity = from.chapterqty.value;

    const cours = {
      courseName,
      coursThumnil: coursimg,
      ThecherName,
      videolecture: chapters,
      keyPoint: keyPoint,
      aboutCours,
      techerImg: thecherimg,
      ThecherEducation,
      aboutCours,
      videoQuantity,
      chapterQuantity,
    };
    console.log(cours);

    fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cours),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
                      onChange={handleCourseImg}
                      accept="image/*"
                      type="file"
                      name="image"
                      id="image"
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
                      name="ThecherName"
                      placeholder="Type here"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <p className="font-semibold mb-2">Teacher's Image</p>

                    <input
                      onChange={handleThecherImg}
                      accept="image/*"
                      type="file"
                      name="image"
                      id="image"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <p className="font-semibold mb-2">
                      Teacher's Study or institute name
                    </p>

                    <input
                      type="text"
                      name="ThecherEducation"
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

                <div>
                  {keyPoint.map((keyp, index) => (
                    <div key={index}>
                      <label>
                        key point name:
                        <input
                          type="text"
                          value={keyp.name}
                          onChange={(event) => handleKeypointName(index, event)}
                        />
                      </label>
                    </div>
                  ))}
                  <button type="button" onClick={handleKeypoint}>
                    Add key point
                  </button>
                </div>

                <div>
                  <textarea
                    name="aboutCours"
                    className="textarea textarea-bordered w-full mt-5"
                    placeholder="write in more details about course"
                  ></textarea>
                </div>

                <div>
                  <h1 className="text-xl font-semibold mt-5 lg:mt-10">
                    Video and chapter count
                  </h1>
                </div>
                <div>
                  {chapters.map((chapter, index) => (
                    <div key={index}>
                      <label>
                        Chapter {index + 1} name:
                        <input
                          type="text"
                          value={chapter.name}
                          onChange={(event) =>
                            handleChapterNameChange(index, event)
                          }
                        />
                      </label>
                      <label>
                        Chapter {index + 1} details:
                        <textarea
                          value={chapter.details}
                          onChange={(event) =>
                            handleChapterDetailsChange(index, event)
                          }
                        />
                      </label>
                    </div>
                  ))}
                  <button type="button" onClick={handleAddChapter}>
                    Add chapter
                  </button>
                </div>

                <div>
                  <h1 className="text-xl font-semibold mt-5 lg:mt-10">
                    Video and chapter count
                  </h1>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">
                  <input
                    type="number"
                    name="videoqty"
                    placeholder="video Quantity "
                    className="input input-bordered w-full"
                  />

                  <input
                    type="number"
                    placeholder="chapter  Quantity "
                    name="chapterqty"
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
    </div>
  );
};

export default CoursePost;
