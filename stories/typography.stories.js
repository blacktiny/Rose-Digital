import React from 'react'
import WebFont from 'webfontloader'

import { storiesOf } from '@storybook/react'

import Typography from '~layout/Typography'
import Title from '~layout/Title'
import Section from '~layout/Section'
import Link from '~layout/Link'

import '~theme/index.scss'

WebFont.load({
  google: {
    families: [
      'Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'
    ]
  }
})

storiesOf('Basic Typography', module)
  .add('Header variant', () => (
    <Typography variant='header' align='left' color='primary'>
      Header
    </Typography>
  ))
  .add('Body1 variant', () => (
    <Typography align='left' color='primary'>
      Text style one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur semper augue enim, sit amet viverra velit volutpat vitae. Morbi
      condimentum erat turpis. Fusce id nunc ultricies, tempor nisi at, ornare
      leo. In hac habitasse platea dictumst. Etiam dapibus sollicitudin
      faucibus.
    </Typography>
  ))
  .add('Body2 variant', () => (
    <Typography variant='body2' align='left' color='primary'>
      Text style one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur semper augue enim, sit amet viverra velit volutpat vitae. Morbi
      condimentum erat turpis. Fusce id nunc ultricies, tempor nisi at, ornare
      leo. In hac habitasse platea dictumst. Etiam dapibus sollicitudin
      faucibus.
    </Typography>
  ))
  .add('Body3 variant', () => (
    <Typography variant='body3' align='left' color='primary'>
      Text style one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Curabitur semper augue enim, sit amet viverra velit volutpat vitae. Morbi
      condimentum erat turpis. Fusce id nunc ultricies, tempor nisi at, ornare
      leo. In hac habitasse platea dictumst. Etiam dapibus sollicitudin
      faucibus.
    </Typography>
  ))
  .add('Subheader variant', () => (
    <Typography variant='subheader' align='left' color='primary'>
      SubHeader
    </Typography>
  ))
  .add('Primary Color for Header variant', () => (
    <Typography variant='header' align='left' color='primary'>
      Header with Primary Color
    </Typography>
  ))
  .add('Primary Color for Header variant', () => (
    <Typography variant='header' align='left' color='secondary'>
      Header with Secondary Color
    </Typography>
  ))

storiesOf('Title', module)
  .add('Title: default align', () => (
    <Section section='case-studies'>
      <Title type='secondary' title='header' subtitle='subheader' />
    </Section>
  ))
  .add('Title: align type1', () => (
    <Section section='case-studies'>
      <Title
        type='secondary'
        align='type1'
        title='header'
        subtitle='subheader'
      />
    </Section>
  ))
  .add('Title: align type2', () => (
    <Section section='case-studies'>
      <Title
        type='secondary'
        align='type2'
        title='header'
        subtitle='subheader'
      />
    </Section>
  ))
  .add('Title: Post', () => (
    <Section section='case-studies'>
      <Title
        type='post-title'
        align='type1'
        title='header'
        subtitle='subheader'
      />
    </Section>
  ))
  .add('Section: default', () => (
    <Section section='default'>
      <Title type='primary' title='Header' />
    </Section>
  ))
  .add('Section: Work', () => (
    <Section section='case-studies'>
      <Title type='primary' title='Header' />
    </Section>
  ))
  .add('Section: News', () => (
    <Section section='news'>
      <Title type='primary' title='Header' />
    </Section>
  ))
  .add('Section: What We Do', () => (
    <Section section='what-we-do'>
      <Title type='primary' title='Header' />
    </Section>
  ))
  .add('Section: About', () => (
    <Section section='about'>
      <Title type='primary' title='Header' />
    </Section>
  ))

storiesOf('Links', module)
  .add('Links: Main Style', () => (
    <Section section='default'>
      <Link to='/'>
        <Typography variant='header' align='left' color='primary'>
          Header
        </Typography>
      </Link>
    </Section>
  ))
  .add('Links: New Window Style', () => (
    <Section section='default'>
      <Link to='/' type='new'>
        <Title type='primary' title='Header' />
      </Link>
    </Section>
  ))
  .add('Links: Button Style', () => (
    <Section section='default'>
      <Link to='/' type='button' color='secondary'>
        <Typography variant='subheader' align='left' color='primary'>
          Header
        </Typography>
      </Link>
    </Section>
  ))
  .add('Section: Work', () => (
    <Section section='case-studies'>
      <Link to='/'>
        <Typography variant='header' align='left' color='primary'>
          Header
        </Typography>
      </Link>
    </Section>
  ))
  .add('Section: News', () => (
    <Section section='news'>
      <Link to='/'>
        <Typography variant='header' align='left' color='primary'>
          Header
        </Typography>
      </Link>
    </Section>
  ))
  .add('Section: What We Do', () => (
    <Section section='what-we-do'>
      <Link to='/'>
        <Typography variant='header' align='left' color='primary'>
          Header
        </Typography>
      </Link>
    </Section>
  ))
  .add('Section: About', () => (
    <Section section='about'>
      <Link to='/'>
        <Typography variant='header' align='left' color='primary'>
          Header
        </Typography>
      </Link>
    </Section>
  ))
