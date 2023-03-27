import React, { useState, useRef } from "react";

const Player = ({ videos }) => {
  const serverUrl = "http://localhost:5000";
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index);
    setIsLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  const handleNextClick = () => {
    if (selectedVideoIndex < videos.length - 1) {
      setSelectedVideoIndex(selectedVideoIndex + 1);
      setIsLoading(true);
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play();
      }
    }
  };

  const handlePreviousClick = () => {
    if (selectedVideoIndex > 0) {
      setSelectedVideoIndex(selectedVideoIndex - 1);
      setIsLoading(true);
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play();
      }
    }
  };

  const selectedVideo =
    selectedVideoIndex !== null ? videos[selectedVideoIndex] : null;

  return (
    <>
    <div className="flex flex-row">
      <div className="w-1/3 p-4">
        <div className="text-lg font-medium">List of videos:</div>
        <div className="py-2">
          {videos?.map((video, index) => (
            <div
              key={video._id}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => handleVideoClick(index)}
            >
              {video.title}
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="w-2/3 p-4">
        <div className="text-lg font-medium">Video player:</div>
        <div className="py-2">
          {selectedVideo ? (
            <div>
              <div className="mb-2 font-medium">{selectedVideo.title}</div>
              <video
                ref={videoRef}
                src={`${serverUrl}${selectedVideo.url}`}
                controls
                onCanPlay={() => setIsLoading(false)}
                style={{ display: isLoading ? "none" : "block" }}
              ></video>
              {isLoading && <div>Loading...</div>}
            </div>
          ) : (
            <div>Please select a video to play</div>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded px-4 py-2 mr-4"
            onClick={handlePreviousClick}
            disabled={!selectedVideo || selectedVideoIndex === 0}
          >
            Previous
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded px-4 py-2"
            onClick={handleNextClick}
            disabled={
              !selectedVideo || selectedVideoIndex === videos.length - 1
            }
          >
            Next
          </button>
        </div>
      </div>

</>
  );
};

export default Player;