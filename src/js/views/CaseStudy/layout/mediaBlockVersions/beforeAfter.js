import React, { Fragment } from 'react'
import { Col } from 'react-flexbox-grid'
import Typography from '~layout/Typography'
import IconTemplate from '~layout/Misc/IconTemplate'
import PropTypes from 'prop-types'

export default class BeforeAfter extends React.Component {
  render () {
    const { body, image } = this.props.copy

    return (
      <Fragment>
        <Col
          lg={2}
          lgOffset={1}
          md={2}
          mdOffset={1}
          sm={10}
          smOffset={1}
          xs={10}
          xsOffset={1}
          className='before-col'
        >
        {
          <Typography align='left' style='md-body' color='accent-lightgray'>
            {
              body ? body[0] : 'before'
            }
          </Typography>
        }
        </Col>
        <Col
          lg={4}
          lgOffset={1}
          md={4}
          mdOffset={1}
          className='hidden-sm hidden-xs arrow-before-after-col'
        >
          <IconTemplate
            iconName='arrow-before-after'
            variant='xxl'
            color='case-studies'
          />
        </Col>
        <Col
          lg={2}
          lgOffset={1}
          md={2}
          mdOffset={1}
          sm={10}
          smOffset={1}
          xs={10}
          xsOffset={1}
          className='hidden-sm hidden-xs after-col'
        >
        {
          <Typography align='right' style='md-body' color='accent-lightgray'>
            {
              body ? body[1] : 'after'
            }
          </Typography>
        }
        </Col>
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
        {
          image &&
            <div
              style={{ content: `url(${image[0]})` }}
              alt='Media inset'
              className='media-inset'
            />
        }
        </Col>
        <Col
          sm={10}
          smOffset={1}
          xs={10}
          xsOffset={1}
          className='hidden-lg hidden-xl hidden-md after-col media-block'
        >
        {
          <Typography align='right' style='md-body' color='accent-lightgray'>
          {
            body ? body[1] : 'after'
          }
          </Typography>
        }
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
        {
          image &&
            <div
              style={{ content: `url(${image[1]})` }}
              alt='Media inset'
              className='media-inset'
            />
        }
        </Col>
      </Fragment>
    )
  }
}

BeforeAfter.propTypes = {
  copy: PropTypes.object.isRequired
}
