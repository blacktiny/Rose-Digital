import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton
} from 'react-share'

import IconTemplate from '~layout/Misc/IconTemplate'
import { Link } from 'react-router-dom'

export default class NextPost extends React.Component {
  render () {
    const { nextPostURL, title } = this.props
    const copy = 'next post'
    const size = 'large'
    const color = 'news'

    return (
      <div>
        <Row>
          <Col
            lg={5}
            lgOffset={1}
            md={5}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
            className='social-link-section'
          >
            <a className={classNames('share-social', `color-${color}`)}>
              share
            </a>
            <TwitterShareButton
              url={window.location.href}
              className='social-link'
              title={title}
              via={window.location.href}
            >
              <IconTemplate
                iconName='social-twitter'
                variant={size}
                color={color}
              />
            </TwitterShareButton>
            <FacebookShareButton
              url={window.location.href}
              className='social-link'
              quote={title}
            >
              <IconTemplate
                iconName='social-facebook'
                variant={size}
                color={color}
              />
            </FacebookShareButton>
            <LinkedinShareButton
              url={window.location.href}
              className='social-link'
              title={title}
            >
              <IconTemplate
                iconName='social-linkedin'
                variant={size}
                color={color}
              />
            </LinkedinShareButton>
          </Col>
          {nextPostURL && (
            <Col lg={5} md={5} sm={11} xs={11}>
              <Link
                to={`/news${nextPostURL}`}
                className={classNames('link', 'next-post', `color-${color}`)}
              >
                {copy}
                <IconTemplate
                  iconName='arrow-down'
                  variant='small'
                  color='news'
                  classN={'icon right'}
                />
              </Link>
            </Col>
          )}
        </Row>
        <div className='next-post-sep' />
      </div>
    )
  }
}

NextPost.propTypes = {
  nextPostURL: PropTypes.string,
  title: PropTypes.string
}
