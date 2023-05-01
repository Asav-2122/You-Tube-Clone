import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../reducers/chatSlice';
import { generateMsg, generateName } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const messages = useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const interval = setInterval(()=>{
            // console.log("API Polling");
           dispatch(addMessages({
            name:generateName(),
            msg : generateMsg(20),
           }))
        },2000)
        return ()=>{
            clearInterval(interval);
           
        }
    },[])
  return (
    <div className='w-full bg-slate-100 h-[90%] overflow-auto flex flex-col-reverse [&::-webkit-scrollbar]:hidden'>
        {
            messages.map((chat,index)=> <ChatMessages userName={chat.name} userMsg={chat.msg} key={index}/>)
        }
        
    </div>
  )
}

export default LiveChat