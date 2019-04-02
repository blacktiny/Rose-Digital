import React from 'react'
import classNames from 'classnames'
import { HashLink as Link } from 'react-router-hash-link'
import Typography from '~layout/Typography'

import './style.scss'

/* copy.path = is the path for a different page then you currently are on
   add key 'path' to CopyDefault or CMS  */

export default ({
  type = 'main',
  color = 'default',
  children,
  classN,
  copy,
  style
}) => (
  <Typography style={style}>
    <Link
      className={classNames('link', 'in-page-link', type, color, classN)}
      to={copy.path ? `${copy.path}#${copy.linkID}` : `#${copy.linkID}`}
    >
      {copy.link}
    </Link>
  </Typography>
)
