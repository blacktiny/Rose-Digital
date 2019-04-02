import React from 'react'
import ReactPlayer from 'react-player'

export default ({ src, classN }) => (
  <div className={`video-wrapper ${classN}`}>
    <ReactPlayer
      url={src}
      playing
      loop
      controls={false}
      muted
      volumn={0}
      width='100%'
      height='100%'
    />
  </div>
)
