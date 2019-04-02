import React from 'react'
import classNames from 'classnames'

import IconTemplate from './IconTemplate'
import './style.scss'

const instagramLink = 'https://www.instagram.com/rosedigitalco/'
const linkedinLink = 'https://www.linkedin.com/company/rosedigitalco/'
const twitterLink = 'https://twitter.com/rosedigitalco'
const fbLink = 'https://www.facebook.com/rosedigital.co/'

export default ({ size, color, isFooter }) => {
  return (
    <div className={classNames('social-icon-group', 'typography', isFooter ? '' : 'body4')}>
      <a href={instagramLink} target='_blank'>
        <IconTemplate iconName='social-instagram' variant={size} color={color} />
      </a>
      <a href={twitterLink} target='_blank'>
        <IconTemplate iconName={isFooter ? 'social-twitter' : 'social-twitter-new'} variant={size} color={color} />
      </a>
      <a href={fbLink} target='_blank'>
        <IconTemplate iconName='social-facebook' variant={size} color={color} />
      </a>
      <a href={linkedinLink} target='_blank'>
        <IconTemplate iconName={isFooter ? 'social-linkedin' : 'social-linkedin-new'} variant={size} color={color} />
      </a>
    </div>
  )
}
