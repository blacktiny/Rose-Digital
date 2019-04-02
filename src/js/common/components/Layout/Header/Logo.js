import React from 'react'
import Link from '~layout/Link'

export default ({ src, onClick }) => (
  <div onClick={onClick}>
    <Link variant='path' link='/'>
      <img src={src} className='rd-logo' alt='rd-logo' />
    </Link>
  </div>
)
