import React from 'react'

import VideoPreview from '~layout/Post/VideoPreview'

import './style.scss'

export default ({ type, src, classN }) =>
  type === 'video' ? (
    <VideoPreview src={src} classN='hero-media' />
  ) : (
    <div
      style={{ backgroundImage: `url(${src})` }}
      alt='Hero Image'
      className='hero-media'
    />
  )
