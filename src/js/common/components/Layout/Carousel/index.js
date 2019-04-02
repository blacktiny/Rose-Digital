import React from 'react'
import deepEqual from 'fast-deep-equal'
import reduce from 'lodash.reduce'
import { calcLeftCarousel } from '~lib/utilFunctions'

import Item from './Item'

import './styles.scss'

export default class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      curItem: -1,
      length: props.items.length,
      readyState: new Array(props.items.length)
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const { readyState } = this.state
    if (!deepEqual(readyState, prevState.readyState)) {
      const isReady = reduce(
        readyState,
        (prev, cur) => {
          if (!cur || !prev) {
            return false
          }
          return true
        },
        true
      )
      if (isReady) {
        this.setState({
          curItem: 0
        })
      }
    }
  }

  onReady = i => {
    const readyState = [...this.state.readyState]
    readyState[i] = true
    this.setState({ readyState })
  }

  movePos = () => {
    const { curItem, length } = this.state
    this.setState({
      curItem: (curItem + 1) % length
    })
  }

  render () {
    const { length, curItem } = this.state
    const { items } = this.props
    return (
      <div className='carousel'>
        {items.map((item, i) => (
          <Item
            {...item}
            length={length}
            curItem={curItem}
            left={calcLeftCarousel(i, curItem, length)}
            active={i === curItem}
            onReady={() => this.onReady(i)}
            onEnded={this.movePos}
            key={`carousel-item-${i}`}
          />
        ))}
      </div>
    )
  }
}
