import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import { getCopy } from '~lib/copyDefaults'
import SpanStyleGenerator from '~layout/ParagraphStyling/SpanStyleGenerator'
import Section from '~layout/Section'
import Typography from '~layout/Typography'

export default class HowWeDoIt extends React.Component {
  render () {
    const copy = getCopy('how')

    return (
      <Section section='how-we-do-it'>
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
              classN='small-header '
            >
              {copy.header}
            </Typography>
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
            <SpanStyleGenerator copy={copy} />
          </Col>
        </Row>
      </Section>
    )
  }
}
