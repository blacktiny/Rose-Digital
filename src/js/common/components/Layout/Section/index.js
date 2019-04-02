import React from 'react'
import classNames from 'classnames'

import './style.scss'

export default ({ section = 'default', children, classN, noMargin }) => (
  <div
    className={classNames(
      'section',
      `section-${section}`,
      classN,
      noMargin && 'no-margin'
    )}
  >
    {children}
  </div>
)
