import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import news from './modules/news'
import header from './modules/header'
import footer from './modules/footer'
import caseStudy from './modules/caseStudy'

export default combineReducers({
  routing,
  news,
  header,
  footer,
  caseStudy
})
