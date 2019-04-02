import React from 'react'

import Section from '~layout/Section'
import HeroMedia from '~layout/HeroMedia'

import AboutMainContent from './layout/aboutMainContent'
import Leadership from './layout/leadership'
import JoinOurTeam from './layout/joinOurTeam'
import { getCopy } from '~lib/copyDefaults'

import './layout/style.scss'

export default class About extends React.Component {
  render () {
    const copy = getCopy('about')

    return (
      <Section section='about' noMargin>
        <HeroMedia src={copy.heroImg} type='image' />
        <AboutMainContent />
        <Leadership />
        <JoinOurTeam />
      </Section>
    )
  }
}
