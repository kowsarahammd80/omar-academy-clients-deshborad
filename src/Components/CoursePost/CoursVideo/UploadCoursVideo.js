import React, { useState } from "react";
import axios from "axios";

function UploadCoursVideo({ data }) {
  console.log(data._id + "this is upload video");

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
        `http://localhost:5000/coursvideo`,
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
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="py-10">
            <div className=" block">
              <input
                type="text"
                className="input input-bordered input-info w-full mt-8 mb-3 "
                placeholder="Chapter  Name"
                onChange={handleCourseName}
              />
              <br />
              <input type="file" multiple onChange={handleFileUpload} />
            </div>
            <button className="btn  m-auto block my-4" onClick={uploadFiles}>
              Upload
            </button>
            {progress > 0 && <p>Uploading: {progress}%</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadCoursVideo;
