import React from 'react'
import classNames from 'classnames'

import Typography from '../Typography'
import IconTemplate from '~layout/Misc/IconTemplate'

import './style.scss'

export default ({
  type = 'primary',
  align = 'default',
  icon,
  title,
  subtitle,
  accent = '',
  color = 'default',
  noHighlight,
  classN,
  subtitleClass,
  iconColor
}) => {
  let variant =
    type === 'secondary'
      ? 'subheader'
      : type === 'post-title'
        ? 'post-title'
        : 'header'

  return (
    <div
      className={classNames(classN, 'title', type, `align-${align}`, accent, {
        noHighlight
      })}
    >
      {subtitle && align === 'type1' && (
        <Typography
          variant='subheader'
          color='accent-lightgray'
          subtitleClass={subtitleClass}
        >
          {subtitle}
        </Typography>
      )}
      <Typography variant={variant} color={color}>
        {title}
        {icon && (
          <IconTemplate iconName={icon} variant='small' color={iconColor} />
        )}
      </Typography>
      {subtitle && align !== 'type1' && (
        <Typography
          variant='subheader'
          color='accent-lightgray'
          subtitleClass={subtitleClass}
        >
          {subtitle}
        </Typography>
      )}
    </div>
  )
}
