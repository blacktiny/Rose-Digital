import React from 'react'
import classNames from 'classnames'
import ReactPlayer from 'react-player'
import Link from '~layout/Link'
import Indicator from './Indicator'

export default class Item extends React.Component {
  render () {
    const {
      path,
      source,
      client,
      active,
      onEnded,
      onReady,
      length,
      curItem
    } = this.props
    return (
      <div className={classNames('item', { active })}>
        <Link type='new' variant='path' link={path}>
          <ReactPlayer
            url={source}
            playing={active}
            muted
            volumn={0}
            onReady={onReady}
            onEnded={onEnded}
            width='100%'
            height='100%'
          />
          <div className='client'>{client}</div>
          <Indicator length={length} curItem={curItem} />
        </Link>
      </div>
    )
  }
}
