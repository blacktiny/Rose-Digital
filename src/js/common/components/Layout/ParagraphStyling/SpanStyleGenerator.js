import React from 'react'
import PropTypes from 'prop-types'
import Typography from '~layout/Typography'

import './style.scss'

export default class SpanStyleGenerator extends React.Component {
  render () {
    const { copy, align, classSpan, classN } = this.props

    const spans = copy.caption ?
      copy.caption.map((span, i) => {
        return <div dangerouslySetInnerHTML={{ __html: span }} key={i} />
      })
      : copy.body.map((span, i) => {
        return (
          <Typography
            variant='span'
            key={i}
            style={span.style}
            color={span.color}
            classN={classSpan}
          >
            {span.copy}
          </Typography>
        )
      })

    return (
      <Typography align={align} style={copy.style} classN={classN}>
        {spans}
      </Typography>
    )
  }
}

SpanStyleGenerator.propTypes = {
  copy: PropTypes.object.isRequired
}
