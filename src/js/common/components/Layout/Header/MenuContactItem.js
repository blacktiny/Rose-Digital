import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import classNames from 'classnames'

import Typography from '~layout/Typography'

import SocialIconGroup from '../Misc/SocialIconGroup'

export default ({
  type,
  title,
  email,
  phoneNumber,
  addressLine1,
  addressLine2,
  ...socialInfo,
  accentColor,
  hasSocialIcons,
  subtitle
}) => (
  <Row className='menu-item'>
    <Col
      smOffset={7}
      xsOffset={7}
      xs={4}
      sm={4}
      className='hidden-xl hidden-lg hidden-md'
    >
      <div className={classNames('menu-indicator', type)} style={{backgroundColor: `${accentColor}`, cursor: 'default'}} />
    </Col>
    <Col
      xlOffset={6}
      lgOffset={6}
      mdOffset={3}
      smOffset={1}
      xsOffset={1}
      xl={4}
      lg={4}
      md={6}
      sm={10}
      xs={10}
    >
      <Typography variant='header' classN='default-cursor'>{title}</Typography>
    </Col>
    <Col xl={1} lg={1} md={2} className='hidden-sm hidden-xs menu-accent'>
      <div className={classNames('menu-indicator', type)} style={{backgroundColor: `${accentColor}`, cursor: 'default'}} />
    </Col>
    <Col
      xlOffset={6}
      lgOffset={6}
      mdOffset={3}
      smOffset={1}
      xsOffset={1}
      xl={4}
      lg={4}
      md={6}
      sm={10}
      xs={10}
    >
      {
        hasSocialIcons ? (
          subtitle.map((title, index) => {
            return (
              <Typography variant={index === 0 ? 'body4' : 'body2'} color='secondary' key={index}>
                {
                  renderTitle(subtitle, index)
                }
              </Typography>
            )
          })
        ) :
        (
          <div>
            <Typography variant='body4' color='secondary'>
              {email}
            </Typography>
            <Typography variant='body2' color='secondary'>
              {phoneNumber}
            </Typography>
            <Typography variant='body2' color='secondary'>
              {addressLine1}
            </Typography>
            <Typography variant='body2' color='secondary'>
              {addressLine2}
            </Typography>
          </div>
        )
      }
      <SocialIconGroup {...socialInfo} size='medium' color='secondary' />
    </Col>
  </Row>
)

const renderTitle = (subtitle, index) => {
  const title = subtitle[index];
  if (index === 0) {
    return (
      <a href={`mailto:${title}?Subject=Hello`} target='_top'>{title}</a>
    )
  } else if (index === 1) {
    return (
      <a href={`tel:${title}`} target='_top'>{title}</a>
    )
  } else if (index === 2 || index === 3) {
    return (
      <a href={`https://maps.google.com/?q=${subtitle[2]} ${subtitle[3]}`} target='_new'>{title}</a>
    )
  }
}
