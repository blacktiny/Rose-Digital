import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import { getCopy } from '~lib/copyDefaults'
import Section from '~layout/Section'
import Link from '~layout/Link'
import Typography from '~layout/Typography'

export default class JoinOurTeam extends React.Component {
  render () {
    const copy = getCopy('joinOurTeam')

    return (
      <Section section='join-our-team'>
        <Row>
          <Col lg={3} lgOffset={1} md={3} mdOffset={1} xsOffset={1} xs={10}>
            <Typography variant='subtitle' color='about' classN='small-header'>
              {copy.header}
            </Typography>
          </Col>
          <Col lg={7} lgOffset={0} md={7} mdOffset={0} xsOffset={1} xs={10}>
            <Typography>
              {copy.body.text}
              <Link classN='link-underline' link={copy.url}>
                {copy.body.link}
              </Link>
              <Link
                type='new'
                color='about'
                link={copy.url}
                icon='new-window'
                iconColor='about'
              />
            </Typography>
          </Col>
        </Row>
      </Section>
    )
  }
}
