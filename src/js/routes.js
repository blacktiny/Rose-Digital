import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '~layout/Header'
import About from './views/About'
import WhatWeDo from './views/WhatWeDo'
import Home from './views/Home'
import BlogPost from './views/BlogPost'
import CaseStudy from './views/CaseStudy'
import CaseStudyList from './views/CaseStudyList'
import News from './views/News'
import NewsPost from './views/NewsPost'
import Footer from '~layout/Footer'
import ScrollToTop from '~layout/ScrollToTop'

import '../style/index.scss'

const menuItems = [
  {
    title: 'work',
    subtitle: 'contemporary tech solutions',
    type: 'case-studies',
    link: '/work'
  },
  {
    title: 'news',
    subtitle: 'web & mobile products for the enterprise',
    type: 'news',
    link: '/news'
  },
  {
    title: 'what we do',
    subtitle: 'services + how + expertise',
    type: 'what-we-do',
    link: '/what-we-do'
  },
  {
    title: 'about',
    subtitle: 'what drives us + leadership team',
    type: 'about',
    link: '/about'
  }
]

const contactInfo = {
  title: 'contact',
  email: 'info@rosedigital.co',
  phoneNumber: '914 715 9980',
  addressLine1: '530 7th Avenue, Suite 505',
  addressLine2: 'New York, New York 10018'
}

module.exports = (
  <ScrollToTop>
    <Header menuItems={menuItems} contactInfo={contactInfo} />
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/what-we-do' component={WhatWeDo} />
        <Route exact path='/news' component={News} />
        <Route exact path='/news/:post' component={NewsPost} />
        <Route exact path='/work' component={CaseStudyList} />
        <Route exact path='/work/:project' component={CaseStudy} />
        <Route path='/blog-post' component={BlogPost} />
        <Route path='*' component={Home} />
      </Switch>
    </div>
    <Footer />
  </ScrollToTop>
)
