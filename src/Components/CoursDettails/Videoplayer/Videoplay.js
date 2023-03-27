import React, { useRef, useState } from "react";

const Videoplay = ({
  videos,
  selectedVideoIndex,
  isLoading,
  videoRef,
  setSelectedVideoIndex,
  setIsLoading,
}) => {
  const serverUrl = "http://localhost:5000";

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
  console.log(videos);
  return (
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
          disabled={!selectedVideo || selectedVideoIndex === videos.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Videoplay;
