import React from 'react'

import CloseIcon from '~assets/UIAssets/close_menu.svg'

export default ({ onClick }) => (
  <div onClick={onClick}>
    <img src={CloseIcon} className='nav-icon' alt='close_icon' />
  </div>
)
