import React from 'react'
import VideoCard from "./VideoCard.js"
import "../styles/Videos.css"
const Videos = ({videos}) => {
  return (
    <div className='Videos'>
       {videos.map((item,index)=>(
        <VideoCard image={item.image} name={item.name} key={item.image} index={index} />
       ))}
    </div>
  )
}

export default Videos
