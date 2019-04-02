import React from 'react'
import classNames from 'classnames'

export default ({
  iconName,
  color = 'primary',
  classN,
  orientation,
  variant,
  onClose
}) => {
  return (
    <i
      className={classNames(
        iconName,
        `icon icon-${iconName}`,
        `color-${color}`,
        classN,
        orientation,
        variant
      )}
      onClick={onClose}
    />
  )
}
