import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import WebFont from 'webfontloader'
import Favicon from 'react-favicon'
import { getCopy } from '~lib/copyDefaults'

WebFont.load({
  google: {
    families: [
      'Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'
    ]
  }
})

export default class Root extends Component {
  get content () {
    const { routes } = this.props
    const copy = getCopy('roseDigital')

    return (
      <div>
        <Favicon url={copy.favIcon} />
        <Router>{routes}</Router>
      </div>
    )
  }

  render () {
    const { store } = this.props

    return <Provider store={store}>{this.content}</Provider>
  }
}

Root.propTypes = {
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired
}
