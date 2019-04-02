import React from 'react'
import { Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

import Typography from '~layout/Typography'
import SpanStyleGenerator from '~layout/ParagraphStyling/SpanStyleGenerator'

import '~theme/index.scss'

export default class KeyPerformanceBody extends React.Component {
  getImage () {
    const { kpi } = this.props
    if (kpi) {
      const { image } = kpi
      return (
        image && (
          <img
            className={image.className}
            src={image.url}
            alt={`image of ${image.url}`}
            style={{ width: image.width }}
          />
        )
      )
    } else {
      const copy = this.props.copy
      const { image } = copy
      return (
        image && (
          <img
            className={image.className}
            src={image.image}
            alt={`image of ${image.image}`}
            style={{ width: image.width }}
          />
        )
      )
    }
  }

  getCaption () {
    const { kpi } = this.props
    if (kpi) {
      const labels = kpi.label
      return (
        labels &&
        labels.map((label, index) => (
          <div
            dangerouslySetInnerHTML={{ __html: label }}
            key={index}
            className={index === 1 ? 'typography color-secondary' : ''}
          />
        ))
      )
    } else {
      const copy = this.props.copy
      const { caption } = copy
      return (
        <div>
          {caption.body && (
            <SpanStyleGenerator
              copy={caption}
              classN='key-performance'
              style='body'
            />
          )}
          {caption.secondaryBody && (
            <Typography
              style='body2'
              color='secondary'
              classN='key-performance'
            >
              {caption.secondaryBody}
            </Typography>
          )}
        </div>
      )
    }
  }

  render () {
    const copy = this.props.copy
    const { kpi } = this.props

    return (
      <Col lg={6} md={6} mdOffset={0} className='key-performance'>
        {kpi ? (
          <div dangerouslySetInnerHTML={{ __html: kpi.statistic }} />
        ) : (
          copy.body && (
            <SpanStyleGenerator copy={copy} classN='key-performance' />
          )
        )}
        {this.getImage()}
        {this.getCaption()}
      </Col>
    )
  }
}

KeyPerformanceBody.propTypes = {
  copy: PropTypes.object,
  kpi: PropTypes.object
}
