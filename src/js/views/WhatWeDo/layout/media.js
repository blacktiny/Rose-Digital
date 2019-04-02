import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Masonry from 'react-masonry-css'

import { getCopy } from '~lib/copyDefaults'
import Section from '~layout/Section'
import Title from '~layout/Title'

import PropTypes from 'prop-types'
import MediaPreview from '~layout/Post/MediaPreview'

export default class Media extends React.Component {
  render () {
    const copy = getCopy('media')
    const { visibleMediaBlocks } = this.props

    const mediaPieces = copy.media.map((mediaContent, i) => {
      return (
        i < visibleMediaBlocks && (
          <MediaPreview key={i} content={mediaContent} color='what-we-do' />
        )
      )
    })

    const breakptColumns = {
      default: 3,
      1100: 2,
      700: 2,
      500: 1
    }

    return (
      <Section section='media'>
        <Row>
          <Col
            lg={4}
            lgOffset={1}
            md={6}
            mdOffset={1}
            sm={11}
            smOffset={1}
            xs={11}
            xsOffset={1}
          >
            <Title title={copy.header} noHighlight classN='media-header' />
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
      </Section>
    )
  }
}

Media.propTypes = {
  visibleMediaBlocks: PropTypes.number.isRequired
}
