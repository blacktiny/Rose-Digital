import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import IconTemplate from '../Misc/IconTemplate'

import './style.scss'

export default ({
  link,
  type = 'main',
  color,
  children,
  icon,
  iconClass,
  iconColor = 'default',
  classN,
  size = 'small',
  variant = 'default'
}) =>
  variant === 'default' ? (
    <a
      className={classNames('link', type, `color-${color}`, classN)}
      href={link}
    >
      {children}
      {icon && (
        <IconTemplate iconName={icon} variant={size} color={iconColor} />
      )}
    </a>
  ) : (
    <Link
      to={link}
      className={classNames('link', type, `color-${color}`, classN)}
    >
      {children}
      {icon && (
        <IconTemplate
          iconName={icon}
          variant={size}
          color={iconColor}
          classN={iconClass}
        />
      )}
    </Link>
  )
