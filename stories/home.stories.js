import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import WebFont from 'webfontloader'

import { storiesOf } from '@storybook/react'

import PostPreview from '~layout/Post/PostPreview'
import NewsPreview from '~layout/Post/NewsPreview'
import Header from '~layout/Header'
import DescriptionBox from '~layout/DescriptionBox'
import MediaPreview from '~layout/Post/MediaPreview'
import Carousel from '~layout/Carousel'

import TopTier from '~views/Home/layout/TopTier'
import AllWorkSection from '~views/Home/layout/AllWork'
import NewsSection from '~views/Home/layout/News'
import WhatWeDoSection from '~views/Home/layout/WhatWeDo'

import Section from '~layout/Section'

import AdidasLogo from '~assets/Logos/clients/logo-adidas.png'
import AELogo from '~assets/Logos/clients/logo-amex.png'
import BGCLogo from '~assets/Logos/clients/logo-bgc.png'
import BridgestoneLogo from '~assets/Logos/clients/logo-bridgestone-firestone.png'
import ComcastLogo from '~assets/Logos/clients/logo-comcast-xfinity.png'
import ClariureLogo from '~assets/Logos/clients/logo-clariture.png'

import AdidasShortVideo from '~assets/Video/RD_Video_Client_ADIDAS_Short.mp4'
import FuseShortVideo from '~assets/Video/RD_Video_Client_FUSE_Short.mp4'
import AMEXShortVideo from '~assets/Video/RD_Video_Client_AMEX_Short.mp4'
import FordShortVideo from '~assets/Video/RD_Video_Client_FORD_Short.mp4'

import '~theme/index.css'

WebFont.load({
  google: {
    families: [
      'Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'
    ]
  }
})

const tierItems = [
  {
    url: 'https://www.adidas.com/us',
    src: AdidasLogo,
    sm: 3,
    xs: 3,
    md: 2
  },
  {
    url: 'https://www.adidas.com/us',
    src: AELogo,
    sm: 3,
    xs: 3,
    md: 2
  },
  {
    url: 'https://www.adidas.com/us',
    src: BGCLogo,
    sm: 3,
    xs: 3,
    md: 2
  },
  {
    url: 'https://www.adidas.com/us',
    src: BridgestoneLogo,
    sm: 3,
    xs: 3,
    md: 2
  },
  {
    url: 'https://www.adidas.com/us',
    src: ClariureLogo,
    md: 2,
    className: 'hidden-sm hidden-xs'
  },
  {
    url: 'https://www.adidas.com/us',
    src: ComcastLogo,
    md: 2,
    className: 'hidden-sm hidden-xs'
  }
]

const menuItems = [
  {
    title: 'work',
    subtitle: 'contemporary tech solutions',
    type: 'case-studies'
  },
  {
    title: 'news',
    subtitle: 'web & mobile products for the enterprise',
    type: 'news'
  },
  {
    title: 'what we do',
    subtitle: 'services + how + expertise',
    type: 'what-we-do'
  },
  {
    title: 'about',
    subtitle: 'what drives us + leadership team',
    type: 'about'
  }
]

const contactInfo = {
  title: 'contact',
  email: 'info@rosedigital.co',
  phoneNumber: '914 715 9980',
  addressLine1: '530 7th Avenue, Suite 505',
  addressLine2: 'New York, New York 10018'
}

const carouselItems = [
  { client: 'Adidas', source: AdidasShortVideo },
  { client: 'Fuse', source: FuseShortVideo },
  { client: 'AMEX', source: AMEXShortVideo },
  { client: 'Ford', source: FordShortVideo }
]

storiesOf('Home Page Components', module)
  .add('Header', () => (
    <Header menuItems={menuItems} contactInfo={contactInfo} />
  ))
  .add('TopTier', () => <TopTier items={tierItems} />)
  .add('Post Preview with Image', () => (
    <Row>
      <Col md={6} sm={12} lg={8}>
        <PostPreview
          type='video'
          src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
          title='adidas'
          description='augmented reality'
          content='When Adidas and Annex 88 wanted to use cutting edge technology
to launch a new product, they looked to Rose Digital. Together we created
a unique, web-based, augmented reality experience that handled…'
        />
      </Col>
      <Col md={6} sm={12} lg={4}>
        <PostPreview
          type='image'
          src='https://cdn2.techworld.com/cmsdata/features/3612861/Hand_holding_smartphone_thumb800.jpg'
          title='adidas'
          description='augmented reality'
          content='When Adidas and Annex 88 wanted to use cutting edge technology
to launch a new product, they looked to Rose Digital. Together we created
a unique, web-based, augmented reality experience that handled…'
        />
      </Col>
    </Row>
  ))
  .add('Post Preview with Different Layout', () => (
    <PostPreview
      type='video'
      align='secondary'
      src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
      title='adidas'
      description='augmented reality'
      content='When Adidas and Annex 88 wanted to use cutting edge technology
to launch a new product, they looked to Rose Digital. Together we created
a unique, web-based, augmented reality experience that handled…'
    />
  ))
  .add('News Preview', () => (
    <Section section='news'>
      <NewsPreview
        src='https://cdn2.techworld.com/cmsdata/features/3612861/Hand_holding_smartphone_thumb800.jpg'
        title='Rose Digital: A Top NY Company'
        subtitle='news'
        publishDate={new Date()}
      />
    </Section>
  ))

storiesOf('Description Box', module)
  .add('color: `about` accent: `accent-navy`', () => (
    <DescriptionBox
      color='about'
      accent='accent-navy'
      sectionTitle='about'
      path='/about'
      title='Rose Digital designs and develops top-tier tech products'
    >
      We work with world class companies and agencies who want to build
      exceptional technology products, services and platforms that users deeply
      value and enjoy using.
    </DescriptionBox>
  ))
  .add('color: `what-we-do` accent: `accent-green`', () => (
    <DescriptionBox
      color='what-we-do'
      accent='accent-green'
      sectionTitle='what we do'
      path='/what-we-do'
      title='app development, web design, IT consulting'
    >
      Single page apps, hybrid mobile apps, native mobile apps, mvp builds,
      corporate applications, project scoping, system design, process planning,
      project management, agile and lean consulting, graphic design, interface
      design, user experience design, search engine optimization, authoring.
    </DescriptionBox>
  ))

storiesOf('Media Section', module).add('Article', () => (
  <Section section='what-we-do'>
    <Row>
      <Col sm={4} md={4} lg={4}>
        <MediaPreview
          type='article'
          source='alley watch'
          title='Companies Need to Build and Safeguard Their Mobile Identity'
          content='Companies should be proactive in building and protecting their mobile
            brand identity.'
          color='what-we-do'
        />
      </Col>
      <Col sm={4} md={4} lg={4}>
        <MediaPreview
          type='event'
          source='a technology roundtable'
          title='Bridging the Digital Divide'
          date='2018/6/3'
          color='what-we-do'
        />
      </Col>
      <Col sm={4} md={4} lg={4}>
        <MediaPreview
          type='podcast'
          source='business leaders radio'
          title='Business Leaders Radio with Amy Toepper'
          date='2018/4/10'
          color='what-we-do'
        />
      </Col>
    </Row>
  </Section>
))

storiesOf('Home Page Sections', module)
  .add('Carousel', () => <Carousel items={carouselItems} interval={1000} />)
  .add('All Work Section', () => <AllWorkSection />)
  .add('News Section', () => <NewsSection />)
  .add('WhatWeDo Section', () => <WhatWeDoSection />)
