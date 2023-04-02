import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Player from "../../../VideoPlay/Videoplayer/Player";
import PlayerList from "../../../VideoPlay/Videoplayer/PlayerList";
import UploadCoursVideo from "../../CoursVideo/UploadCoursVideo";


const CoursDettails = () => {
  const coursdettails = useLoaderData();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  ///get cours video
  const { data: videos = [],refetch} = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/coursvideo/${coursdettails._id}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
<div > 
<div>
<img 
className="flex justify-center items-center"
  src={coursdettails?.coursThumnil}
  class="h-auto max-w-full m-auto"
  alt="..." />
</div>

  <div className="flex justify-center items-center mt-3">
    <h2 className="mr-3 text-lg capitalize">courseName:{coursdettails?.courseName} </h2>
    <label htmlFor="my-modal" className="btn">
              Upload-Video
            </label>
  </div>

  <div>
          <UploadCoursVideo
            coursdettails={coursdettails}
            refetch={refetch}
          ></UploadCoursVideo>
        
      </div> 
</div>

     

      <div className="flex flex justify-between  flex-col lg:flex-row  xl:flex-row items-center my-20">
        <div className="xl:w-1/2 lg:w-1/2 w-full  h-[500px] ">
          {selectedVideo && <Player selectedVideo={selectedVideo}></Player>}
        </div>

        <div className="xl:w-1/2 lg:w-1/2 w-full  mx-2  h-[500px]  ">
        <h1 className="text-xl capitalize font-bold">Cours Video</h1>
    
         {videos?.map((video, index) => (
        <PlayerList
          chapter={video}
          index={index}
          handleVideoClick={handleVideoClick}
          key={video._id}
          selectedVideo={selectedVideo}
        ></PlayerList>
      ))}
    

        </div>
      </div>
    </>
  );
};

export default CoursDettails;
