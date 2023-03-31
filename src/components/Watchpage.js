import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeSideBar } from '../reducers/sidebarSlice';
import RecommendedVideos from './RecommendedVideos';

const Watchpage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [videoDetails,setVideoDetails] = useState([]);
    useEffect(()=>{
       dispatch(closeSideBar())
       getVideoById()
    },[])
    const getVideoById =()=>{
       fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+searchParams.get("v")+"&key=AIzaSyBf1gRfctpW9UxLB5Xx1uQSDzKU5ye8f2U").then((res)=>res.json()).then((res)=>setVideoDetails(res.items)).catch((error)=>console.log(error))
    }

  return (
    <div className='text-center mt-8 ml-6 flex'>
       <div>
       <iframe width="780" height="415" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      {
        videoDetails.length>0&& 
        <div className='mt-2 -ml-2 w-[780px]'>
        <h2 className='font-bold text-lg'>{videoDetails[0].snippet.title}</h2>
       </div>
      }
      </div>
      <div className='ml-8'>
       <RecommendedVideos videoId={searchParams.get("v")}/>
       </div>
    </div>
  )
}

export default Watchpage