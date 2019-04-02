import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Masonry from 'react-masonry-css'

import MediaPreview from '~layout/Post/MediaPreview'
import Section from '~layout/Section'
import Typography from '~layout/Typography'
import Link from '~layout/Link'
import Title from '~layout/Title'

import { getCopy } from '~lib/copyDefaults'

export default class WhatWeDo extends React.Component {
  render () {
    const copy = getCopy('mediaHome')

    const mediaPieces = copy.mediaPreview.map((mediaContent, i) => {
      return <MediaPreview key={i} content={mediaContent} color='what-we-do' />
    })

    const breakptColumns = {
      default: 3,
      1100: 2,
      700: 2,
      500: 1
    }

    return (
      <Section section='what-we-do'>
        <Row>
          <Col xs={10} xsOffset={1}>
            <Link type='new' variant='path' link='/what-we-do'>
              <Title
                title={copy.title}
                noHighlight
                icon='new-window'
                iconColor='what-we-do'
              />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col
            lg={10}
            lgOffset={1}
            md={10}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
          >
            <div className='all-media'>
              <Masonry
                breakpointCols={breakptColumns}
                className='masonry'
                columnClassName='masonry-column'
              >
                {mediaPieces}
              </Masonry>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xl={3}
            xlOffset={8}
            lg={4}
            lgOffset={7}
            md={5}
            mdOffset={6}
            sm={10}
            smOffset={1}
            xsOffset={1}
            className='home-header-link'
          >
            <Typography
              variant='header'
              classN='all-media-link left-mobile'
              align='right'
            >
              <Link
                variant='path'
                link={copy.path}
                icon='arrow-down'
                iconClass='right'
                iconColor='what-we-do'
                color='what-we-do'
                size='size16'
              >
                {copy.link}
              </Link>
            </Typography>
          </Col>
        </Row>
      </Section>
    )
  }
}
