import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import classNames from 'classnames'

import Typography from '~layout/Typography'

export default ({ type, title, subtitle, link, accentColor, onMenuClick }) => (
  <Row className='menu-item'>
    <Col
      smOffset={7}
      xsOffset={7}
      xs={4}
      sm={4}
      className='hidden-xl hidden-lg hidden-md'
      onClick={() => onMenuClick(link)}
    >
      <div className={classNames('menu-indicator', type)} style={{backgroundColor: `${accentColor}`}} />
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
      onClick={() => onMenuClick(link)}
    >
      <Typography variant='header'>{title}</Typography>
    </Col>
    <Col
      xl={1}
      lg={1}
      md={2}
      className='hidden-sm hidden-xs menu-accent'
      onClick={() => onMenuClick(link)}
    >
      <div className={classNames('menu-indicator', type)} style={{backgroundColor: `${accentColor}`}} />
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
      <Typography variant='body2' color='secondary'>
        {subtitle}
      </Typography>
    </Col>
  </Row>
)
