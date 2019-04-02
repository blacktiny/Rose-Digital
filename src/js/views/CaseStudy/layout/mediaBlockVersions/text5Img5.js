import React, { Fragment } from 'react'
import { Col } from 'react-flexbox-grid'
import SpanStyleGenerator from '~layout/ParagraphStyling/SpanStyleGenerator'
import PropTypes from 'prop-types'
import Typography from '~layout/Typography'

export default class Text5Img5 extends React.Component {
  render () {
    const copy = this.props.copy

    return (
      <Fragment>
        <Col
          lg={5}
          lgOffset={1}
          md={3}
          mdOffset={1}
          sm={6}
          smOffset={3}
          xs={6}
          xsOffset={3}
        >
          <SpanStyleGenerator copy={copy} align='right' />
        </Col>
        <Col
          lg={5}
          lgOffset={0}
          md={7}
          mdOffset={0}
          sm={10}
          smOffset={1}
          xs={10}
          xsOffset={1}
        >
          <div
            style={{ content: `url(${copy.image})` }}
            alt='Media inset'
            className='media-inset media-block'
          />
          {copy.description && (
            <Typography align='right' style='body3' color='secondary'>
              {copy.description}
            </Typography>
          )}
        </Col>
      </Fragment>
    )
  }
}

Text5Img5.propTypes = {
  copy: PropTypes.object.isRequired
}
