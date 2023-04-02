import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./CoursePost.css";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";

const CoursePost = () => {
   
  const {user}=useContext(AuthContext)
  
  
  const [chapters, setChapters] = useState([{ name: "", details: "" }]);



  const navigate=useNavigate()
  //heandleImage

  const [coursimg, setCoursImg] = useState();
  const [thecherimg, setTexherImg] = useState();

  ///course img
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

  //type of cours

  const [coursType, setCoursType] = useState('');

  const handleSelectChange = (event) => {
    setCoursType(event.target.value);
  }


 

  const handleCourse = (event) => {
    event.preventDefault();

    const from = event.target;
    const courseName = from.courseName.value;
    const coursPrice=from.price.value
    const ThecherEducation = from.ThecherEducation.value;
    const aboutCours = from.aboutCours.value;
    const ThecherName = from.ThecherName.value;
    const videoQuantity = from.videoqty.value;
    const chapterQuantity = from.chapterqty.value;

    const cours = {
      courseName,
       owner: user?.email,
      coursThumnil: coursimg,
      coursType:coursType,
      coursPrice,
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


    fetch("http://localhost:5000/savecours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cours),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        from.reset()
        toast.success("cours post succesfully",{autoClose:50000})
        navigate("/thecherdashbord/thecherdashbord")
      });
  };

  return (
    <div>
      {/* headline */}

      <div className="text-center mt-10">
        <h1 className="text-2xl lg:text-4xl font-semibold">
            Cours Post
        </h1>
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
                      required
                      name="courseName"
                      placeholder="Course Name"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                
     <p  className="font-semibold pb-2 capitalize text-md"> <label htmlFor="selectOption">Cours Type</label></p>
      <select required className="p-3 select select-bordered w-full max-w-xs" id="selectOption" onChange={handleSelectChange}>
        <option  className="select select-bordered w-full max-w-xs" value="" selected>please select your cours tupe </option>
        <option className="select select-bordered w-full max-w-xs" value="Academic">Academic</option>
        <option className="select select-bordered w-full max-w-xs" value="universityAdmission">University-Test</option>
        <option className="select select-bordered w-full max-w-xs" value="jobpreParetion">Jobs-Preparession</option>

      </select>
     
    </div>

                  <div>
                    <p className="font-semibold mb-2">Course Image</p>
                    <input
                      required
                      onChange={handleCourseImg}
                      accept="image/*"
                      type="file"
                      name="image"
                      id="image"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Course Price</p>
                    <input
                      required
                      placeholder="Taka:5000"
                      name="price"
                      type="number"

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
                      required
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
                      <label className="font-semibold">
                        Subject name:
                        <input
                          type="text"
                          className="input input-bordered w-full mb-3"
                          value={keyp.name}
                          onChange={(event) => handleKeypointName(index, event)}
                        />
                      </label>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleKeypoint}
                    className="add-subject mt-5 mb-2"
                  >
                    Add Subject Name
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
                  <h1 className="text-xl font-semibold mt-5 lg:mt-10 mb-3">
                    Video Lectures Intro
                  </h1>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {chapters.map((chapter, index) => (
                    <div key={index}>
                      <label className="font-semibold">
                        Chapter {index + 1} name:
                        <input
                          type="text"
                          value={chapter.name}
                          className="input input-bordered w-full mb-2"
                          onChange={(event) =>
                            handleChapterNameChange(index, event)
                          }
                        />
                      </label>

                      <label className="font-semibold">
                        Chapter {index + 1} details:
                        <input
                          value={chapter.details}
                          className="input input-bordered w-full"
                          onChange={(event) =>
                            handleChapterDetailsChange(index, event)
                          }
                        />
                      </label>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleAddChapter}
                  className="add-chapter-button mt-5"
                >
                  Add chapter
                </button>

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

                <div className="flex justify-center">
                  <button type="submit" className="academy-post-button mt-6">
                    Post
                  </button>
                </div>

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
