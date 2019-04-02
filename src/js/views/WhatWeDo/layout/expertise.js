import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import { getCopy } from '~lib/copyDefaults'
import Section from '~layout/Section'
import Typography from '~layout/Typography'

import ExpertiseBody from './expertiseBody'
import InPageLink from '~layout/Link/InPageLink'

export default class Expertise extends React.Component {
  render () {
    const copy = getCopy('expertise')
    const links = []
    const body = []

    copy.body.forEach((category, i) => {
      links.push(<InPageLink key={i} copy={category} color='secondary' />)
      body.push(<ExpertiseBody key={i} copy={category} />)
    })

    return (
      <Section section='expertise'>
        <Row>
          <Col
            lg={3}
            lgOffset={1}
            md={3}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
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
