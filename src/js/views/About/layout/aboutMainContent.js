import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { getCopy } from '~lib/copyDefaults'
import SpanStyleGenerator from '~layout/ParagraphStyling/SpanStyleGenerator'

import Section from '~layout/Section'
import Typography from '~layout/Typography'
import Title from '~layout/Title'

export default class AboutMainContent extends React.Component {
  render () {
    const copy = getCopy('about')
    const paragraphs = copy.rose.paragraphs.map((paragraph, i) => {
      return <SpanStyleGenerator key={i} copy={paragraph} />
    })

    return (
      <Section section='main-content'>
        <Row>
          <Col
            lg={3}
            lgOffset={1}
            md={5}
            mdOffset={1}
            sm={6}
            smOffset={1}
            xs={11}
            xsOffset={1}
          >
            <Title title={copy.header} />
          </Col>
        </Row>
        <Row>
          <Col
            lg={3}
            lgOffset={1}
            md={3}
            mdOffset={1}
            sm={7}
            smOffset={1}
            xs={11}
            xsOffset={1}
          >
            <Typography variant='subtitle' color='about' classN='small-header'>
              {copy.rose.header}
            </Typography>
          </Col>
          <Col
            lg={7}
            lgOffset={0}
            md={7}
            mdOffset={0}
            sm={6}
            smOffset={1}
            xs={10}
            xsOffset={1}
          >
            {paragraphs}
          </Col>
        </Row>
      </Section>
    )
  }
}
