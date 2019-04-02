import React from 'react'
import moment from 'moment'

import Title from '~layout/Title'
import Typography from '~layout/Typography'
import Link from '~layout/Link'

export default ({ content, color }) => (
  <div className='article-preview'>
    <Link type='new' link={content.url}>
      <Title
        noHighlight
        type='secondary'
        align='type1'
        subtitle={content.type}
        title={content.mediaCo}
        color={color}
        classN='no-margin'
      />
      <Typography variant='subheader'>{content.title}</Typography>
    </Link>
    <Typography style={content.style}>
      {content.quote}
      {content.summary}
      {content.date && moment(content.date).format('MMMM D, YYYY')}
      {content.url && (
        <Link
          type='new'
          color={color}
          link={content.url}
          icon='new-window'
          iconColor='what-we-do'
        />
      )}
    </Typography>
  </div>
)
