import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video
  // SAME WITH => {video}

  const imageURL = video.snippet.thumbnails.default.url
  const title = video.snippet.title

  return (
    <li onClick={() => onVideoSelect(video)} className='lst-group-item'>
      <div className='video-list-media'>
        <div className='media-left'>
          <img className='media-object' src={imageURL} alt={title} />
        </div>

        <div className='media-body'>
          <div className='media-heading'>
            {title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem
