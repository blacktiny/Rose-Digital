import React from 'react'

import Carousel from '~layout/Carousel'
import Section from '~layout/Section'
import TopTier from './layout/TopTier'
import AllWork from './layout/AllWork'
import News from './layout/News'
import WhatWeDo from './layout/WhatWeDo'

import { getCopy } from '~lib/copyDefaults'

import './layout/style.scss'

export default class Home extends React.Component {
  render () {
    const copy = getCopy('home')

    return (
      <Section section='home' noMargin>
        <Carousel items={copy.carouselItems} interval={1000} />
        <TopTier />
        <AllWork />
        <News />
        <WhatWeDo />
      </Section>
    )
  }
}
