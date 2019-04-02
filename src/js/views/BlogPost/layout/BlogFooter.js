import React from 'react';

import Typography from '~layout/Typography'
import Link from '~layout/Link'
import BlogShareIcons from '~layout/Misc/BlogShareSocialGroup'

export default () => (
  <div className="blog-footer">
    <BlogShareIcons />
    <Link to='/' color='news'>
      <Typography variant='header' align='left' color='news'>
        next post
      </Typography>
    </Link>
  </div>
)