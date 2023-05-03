import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const SearchQueryVideos = () => {
  const [searchParams] = useSearchParams();
  const [vidoes, setVideos] = useState([]);

  useEffect(() => {
    getSearchQueryVideos();
  }, [searchParams]);

  const getSearchQueryVideos = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchParams.get(
        "search_query"
      )}&type=video&key=AIzaSyBf1gRfctpW9UxLB5Xx1uQSDzKU5ye8f2U`
    )
      .then((res) => res.json())
      .then((res) => setVideos(res.items))
      .catch((error) => console.log(error));
  };
  if (vidoes.length === 0) {
    return null;
  }
  return (
    <div className="ml-3">
      {vidoes.map((ele) => (
        <Link to={"/watch?v=" + ele.id.videoId} key={ele.id.videoId}>
        <div
          className="w-[80vw] rounded-lg shadow dark:bg-gray-800  mt-5 h-56 flex hover:cursor-pointer"
          key={ele?.id?.videoId}
        >
          <img
            className="rounded-lg w-[50%] h-full"
            src={ele?.snippet?.thumbnails?.high?.url}
            alt="thumbnail"
          />

          <div className="p-2 flex flex-col gap-1">
            <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">
              {ele?.snippet?.title}
            </h5>
            <div>
              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 flex gap-1">
                {ele?.snippet?.channelTitle}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mt-[0.5px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p>{moment(ele?.snippet?.publishTime, "YYYYMMDD").fromNow()}</p>
              <p>{ele?.snippet?.description}</p>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchQueryVideos;
