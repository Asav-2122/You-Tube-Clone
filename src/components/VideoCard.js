import React from "react";

const VideoCard = ({ videos }) => {
  const { snippet, statistics } = videos;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-[350px] max-w-sm  rounded-lg shadow dark:bg-gray-800  mt-5 h-72">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-[50%]"
          src={thumbnails.high.url}
          alt="thumbnail"
        />
      </a>
      <div className="p-2">
        <a href="#">
          <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 flex gap-1">
          {channelTitle}
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
        <p>{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
