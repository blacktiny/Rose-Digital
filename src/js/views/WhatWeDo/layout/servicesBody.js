import React from 'react'
import PropTypes from 'prop-types'

import Section from '~layout/Section'
import Typography from '~layout/Typography'

export default class ServicesBody extends React.Component {
  render () {
    const { copy } = this.props
    const bulletContainer = copy.bulletList.map((bullet, i) => {
      return (
        <Typography key={i} variant='li'>
          {bullet}
        </Typography>
      )
    })

    return (
      <Section section={`service-details ${copy.style}`} noMargin>
        <span className='anchor' id={copy.linkID} />
        <Typography variant='subtitle'>{copy.header}</Typography>
        <Typography variant='ul'>{bulletContainer}</Typography>
      </Section>
    )
  }
}

ServicesBody.propTypes = {
  copy: PropTypes.object.isRequired,
  className: PropTypes.string
}
