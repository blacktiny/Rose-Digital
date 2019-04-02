import React from 'react'
import { Link } from 'react-router-dom'

import Title from '~layout/Title'

import ImagePreview from '../ImagePreview'

import './style.scss'
import { Col, Row } from 'react-flexbox-grid'

export default ({ src, title, subtitle, link }) => (
  <Link to={link ? link : '/news'} className='top-news-preview'>
    <Row>
      <Col className='top-news-preview-image'>
        <ImagePreview src={src} />
      </Col>
      <Col className='top-news-preview-header' >
        <Title noHighlight type='post-title' title={title} subtitle={subtitle} align='type1' />
      </Col>
    </Row>
  </Link>
)
