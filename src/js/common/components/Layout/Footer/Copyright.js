import React from 'react'

import Typography from '~layout/Typography'
import { getCopy } from '~lib/copyDefaults'

export default class Copyright extends React.Component {
  render () {
    const { color = 'secondary', classN, style } = this.props
    const copy = getCopy('footer')

    return (
      <Typography color={color} classN={classN} style={style}>
        {copy.copyRight}
      </Typography>
    )
  }
}
