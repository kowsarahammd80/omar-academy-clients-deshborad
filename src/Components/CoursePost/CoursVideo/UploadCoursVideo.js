import React, { useState } from "react";
import axios from "axios";

function UploadCoursVideo() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [courseName, setCourseName] = useState("");

  const handleFileUpload = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleCourseName = (event) => {
    setCourseName(event.target.value);
  };

  const uploadFiles = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("videos", selectedFiles[i]);
    }
    formData.append("courseName", courseName);
    try {
      const response = await axios.put(
        "http://localhost:5000/coursvideo",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Course Name"
        onChange={handleCourseName}
      />
      <br />
      <input type="file" multiple onChange={handleFileUpload} />
      <button onClick={uploadFiles}>Upload</button>
      {progress > 0 && <p>Uploading: {progress}%</p>}
    </div>
  );
}

export default UploadCoursVideo;
