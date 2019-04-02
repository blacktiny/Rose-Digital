import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

import Section from '~layout/Section'
import Typography from '~layout/Typography'
import KeyPerformanceBody from './keyPerformanceBody'

export default class KeyPerformance extends React.Component {
  render () {
    const { copy, title, kpis } = this.props
    const body = kpis ?
      kpis.map((kpi, i) => {
        return <KeyPerformanceBody key={i} kpi={kpi} />
      })
      : copy.body.map((span, i) => {
        return <KeyPerformanceBody key={i} copy={span} />
      })

    return (
      <Section section='key-performance'>
        <Row>
          <Col
            lg={9}
            lgOffset={1}
            md={6}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
          >
            <Typography
              variant='subheader'
              color='case-studies'
              classN='key-performance'
            >
              {title}
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col
            lg={10}
            lgOffset={1}
            md={10}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
          >
            <Row>{body}</Row>
          </Col>
        </Row>
      </Section>
    )
  }
}

KeyPerformance.propTypes = {
  copy: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}
