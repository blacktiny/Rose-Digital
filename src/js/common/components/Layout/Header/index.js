import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import classNames from 'classnames'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { actions as headerActions } from '../../../../redux/modules/header'
import { headerSelector } from '../../../../redux/selectors/headerSelector'
import 'hamburgers/_sass/hamburgers/hamburgers.scss'
import Logo from './Logo'
import DropdownMenu from './DropdownMenu'
import { getCopy } from '~lib/copyDefaults'
import './style.scss'

const mapStateToProps = (state) => ({
  header: headerSelector(state),
})

const mapDispatchToProps = {
  ...headerActions,
}

@connect(mapStateToProps, mapDispatchToProps)
class Header extends React.Component {
  state = {
    menuOpen: false
  }

  componentDidMount() {
    const { getHeader } = this.props

    getHeader()
  }

  showMenu = () => {
    this.setState({ menuOpen: true })
  }

  hideMenu = () => {
    this.setState({ menuOpen: false })
  }

  onMenuClick = link => {
    this.setState({ menuOpen: false })
    if (link) {
      this.props.history.push(link)
    }
  }

  render () {
    const { menuOpen } = this.state
    const { menuItems, contactInfo, header } = this.props
    const content = header.header
    const copy = getCopy('roseDigital')

    return (
      <div className={classNames('header-wrapper', { show: menuOpen })}>
        <div className='header'>
          <Row>
            <Col
              xsOffset={1}
              smOffset={1}
              mdOffset={1}
              lgOffset={1}
              xlOffset={1}
              lg={2}
              xl={2}
              md={3}
              sm={5}
              xs={5}
            >
              <Logo src={content ? content.logo.url : copy.logo} onClick={() => this.onMenuClick()} />
            </Col>
            <Col
              xsOffset={4}
              smOffset={4}
              mdOffset={6}
              lgOffset={7}
              xlOffset={7}
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={1}
              className='nav-icon-wrapper'
            >
              <button
                className={classNames('hamburger', 'hamburger--squeeze', {
                  'is-active': menuOpen
                })}
                type='button'
                onClick={menuOpen ? this.hideMenu : this.showMenu}
              >
                <span className='hamburger-box'>
                  <span className='hamburger-inner' />
                </span>
              </button>
            </Col>
          </Row>
        </div>
        <DropdownMenu
          show={menuOpen}
          menuItems={menuItems}
          contactInfo={contactInfo}
          onMenuClick={this.onMenuClick}
        />
      </div>
    )
  }
}

export default withRouter(Header)
