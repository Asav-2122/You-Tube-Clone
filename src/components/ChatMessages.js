import React from 'react'

const ChatMessages = ({userName,userMsg}) => {
  return (
    <div className='flex items-center p-2'>
        <img src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user-image' className='w-6'/>
        <span className='mx-1 font-bold text-sm'>{userName}</span>
        <span>{userMsg}</span>
    </div>
  )
}

export default ChatMessages