import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Typography from '~layout/Typography'
import IconTemplate from '~layout/Misc/IconTemplate'
import Copyright from './Copyright'
import Link from '~layout/Link'
import { getCopy } from '~lib/copyDefaults'

export default class FooterBottom extends React.Component {
  render () {
    const copy = getCopy('footer')

    return (
      <Row className='footer-bottom'>
        <Col
          lg={3}
          lgOffset={1}
          md={4}
          mdOffset={1}
          sm={5}
          smOffset={1}
          xs={2}
          xsOffset={1}
          className='left-side-footer'
        >
          <Link variant='path' link='/'>
            <img className='rose-logo' src={copy.logo} alt='Rose Logo' />
          </Link>
          <Copyright classN='hide-mobile' color='white' style='body1' />
        </Col>
        <Col
          lg={2}
          lgOffset={5}
          md={3}
          mdOffset={3}
          sm={3}
          smOffset={2}
          xs={5}
          xsOffset={3}
          className='chat-now'
        >
          <Typography color='white' variant='subheader'>
            {copy.chat}
            <IconTemplate iconName='chat' variant='large' color='about' />
          </Typography>
        </Col>
      </Row>
    )
  }
}
