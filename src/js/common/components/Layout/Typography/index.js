import React from 'react'
import classNames from 'classnames'

import './style.scss'

export default ({
  variant,
  align = 'left',
  color = 'primary',
  children,
  italic,
  style,
  classN,
  ID,
  subtitleClass,
  ...rest
}) => {
  const classes = classNames(
    classN,
    'typography',
    variant,
    align,
    `color-${color}`,
    { italic },
    style,
    subtitleClass
  )
  switch (variant) {
    case 'header':
      return (
        <h1 id={ID} className={classes} {...rest}>
          {children}
        </h1>
      )
    case 'subheader':
      return (
        <h2 id={ID} className={classes} {...rest}>
          {children}
        </h2>
      )
    case 'subtitle':
      return (
        <h2 id={ID} className={classes} {...rest}>
          {children}
        </h2>
      )
    case 'ul':
      return (
        <ul id={ID} className={classes} {...rest}>
          {children}
        </ul>
      )
    case 'li':
      return (
        <li id={ID} className={classes} {...rest}>
          {children}
        </li>
      )
    case 'span':
      return (
        <span id={ID} className={classes} {...rest}>
          {children}
        </span>
      )
    case 'inner':
      return (
        <div id={ID} className={classes} {...rest} dangerouslySetInnerHTML={{ __html: children }} />
      )
    default:
      return (
        <div id={ID} className={classes} {...rest}>
          {children}
        </div>
      )
  }
}
