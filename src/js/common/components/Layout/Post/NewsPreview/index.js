import React from 'react'
import moment from 'moment'

import Title from '~layout/Title'
import Typography from '~layout/Typography'
import { Link } from 'react-router-dom'

import IconTemplate from '../../Misc/IconTemplate'

import ImagePreview from '../ImagePreview'

import './style.scss'

export default ({ src, title, subtitle, publishDate, link = '/news' }) => (
  <Link to={link} className='news-preview' target='_blank'>
    <div className='news-preview'>
      <ImagePreview src={src} />
      <Title type='post-title' title={title} subtitle={subtitle} align='type1' />
      <Typography color='accent-lightgray' variant='body' classN='bottom-blank'>
        {publishDate && moment(publishDate).format('MMMM D, YYYY')}
        <IconTemplate
          iconName={'new-window'}
          variant={'small'}
          color={'news'}
        />
      </Typography>
    </div>
  </Link>
)
