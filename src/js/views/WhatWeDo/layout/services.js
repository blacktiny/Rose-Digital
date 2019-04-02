import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import { getCopy } from '~lib/copyDefaults'
import Section from '~layout/Section'
import Typography from '~layout/Typography'
import InPageLink from '~layout/Link/InPageLink'

import ServicesBody from './servicesBody'

export default class Services extends React.Component {
  render () {
    const copy = getCopy('services')
    const links = []
    const body = []

    copy.body.forEach((category, i) => {
      links.push(<InPageLink key={i} copy={category} color='secondary' />)
      body.push(<ServicesBody key={i} copy={category} />)
    })

    return (
      <Section section='services' noMargin>
        <Row>
          <Col
            lg={3}
            lgOffset={1}
            md={3}
            mdOffset={1}
            sm={6}
            smOffset={1}
            xs={6}
            xsOffset={1}
          >
            <Typography
              variant='subtitle'
              color='what-we-do'
              classN='small-header'
            >
              {copy.header}
            </Typography>
            {links}
          </Col>
          <Col
            lg={7}
            lgOffset={0}
            md={7}
            mdOffset={0}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
          >
            {body}
          </Col>
        </Row>
      </Section>
    )
  }
}
