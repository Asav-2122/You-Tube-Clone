import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    fetch(YOUTUBE_VIDEOS_API)
      .then((res) => res.json())
      .then((res) => setVideos(res.items))
      .catch((error) => console.log(error.message));
    // const data = await fetch(YOUTUBE_VIDEOS_API);
    // const json = await data.json();
    // console.log(json);
  };
  if (videos.length === 0) {
    return null;
  }
  return (
    <div className="flex flex-wrap justify-evenly mt-2">
      {videos.map((ele) => (
        <Link to={"/watch?v=" + ele.id} key={ele.id}>
          <VideoCard videos={ele} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
