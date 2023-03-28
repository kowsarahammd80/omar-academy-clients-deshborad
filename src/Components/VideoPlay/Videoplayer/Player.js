import React from "react";


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
