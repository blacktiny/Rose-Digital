import React from 'react'

import HamburgerIcon from '~assets/UIAssets/hamburger_menu.svg'

export default ({ onClick }) => (
  <div onClick={onClick}>
    <img src={HamburgerIcon} className='nav-icon' alt='hamburger_icon' />
  </div>
)
