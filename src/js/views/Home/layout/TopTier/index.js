import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import classNames from 'classnames'

import Section from '~layout/Section'
import Title from '~layout/Title'
import Link from '~layout/Link'
import Item from './Item'

import { getCopy } from '~lib/copyDefaults'
import { calcLeftGroup } from '~lib/utilFunctions'

export default class TopTier extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstTierItemIndex: 0
    }
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({
        firstTierItemIndex: (this.state.firstTierItemIndex + 1) % 3
      })
    }, 5000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const copy = getCopy('toptier')
    const { firstTierItemIndex } = this.state

    return (
      <Section section='case-studies'>
        <Row className='toptier'>
          <Col
            lgOffset={1}
            lg={3}
            mdOffset={1}
            md={4}
            smOffset={1}
            sm={10}
            xsOffset={1}
            xs={10}
          >
            <div className='title-container'>
              <Link type='new' variant='path' link='/work'>
                <Title
                  title={copy.title}
                  icon='new-window'
                  iconColor='case-studies'
                />
              </Link>
            </div>
          </Col>
          <Col
            lgOffset={0}
            lg={7}
            mdOffset={0}
            md={6}
            smOffset={1}
            sm={10}
            xsOffset={1}
            xs={10}
          >
            <div className='wrapper'>
              {copy.logos.map((items, i) => {
                return (
                  <div
                    className={classNames('items-container', {
                      active: firstTierItemIndex === i
                    })}
                    key={`items_${i}`}
                    style={{ left: calcLeftGroup(firstTierItemIndex, i, 3) }}
                  >
                    {items.map(item => {
                      const { url, src, name, className } = item
                      return (
                        <div
                          key={name}
                          className={classNames(className, 'items')}
                        >
                          <Item url={url} src={src} />
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}
