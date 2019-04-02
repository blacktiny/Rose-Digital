import React from 'react'

import './style.scss'

const linkedinLink = 'https://www.linkedin.com/company/rosedigitalco/'
const twitterLink = 'https://twitter.com/rosedigitalco'
const fbLink = 'https://www.facebook.com/rosedigital.co/'

export default ({ small }) => (
  <div className="blog-share-icons">
    <div className="share-title">share</div>
    <a href={twitterLink}>
      <i className='social-icon twitter icon' />
    </a>
    <a href={fbLink}>
      <i className='social-icon facebook icon' />
    </a>
    <a href={linkedinLink}>
      <i className='social-icon linkedin icon' />
    </a>
  </div>
)
