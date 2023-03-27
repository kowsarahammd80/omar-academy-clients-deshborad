import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UploadCoursVideo from "../CoursePost/CoursVideo/UploadCoursVideo";
import Player from "./Videoplayer/Player";
import PlayerList from "./Videoplayer/PlayerList";

const CoursDettails = () => {
  const coursdettails = useLoaderData();
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  ///get cours video
  const { data: videos = [], refetch } = useQuery({
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
      {" "}
      <div
        className="py-20 bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${coursdettails?.coursThumnil})` }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {coursdettails?.courseName}
            </h1>
            <p className="mb-5"> {coursdettails?.aboutCours}</p>
            <button className="btn btn-primary mr-4">Manage-Cours</button>

            <label htmlFor="my-modal" className="btn">
              Upload-Video
            </label>
          </div>
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

        <div className="xl:w-1/2 lg:w-1/2 w-full  mx-2  h-[500px] overflow-y-scroll">
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
