import React from 'react'
import classNames from 'classnames'
import times from 'lodash.times'

export default ({ length, curItem, onChangePos }) => {
  return (
    <div className='indicator-wrapper'>
      {times(length, pos => {
        return (
          <div
            className={classNames('indicator', { active: pos === curItem })}
            onClick={() => onChangePos(pos)}
            key={`item-${pos}`}
          />
        )
      })}
    </div>
  )
}
