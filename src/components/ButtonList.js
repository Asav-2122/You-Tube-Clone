import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttonList = ["All","Live","Gaming","News","Sports","Music","Science","Animated films","Cricket","Spritual","Movies"]
  return (
    <div className='flex gap-4 mt-4 ml-7'>
        {
            buttonList.map((ele,index)=><Button content={ele} key={index}/>)
        }
    </div>
  )
}

export default ButtonList