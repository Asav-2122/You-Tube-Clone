import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../reducers/sidebarSlice";
import RecommendedVideos from "./RecommendedVideos";
import LiveChat from "./LiveChat";
import { addMessages } from "../reducers/chatSlice";

const Watchpage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [chatMsg, setChatMsg] = useState("");
  useEffect(() => {
    dispatch(closeSideBar());
    getVideoById();
  }, []);
  const getVideoById = () => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        searchParams.get("v") +
        "&key=AIzaSyBf1gRfctpW9UxLB5Xx1uQSDzKU5ye8f2U"
    )
      .then((res) => res.json())
      .then((res) => setVideoDetails(res.items))
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-8 ml-6 flex justify-around w-full">
      <div>
        <iframe
          width="780"
          height="415"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        {videoDetails.length > 0 && (
          <div className="mt-2 w-[780px]">
            <h2 className="font-bold text-lg">
              {videoDetails[0].snippet.title}
            </h2>
            <div className="flex items-center mt-1 w-full justify-between">
              <div className="flex items-center gap-1">
                <h3 className="text-base">
                  {videoDetails[0].snippet.channelTitle}
                </h3>
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
                <div className="ml-3">
                <button className="bg-black text-white px-2 rounded-lg">
                Subscribe
              </button>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="bg-gray-200 flex ml-3 gap-1 items-center rounded-md px-2">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    ></path>
                  </svg>
                  <span className="font-bold">
                    {videoDetails[0].statistics.likeCount}K
                  </span>
                </button>
                <button className="bg-gray-200 px-2 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                    ></path>
                  </svg>
                </button>
                <button className="bg-gray-200 px-2 rounded-lg flex items-center gap-1">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
                    ></path>
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>
           
           {videoDetails[0].snippet.description && 
           <div className="w-full h-40 overflow-scroll [&::-webkit-scrollbar]:hidden bg-slate-200 my-3 rounded-lg">
              <p className="p-3">{videoDetails[0].snippet.description}</p>
            </div>}
          </div>
        )}
      </div>
      <div className="border border-black h-[415px] w-80">
        <LiveChat />
        <div className="w-full flex gap-1 items-center mt-1 ml-1 h-[8%]">
          <input
            className="bg-white outline-none  rounded-md border border-black"
            placeholder="say something..."
            value={chatMsg}
            onChange={(e) => setChatMsg(e.target.value)}
          />
          <button
            className="bg-slate-200 rounded-md border px-2"
            onClick={() => {
              dispatch(
                addMessages({
                  name: "Aasav",
                  msg: chatMsg,
                })
              ),
                setChatMsg("");
            }}
          >
            Add Message
          </button>
        </div>
      </div>
      {/* <div className='ml-8'>
       <RecommendedVideos videoId={searchParams.get("v")}/>
       </div> */}
    </div>
  );
};

export default Watchpage;
