import React, { useState } from "react";
import axios from "axios";

const UploadCoursVideo = ({ data }) => {
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

    const formData = new FormData();

    for (let i = 0; i < videos.length; i++) {
      formData.append("videos", videos[i]);
    }

    formData.append("chapterName", chapterName);
    formData.append("courseId", data?._id);

    axios
      .post("http://localhost:5000/coursvideo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: handleUploadProgress,
      })
      .then((response) => {
        console.log(response.data);
        // handle success
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="chapterName"
          name="chapterName"
          value={chapterName}
          onChange={handlechapterNameChange}
        />
      </div>
      <div>
        <label htmlFor="videos">Videos:</label>
        <input
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
          style={{ width: `${uploadProgress}%`, backgroundColor: "green" }}
          aria-valuenow={uploadProgress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {uploadProgress}%
        </div>
      </div>
      <button type="submit">Upload Videos</button>
    </form>
  );
};

export default UploadCoursVideo;
