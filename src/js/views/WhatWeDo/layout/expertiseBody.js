import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Typography from '~layout/Typography'

export default class ExpertiseBody extends React.Component {
  render () {
    const { copy } = this.props
    const bulletContainer = copy.bulletList && (
      <Typography variant='ul' classN='bullet-container'>
        {copy.bulletList.map((bullet, i) => {
          return (
            <Typography key={i} variant='li'>
              {bullet}
            </Typography>
          )
        })}
      </Typography>
    )

    return (
      <Fragment>
        <span className='anchor' id={copy.linkID} />
        <Typography variant='subtitle' classN={copy.style}>
          {copy.header}
        </Typography>
        <Typography>{copy.body}</Typography>
        {bulletContainer}
      </Fragment>
    )
  }
}

ExpertiseBody.propTypes = {
  copy: PropTypes.object.isRequired
}
