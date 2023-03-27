import React from "react";
import ReactPlayer from "react-player/youtube";

const Player = ({ selectedVideo }) => {
  return (
    <div className=" w-full h-[500px]">
      <video
        autoPlay
        src={`http://localhost:5000${selectedVideo.url}`}
        controls
      />
    </div>
  );
};

export default Player;
