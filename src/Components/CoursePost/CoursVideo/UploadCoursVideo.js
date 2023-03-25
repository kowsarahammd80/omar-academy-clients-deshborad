import React, { useState } from "react";
import axios from "axios";

const UploadCoursVideo = ({ coursdettails, refetch }) => {
  const [chapterName, setChapterName] = useState("");
  const [videos, setVideos] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handlechapterNameChange = (e) => {
    setChapterName(e.target.value);
  };

  const handleVideoChange = (e) => {
    setVideos(e.target.files);
  };

  const handleUploadProgress = (event) => {
    const percentCompleted = Math.round((event.loaded * 100) / event.total);
    setUploadProgress(percentCompleted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;

    const formData = new FormData();

    for (let i = 0; i < videos.length; i++) {
      formData.append("videos", videos[i]);
    }

    formData.append("chapterName", chapterName);
    formData.append("courseId", coursdettails?._id);

    axios
      .post("http://localhost:5000/coursvideo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: handleUploadProgress,
      })
      .then((response) => {
        console.log(response.data);
        refetch();
        from.reset();

        // handle success
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  };







  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <label htmlFor="courseName">Chapter Name:</label>
                <input
                  type="text"
                  id="chapterName"
                  name="chapterName"
                  placeholder="capter name "
                  value={chapterName}
                  className="input input-bordered input-info mb-4 w-full max-w-xs"
                  onChange={handlechapterNameChange}
                />
              </div>
              <div className="flex">
                <label htmlFor="videos">Videos:</label>
                <input
                  className="input mb-4  input-info w-full max-w-xs"
                  type="file"
                  id="videos"
                  name="videos"
                  multiple
                  onChange={handleVideoChange}
                />
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${uploadProgress}%`,
                    backgroundColor: "green",
                  }}
                  aria-valuenow={uploadProgress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {uploadProgress}%
                </div>
              </div>

              <div className=" flex justify-end my-4">
                <button type="submit" className="btn mr-3">
                  Upload Videos
                </button>
                <label htmlFor="my-modal" className="btn">
                  close
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCoursVideo;
