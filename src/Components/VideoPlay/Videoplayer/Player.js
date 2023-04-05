import React from "react";


const Player = ({ selectedVideo }) => {
  return (
    <div className=" w-full  ">
      <video className="border-8  border-blue-400 "
        autoPlay
        src={`http://localhost:5000${selectedVideo.url}`}
        controls
      />
    </div>
  );
};

export default Player;
