import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import { getCopy } from '~lib/copyDefaults'
import Section from '~layout/Section'
import Title from '~layout/Title'
import HeroMedia from '~layout/HeroMedia'

import Services from './layout/services'
import HowWeDoIt from './layout/howWeDoIt'
import Expertise from './layout/expertise'
import Media from './layout/media'
import LoadMore from './layout/loadMore'

import './layout/style.scss'

export default class WhatWeDo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleMediaBlocks: 9
    }
  }

  onLoadMore = () => {
    return this.setState({
      visibleMediaBlocks: this.state.visibleMediaBlocks + 9
    })
  }

  render () {
    const copy = getCopy('whatWeDo')
    const media = getCopy('media')
    const { visibleMediaBlocks } = this.state

    return (
      <Section section='what-we-do' noMargin>
        <HeroMedia src={copy.heroImg} type='image' />
        <Section section='what-we-do'>
          <Row>
            <Col
              lg={4}
              lgOffset={1}
              md={7}
              mdOffset={1}
              sm={10}
              smOffset={1}
              xs={10}
              xsOffset={1}
            >
              <Title title={copy.header} />
            </Col>
          </Row>
        </Section>
        <Services />
        <HowWeDoIt />
        <Expertise />
        <Media visibleMediaBlocks={this.state.visibleMediaBlocks} />
        {visibleMediaBlocks < media.media.length && (
          <LoadMore onLoadMore={this.onLoadMore} />
        )}
      </Section>
    )
  }
}
