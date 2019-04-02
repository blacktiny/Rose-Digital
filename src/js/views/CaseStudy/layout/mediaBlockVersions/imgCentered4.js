import React from 'react'
import { Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import Typography from '~layout/Typography'

export default class ImgCentered4 extends React.Component {
  render () {
    const { image, description } = this.props.copy

    return (
      <Col
        lg={4}
        lgOffset={4}
        md={4}
        mdOffset={4}
        sm={10}
        smOffset={1}
        xs={10}
        xsOffset={1}
      >
        <div
          style={{ content: `url(${image})` }}
          alt='Media inset'
          className='media-inset'
        />
        {description && (
          <Typography align='right' style='body3' color='secondary'>
            {description}
          </Typography>
        )}
      </Col>
    )
  }
}

ImgCentered4.propTypes = {
  copy: PropTypes.object.isRequired
}
