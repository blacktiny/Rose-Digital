import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

import Section from '~layout/Section'
import Typography from '~layout/Typography'

export default class Bio extends React.Component {
  render () {
    const { person } = this.props

    return (
      <Section section='bio' noMargin>
        <Row>
          <Col
            lg={3}
            lgOffset={1}
            md={3}
            mdOffset={1}
            sm={7}
            smOffset={1}
            xsOffset={1}
            xs={8}
          >
            <div
              style={{
                backgroundImage: `url(${person.img})`
              }}
              alt='leadership-pic'
              className='leadership-pic'
            />
            <Typography variant='subtitle' color='about'>
              {person.name}
            </Typography>
            <div className='leadership-title'>
              {person.title.map((title, i) => {
                return (
                  <Typography color='secondary' key={i}>
                    {title}
                  </Typography>
                )
              })}
            </div>
          </Col>
          <Col
            lg={7}
            lgOffset={0}
            md={7}
            mdOffset={0}
            sm={6}
            smOffset={1}
            xsOffset={1}
            xs={10}
          >
            <Typography>{person.body}</Typography>
          </Col>
        </Row>
      </Section>
    )
  }
}

Bio.propTypes = {
  person: PropTypes.object.isRequired
}
