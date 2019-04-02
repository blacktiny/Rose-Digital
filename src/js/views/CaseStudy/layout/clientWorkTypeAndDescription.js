import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

import Section from '~layout/Section'
import Typography from '~layout/Typography'
import Title from '~layout/Title'
import { getCopy } from '~lib/copyDefaults'

export default class ClientWorkTypeAndDescription extends React.Component {
  render () {
    const { copy } = this.props
    const isMobile = getCopy('window-width').mobileWindowWidth
    const hasMobileTitle = copy.mobileTitle && isMobile
    const skillDescription = copy.skillDescription.map((skill, i) => {
      return (
        <Typography
          key={i}
          variant='body2'
          color='secondary'
          classN='skill-description'
        >
          {skill}
        </Typography>
      )
    })

    return (
      <Section section='client-work-type-and-description'>
        <Row>
          <Col
            lg={10}
            lgOffset={1}
            md={7}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
          >
            <Title title={hasMobileTitle ? copy.mobileTitle : copy.title} />
          </Col>
        </Row>
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
            className='skill-description-container'
          >
            <Typography variant='subheader' classN='skill-description'>
              {copy.workType}
            </Typography>
            {skillDescription}
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
            {copy.body.map((item, index) => (
              <div
                dangerouslySetInnerHTML={{ __html: item.copy }}
                key={index}
              />
            ))}
          </Col>
          {copy.agencyPartner && (
            <Col
              lg={2}
              lgOffset={1}
              md={3}
              mdOffset={1}
              sm={5}
              smOffset={1}
              xs={5}
              xsOffset={1}
            >
              <Typography variant='subheader' classN='agency-partner'>
                {copy.agencyPartner.name}
              </Typography>
              <div
                style={{ content: `url(${copy.agencyPartner.logo})` }}
                alt='agency-logo'
                className='agency-logo'
              />
            </Col>
          )}
        </Row>
      </Section>
    )
  }
}

ClientWorkTypeAndDescription.propTypes = {
  copy: PropTypes.object.isRequired
}
