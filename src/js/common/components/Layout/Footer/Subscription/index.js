import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import classNames from 'classnames'

import { subscribe } from '~api/module/mailchimp'
import Typography from '~layout/Typography'
import { getCopy } from '~lib/copyDefaults'

import IconTemplate from '~layout/Misc/IconTemplate'

import './style.scss'

import { connect } from 'react-redux'
import { footerSelector } from '../../../../../redux/selectors/footerSelector'

const mapStateToProps = (state) => ({
  footer: footerSelector(state),
})

@connect(mapStateToProps)
export default class Subscribe extends React.Component {
  state = {
    email: '',
    error: false,
    success: false
  }

  onChangeEmail = evt => {
    this.setState({ email: evt.target.value, error: false })
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.submit()
    }
  }

  isValidEmailAddress = () => {
    const regex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    const { email } = this.state
    return regex.test(email)
  }

  submit = () => {
    const { success, email } = this.state
    if (success) {
      this.setState({ success: false, error: false, email: '' })
    } else {
      if (this.isValidEmailAddress()) {
        subscribe(email)
          .then(response => {
            if (response.status === 200) {
              this.setState({
                success: true,
                error: false,
                email: ''
              })
            } else {
              this.setState({
                success: false,
                error: true,
                email: ''
              })
            }
          })
          .catch(err => {
            this.setState({
              success: false,
              error: true,
              email: ''
            })
          })
      }
    }
  }

  render () {
    const { email, error, success } = this.state
    const copy = getCopy('footer').subscribe
    const { classN, col, noPad } = this.props

    const { footer } = this.props
    const content = footer.footer

    return (
      <Row className='subscription'>
        <Col
          {...col}
          className={classNames(
            'no-pad-mobile',
            'subscribe-pad-tablet',
            classN,
            noPad && 'no-pad'
          )}
        >
          <Typography variant='body2'>{content ? content.newsletter.title : copy.title}</Typography>
        </Col>
        <Col
          {...col}
          className={classNames(
            'no-pad-mobile',
            'subscribe-pad-tablet',
            classN,
            noPad && 'no-pad'
          )}
        >
          <div className={classNames('input-wrapper', { error })}>
            <input
              placeholder={content ? !success && content.newsletter.placeholder : !success && copy.placeholder}
              type='text'
              className='input'
              value={email}
              onChange={this.onChangeEmail}
              ref={(input) => { this.emailInput = input; }}
              onKeyPress={this.handleKeyPress}
            />
            <button
              type='button'
              className='submit-button'
              onClick={this.submit}
              disabled={!this.isValidEmailAddress()}
            >
              <IconTemplate
                iconName='arrow-down'
                variant='small'
                color={this.isValidEmailAddress() ? 'section-about' : 'accent-lightgray'}
                orientation='right'
              />
            </button>
          </div>
          {
            success && (
              <div
                className='success-message'
                onClick={() => {
                    this.setState({success: false})
                    this.emailInput.focus()
                  }
                }
              >
                thank you! <span>click to enter another email</span>
              </div>
            )
          }
          {
            error && (
              <div className='error-message'>
                sorry, our system could not recognize your input, please try again
              </div>
            )
          }
        </Col>
      </Row>
    )
  }
}
