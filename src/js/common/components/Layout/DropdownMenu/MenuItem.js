import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './styles.scss'

export default class MenuItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      statusItem: 'normal',
      defaultColor: 'default'
    }
  }

  onItemClick = () => {
    const { onItemSelected } = this.props

    onItemSelected()
  }

  render () {
    let { defaultColor } = this.state
    const { itemName, color, classN, selected, menuItemStyle } = this.props

    if (color) {
      defaultColor = color
    }

    return (
      <div
        className={classNames(
          menuItemStyle === 'default' ? 'menuItem' : 'menuItem-second',
          classN
        )}
        onClick={() => this.onItemClick()}
      >
        {menuItemStyle === 'default' && selected && (
          <div
            className={classNames(
              'item-selected-mark',
              `back-color-${defaultColor}`
            )}
          />
        )}
        {menuItemStyle === 'default' && (
          <div className='item-content'>
            {!selected && <div className={'item-content-selection'} />}
            <div
              className={
                selected ? `color-${defaultColor}` : 'item-content-name'
              }
            >
              {itemName}
            </div>
          </div>
        )}
        {menuItemStyle !== 'default' && (
          <div className='item-content'>
            <div className={selected ? 'item-selected' : 'item-content-name'}>
              {itemName}
            </div>
            {!selected && <div className='item-content-space' />}
          </div>
        )}
        {menuItemStyle !== 'default' && selected && (
          <div
            className={classNames('item-selected-mark', `back-color-white`)}
          />
        )}
      </div>
    )
  }
}

MenuItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  color: PropTypes.string,
  onItemSelected: PropTypes.func.isRequired,
  classN: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  menuItemStyle: PropTypes.string
}
