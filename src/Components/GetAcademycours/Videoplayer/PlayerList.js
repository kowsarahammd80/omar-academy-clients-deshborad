import { useState } from "react";

const PlayerList = ({ selectedVideo, chapter, handleVideoClick }) => {
  const { chapterName, videos } = chapter;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex justify-between items-center bg-gray-200 p-4 cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="font-bold capitalize ">
          Chapter name: <span className="text-xl">{chapterName}</span>
        </h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="p-4">
          {videos?.map((video, i) => (
            <p
              key={video._id}
              className={`cursor-pointer  capitalize  text-lg font-semibold ${
                selectedVideo === video ? "text-blue-400 active" : "text-black"
              }`}
              onClick={() => handleVideoClick(video)}
            >
              <span>{i + 1}:</span> {video.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayerList;
