import React from 'react'
import "../styles/VideoCard.css"
const VideoCard = ({name,image,index}) => {
  return (
    <div className='VideoCard'>
        
        <img src={image} alt = {`Image ${index+1}`} />
        <div className='overlay'>{name}</div>
    </div>
  )
}

export default VideoCard
