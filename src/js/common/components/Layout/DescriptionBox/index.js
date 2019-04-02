import React from 'react'

import Title from '~layout/Title'
import Link from '~layout/Link'
import Typography from '~layout/Typography'

import './styles.scss'

export default ({ color, accent, title, sectionTitle, children, path }) => (
  <div className={`desc-box ${color}`}>
    <Link type='new' color='white' link={path} variant='path'>
      <Title type='secondary' title={title} accent={accent} color='white' />
      <Typography color='white'>{children}</Typography>
      <div className='link-box'>
        <Title
          title={sectionTitle}
          icon='new-window'
          iconColor='white'
          noHighlight
        />
      </div>
    </Link>
  </div>
)
