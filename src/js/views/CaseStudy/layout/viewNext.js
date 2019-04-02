import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

import Section from '~layout/Section'
import Typography from '~layout/Typography'

import Link from '~layout/Link'

export default class ViewNext extends React.Component {
  render () {
    const { copy, next } = this.props

    return (
      <Section section='view-next'>
        <Row>
          <Col
            lg={6}
            lgOffset={5}
            md={8}
            mdOffset={3}
            sm={9}
            smOffset={1}
            xs={9}
            xsOffset={1}
          >
            <Typography variant='header' classN='all-media-link' align='right'>
              <Link
                variant='path'
                link={`${next}`}
                icon='arrow-down'
                iconClass='right'
                iconColor='case-studies'
                color='case-studies'
                size='small'
              >
                {copy.link}
              </Link>
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
            <div className='line-seperator' />
          </Col>
        </Row>
      </Section>
    )
  }
}

ViewNext.propTypes = {
  copy: PropTypes.object.isRequired,
  next: PropTypes.string.isRequired
}
