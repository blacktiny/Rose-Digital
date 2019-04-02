import React from 'react'
import { Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import Typography from '~layout/Typography'

export default class Img9 extends React.Component {
  render () {
    const { image, description } = this.props.copy

    return (
      <Col
        lg={9}
        lgOffset={2}
        md={9}
        mdOffset={2}
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

Img9.propTypes = {
  copy: PropTypes.object.isRequired
}
