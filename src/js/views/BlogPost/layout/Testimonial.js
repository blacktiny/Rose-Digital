import React from 'react'

import Typography from '~layout/Typography'

export default ({ testimonial: { content, provider } }) => (
  <div className="testimonial">
    <Typography variant="header" style="content">
      {content}
    </Typography>
    <Typography variant="body2" style="provider">
      {provider}
    </Typography>
  </div>
)