import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Player from "../../../Components/VideoPlay/Videoplayer/Player";
import PlayerList from "../../../Components/VideoPlay/Videoplayer/PlayerList";

function Dettaills() {
  const courseDettails = useLoaderData();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = video => {
    setSelectedVideo(video);
  };
  ///get course video
  const { data: videos = [], refetch } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/coursvideo/${courseDettails._id}`
      );
      const data = await res.json();
      return data;
    }
  });

  return (
    <div className="py-32 capitalize">
      <div className="flex justify-center items-center   ">
        <div className="h-60">
          <img
            className="rounded-md h-full"
            src={courseDettails.coursThumnil}
            alt=""
          />
        </div>
        <div className="p-3">
          <h1>
            course-Name: <span>{courseDettails?.courseName}</span>
          </h1>
          <div class="flex items-center space-x-4">
            <img
              class="w-20 h-20 object-cover rounded-full"
              src={courseDettails.techerImg}
              alt=""
            />
            <div class="font-medium dark:text-white">
              <div>Teacher: {courseDettails.ThecherName}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Education: {courseDettails.ThecherEducation}
              </div>
            </div>
          </div>
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
    </div>
  );
}

export default Dettaills;
