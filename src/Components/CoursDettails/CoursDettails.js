import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import UploadCoursVideo from "../CoursePost/CoursVideo/UploadCoursVideo";
import Player from "./Videoplayer/Player";

const CoursDettails = () => {
  const coursdettails = useLoaderData();

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
            <button className="btn btn-primary mr-4">Get Started</button>

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
      <div>
        {videos?.map((video) => (
          <Player video={video} key={video._id}></Player>
        ))}
      </div>
    </>
  );
};

export default CoursDettails;
