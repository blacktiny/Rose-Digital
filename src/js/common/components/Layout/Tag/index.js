import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import IconTemplate from '~layout/Misc/IconTemplate'

import './style.scss'

export default class Tag extends React.Component {
  onTagClicked = name => {
    const { onTagClicked } = this.props

    if (onTagClicked) {
      onTagClicked(name)
    }
  };

  onCloseClicked = name => {
    const { onClose } = this.props

    onClose(name)
  };

  render () {
    let { name, color, backColor, classN, active } = this.props
    if (!color) color = 'white'
    if (!backColor) backColor = 'white'
    if (!active) active = false
    return (
      <button
        className={classNames(
          classN,
          'tag',
          `tag-color-${color}`,
          `tag-back-color-${backColor}`,
          backColor === 'white' ? 'tag-second-style' : ''
        )}
        onClick={() => this.onTagClicked(name)}
      >
        <span className={classNames('tag-name', `tag-color-${color}`)}>
          {name}
        </span>
        {active && (
          <IconTemplate
            iconName='close-menu'
            variant={'small'}
            color={color}
            classN={'post-tag'}
            onClose={() => this.onCloseClicked(name)}
          />
        )}
      </button>
    )
  }
}

Tag.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  backColor: PropTypes.string,
  classN: PropTypes.string,
  active: PropTypes.bool,
  onClose: PropTypes.func,
  onTagClicked: PropTypes.func
}
