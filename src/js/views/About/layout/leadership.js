import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Bio from './bio'
import Section from '~layout/Section'
import Typography from '~layout/Typography'
import { getCopy } from '~lib/copyDefaults'

export default class Leadership extends React.Component {
  render () {
    const copy = getCopy('leadership')

    const bios = copy.people.map((person, i) => {
      return <Bio key={i} person={person} />
    })

    return (
      <Section section='leadership'>
        <Row>
          <Col lg={3} lgOffset={1} xsOffset={1} xs={11}>
            <Typography
              variant='subtitle'
              color='about'
              classN='leadership-header'
            >
              {copy.header}
            </Typography>
          </Col>
        </Row>
        {bios}
      </Section>
    )
  }
}
