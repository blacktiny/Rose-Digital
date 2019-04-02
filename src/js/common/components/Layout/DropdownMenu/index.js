import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import SVG from 'react-inlinesvg'

import arrowUpIcon from '~assets/icons/angle-arrow-up.svg'

import MenuItem from './MenuItem'

import './styles.scss'

export default class DropdownMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      statusMenu: 'normal',
      dropdownIsOpen: false,
      defaultColor: 'default'
    }
  }

  onClicked = () => {
    const { statusMenu } = this.state
    if (statusMenu === 'clicked') {
      this.setState({ statusMenu: 'normal', dropdownIsOpen: false })
    } else this.setState({ statusMenu: 'clicked', dropdownIsOpen: true })
  }

  onItemSelected = itemName => {
    const { currentSelectedItems } = this.props
    const { onItemSelected, multiSelection } = this.props
    if (!multiSelection) this.setState({ currentSelectedItem: itemName })
    else {
      let index =
        currentSelectedItems.length !== 0
          ? currentSelectedItems.indexOf(itemName)
          : -1
      if (index > -1) {
        currentSelectedItems.splice(index, 1)
      } else {
        currentSelectedItems.push(itemName)
      }
    }

    onItemSelected(itemName)
  }

  clearFilter = () => {
    const { onItemSelected } = this.props
    onItemSelected('')
  }

  render () {
    let { statusMenu, dropdownIsOpen, defaultColor } = this.state
    const {
      menuName,
      menuItems,
      color,
      multiSelection,
      classN,
      clearButtonShow,
      clearButtonName,
      currentSelectedItem
    } = this.props
    let { currentSelectedItems, menuStyle, menuItemDispType } = this.props

    if (!menuStyle) menuStyle = 'default'
    if (color) defaultColor = color
    if (!currentSelectedItems) currentSelectedItems = []
    if (!menuItemDispType) menuItemDispType = 'default'

    const isTwoColumns = menuItems.length > 6 && menuStyle === 'default'

    const menuContent = menuItems.map((item, i) => {
      let selected = false
      if (!multiSelection && currentSelectedItem === item) {
        selected = true
      } else if (currentSelectedItems.length !== 0) {
        if (multiSelection && currentSelectedItems.indexOf(item) > -1) {
          selected = true
        }
      }
      return (
        <MenuItem
          key={i}
          itemName={item}
          color={color}
          onItemSelected={() => this.onItemSelected(item)}
          classN={isTwoColumns ? 'two-column' : 'one-column'}
          selected={selected}
          menuItemStyle={menuStyle}
        />
      )
    })

    return (
      <div
        className={classNames(
          'dropdown',
          statusMenu === 'clicked' && menuItemDispType !== 'default' ? 'dropdown-multi' : ''
        )}
      >
        {menuStyle === 'default' && (
          <div
            className={statusMenu !== 'clicked' ? 'menu' : 'menu-no-hover'}
            onClick={() => this.onClicked()}
          >
            <div className='menu-header'>
              <div
                className={
                  statusMenu !== 'clicked' && currentSelectedItems.length === 0
                    ? 'menu-name'
                    : classNames('menu-name', `color-${defaultColor}`)
                }
              >
                {menuName}
              </div>
              <SVG
                src={arrowUpIcon}
                className={classNames(
                  statusMenu === 'clicked' ? 'arrow-up' : 'arrow-down',
                  currentSelectedItems.length > 0 ? `color-${defaultColor}` : ''
                )}
                alt='arrow_icon'
              />
            </div>
          </div>
        )}
        {menuStyle !== 'default' && (
          <div
            className={classNames(
              'menu-second',
              statusMenu === 'clicked' || currentSelectedItems.length > 0
                ? `back-color-${defaultColor}`
                : ''
            )}
            onClick={() => this.onClicked()}
          >
            <div
              className={classNames(
                'menu-second-header',
                statusMenu === 'clicked' ? 'menu-second-header-click' : ''
              )}
            >
              <div
                className={
                  statusMenu !== 'clicked' && currentSelectedItems.length === 0
                    ? classNames(
                      'menu-second-header-name',
                      `color-${defaultColor}`
                    )
                    : 'menu-second-header-name'
                }
              >
                {menuName}
              </div>
              <SVG
                src={arrowUpIcon}
                className={classNames(
                  statusMenu === 'clicked' ? 'arrow-up' : 'arrow-down',
                  currentSelectedItems.length > 0 ? `color-white` : ''
                )}
                alt='arrow_icon'
              />
            </div>
          </div>
        )}
        {menuStyle === 'default' && dropdownIsOpen && (
          <div className={classNames('dropdown-content', classN)}>
            <div className='items-section'>{menuContent}</div>
            {clearButtonShow && (
              <button
                className={classNames(
                  'clear-button',
                  `back-color-${defaultColor}`
                )}
                onClick={() => this.clearFilter()}
              >
                {clearButtonName}
              </button>
            )}
          </div>
        )}
        {menuStyle !== 'default' && dropdownIsOpen && (
          <div
            className={classNames(
              'dropdown-content-second',
              statusMenu === 'clicked' && menuItemDispType !== 'default'
                ? 'dropdown-content-second-multi'
                : '',
              classN
            )}
          >
            {clearButtonShow && (
              <button
                className={classNames(
                  'clear-button-mobile',
                  `back-color-${defaultColor}`
                )}
                onClick={() => this.clearFilter()}
              >
                {clearButtonName}
              </button>
            )}
            <div className='items-section'>{menuContent}</div>
          </div>
        )}
      </div>
    )
  }
}

DropdownMenu.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  color: PropTypes.string,
  multiSelection: PropTypes.bool,
  classN: PropTypes.string,
  clearButtonShow: PropTypes.bool,
  clearButtonName: PropTypes.string,
  onItemSelected: PropTypes.func,
  currentSelectedItems: PropTypes.array,
  currentSelectedItem: PropTypes.string,
  menuStyle: PropTypes.string,
  menuItemDispType: PropTypes.string
}
