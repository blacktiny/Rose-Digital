import React, { Fragment } from 'react'
import { Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import Typography from '~layout/Typography'

export default class Img5Img5 extends React.Component {
  render () {
    const { image, description } = this.props.copy

    return (
      <Fragment>
        <Col
          lg={5}
          lgOffset={1}
          md={5}
          mdOffset={1}
          sm={10}
          smOffset={1}
          xs={10}
          xsOffset={1}
        >
          <div
            style={{ content: `url(${image[0]})` }}
            alt='Media inset'
            className='media-inset'
          />
          {description[0] && (
            <Typography align='right' style='body3' color='secondary' variant='inner'>
              {description}
            </Typography>
          )}
        </Col>
        <Col
          lg={5}
          lgOffset={0}
          md={5}
          mdOffset={0}
          sm={10}
          smOffset={1}
          xs={10}
          xsOffset={1}
        >
          <div
            style={{ content: `url(${image[1]})` }}
            alt='Media inset'
            className='media-inset'
          />
          {description[0] && (
            <Typography align='right' style='body3' color='secondary' variant='inner'>
              {description[1]}
            </Typography>
          )}
        </Col>
      </Fragment>
    )
  }
}

Img5Img5.propTypes = {
  copy: PropTypes.object.isRequired
}
