import React from 'react'
import classNames from 'classnames'

import MenuItem from './MenuItem'
import MenuContactItem from './MenuContactItem'

import { connect } from 'react-redux'
import { headerSelector } from '../../../../redux/selectors/headerSelector'

const mapStateToProps = state => ({
  header: headerSelector(state),
})

@connect(mapStateToProps)
export default class DropdownMenu extends React.PureComponent {
  render() {
    const { header } = this.props
    const content = header.header
    const { show, onMenuClick } = this.props
    let contactInfo = null
    let menuItems = null
    if (content) {
      const contactInfos = content.navigation_items.filter(
        item => item.has_social_icons
      )
      contactInfo = contactInfos[0]
      menuItems = content.navigation_items.filter(
        item => !item.has_social_icons
      )
      contactInfo.accentColor = contactInfo.accent_color
      contactInfo.hasSocialIcons = contactInfo.has_social_icons
    } else {
      contactInfo = this.props.contactInfo
      menuItems = this.props.menuItems
    }

    return (
      <div
        className={classNames('header-dropdown', { show })}
        onClick={() => onMenuClick()}
      >
        {menuItems.map((section, i) => {
          section.accentColor = section.accent_color
          return (
            <MenuItem
              {...section}
              key={`dropdown-item-${i}`}
              onMenuClick={onMenuClick}
            />
          )
        })}
        <MenuContactItem {...contactInfo} />
      </div>
    )
  }
}
