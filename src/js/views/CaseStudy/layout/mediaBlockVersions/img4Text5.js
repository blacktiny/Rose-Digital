import React, { Fragment } from 'react'
import { Col } from 'react-flexbox-grid'
import SpanStyleGenerator from '~layout/ParagraphStyling/SpanStyleGenerator'
import PropTypes from 'prop-types'
import Typography from '~layout/Typography'

export default class Img4Text5 extends React.Component {
  render () {
    const copy = this.props.copy
    const hideMobile = (
      <Col
        lg={5}
        lgOffset={0}
        md={5}
        mdOffset={0}
        className='hidden-sm hidden-xs'
      >
        <SpanStyleGenerator copy={copy} />
      </Col>
    )
    const showMobile = (
      <Col
        className='hidden-xl hidden-lg hidden-md'
        sm={10}
        smOffset={1}
        xs={10}
        xsOffset={1}
      >
        <SpanStyleGenerator copy={copy} />
      </Col>
    )

    return (
      <Fragment>
        {showMobile}
        <Col
          lg={4}
          lgOffset={1}
          md={4}
          mdOffset={1}
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
            <Typography align='right' style='body3' color='secondary' variant='inner'>
              {copy.description}
            </Typography>
          )}
        </Col>
        {hideMobile}
      </Fragment>
    )
  }
}

Img4Text5.propTypes = {
  copy: PropTypes.object.isRequired
}
