import React from 'react'

import './style.scss'

export default ({ img }) => (
  <div className='blog-post-header'>
    <img className='header-image' src={img} alt='blog_header_image' />
  </div>
)
