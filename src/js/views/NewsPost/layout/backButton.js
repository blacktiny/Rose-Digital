import React from 'react'

import IconTemplate from '~layout/Misc/IconTemplate'
import Link from '~layout/Link'

export default () => (
  <Link variant='path' type='none' link={`/news`} iconColor='news'>
    <IconTemplate
      iconName='arrow-down'
      variant='medium'
      color='news'
      classN={'icon left prev-icon'}
    />
  </Link>
)
