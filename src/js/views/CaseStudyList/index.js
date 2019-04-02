import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Section from '~layout/Section'
import PropTypes from 'prop-types'
import CaseStudyListContainer from './layout/caseStudyListContainer'

import './layout/style.scss'

export default class CaseStudyList extends React.Component {
  render () {
    const { currentWorkStudy } = this.props

    return (
      <Section section='case-studies-list' noMargin>
        <Row>
          <Col
            xs={10}
            xsOffset={1}
            sm={10}
            smOffset={1}
            md={10}
            mdOffset={1}
            lg={10}
            lgOffset={1}
          >
            <CaseStudyListContainer currentWorkStudy={currentWorkStudy} />
          </Col>
        </Row>
      </Section>
    )
  }
}

CaseStudyList.propTypes = {
  currentWorkStudy: PropTypes.string
}
