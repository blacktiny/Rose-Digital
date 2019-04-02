import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Title from '~layout/Title'
import Section from '~layout/Section'

import SocialIconGroup from '../Misc/SocialIconGroup'
import ContactInfo from './ContactInfo'
import AddressInfo from './AddressInfo'
import Copyright from './Copyright'
import FooterBottom from './FooterBottom'
import Subscription from './Subscription'

import { connect } from 'react-redux'
import { actions as footerActions } from '../../../../redux/modules/footer'
import { footerSelector } from '../../../../redux/selectors/footerSelector'
import { getCopy } from '~lib/copyDefaults'

import './style.scss'

const mapStateToProps = (state) => ({
  footer: footerSelector(state),
})

const mapDispatchToProps = {
  ...footerActions,
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Footer extends React.Component {
  componentDidMount() {
    const { getFooter } = this.props

    getFooter()
  }

  render () {
    const { footer } = this.props
    const content = footer.footer
    const copy = getCopy('footer')
    const columnSizes = {
      md: 7,
      mdOffset: 0,
      lg: 12,
      lgOffset: 0,
      xl: 12,
      xlOffset: 0
    }

    return (
      <Section section='footer'>
        <Section section='about' noMargin>
          <div className='footer-top'>
            <Row>
              <Col
                xl={3}
                xlOffset={1}
                lg={4}
                lgOffset={1}
                md={7}
                mdOffset={1}
                sm={9}
                smOffset={1}
                xs={9}
                xsOffset={1}
              >
                <Title title={content ? content.footer_label : copy.title} />
              </Col>
            </Row>
            <Row>
              <Col
                xl={2}
                xlOffset={1}
                lg={2}
                lgOffset={1}
                md={3}
                mdOffset={1}
                sm={6}
                smOffset={1}
                xs={6}
                xsOffset={1}
                className='contact-info'
              >
                <ContactInfo />
              </Col>
              <Col
                xl={2}
                xlOffset={0}
                lg={2}
                lgOffset={0}
                md={3}
                mdOffset={1}
                sm={6}
                smOffset={1}
                xs={6}
                xsOffset={1}
                className='address-info'
              >
                <AddressInfo />
              </Col>
              <Col
                xl={2}
                xlOffset={0}
                lg={2}
                lgOffset={0}
                md={3}
                mdOffset={0}
                sm={6}
                smOffset={1}
                xs={6}
                xsOffset={1}
              >
                <div>
                  <SocialIconGroup size='medium' color='footer-darkgray' isFooter={true} />
                </div>
              </Col>
              <Col
                xl={4}
                xlOffset={0}
                lg={4}
                lgOffset={0}
                md={10}
                mdOffset={1}
                smOffset={1}
                sm={10}
                xsOffset={1}
                xs={10}
              >
                <Subscription col={columnSizes} noPad />
              </Col>
              <Col
                xsOffset={1}
                xs={7}
                smOffset={1}
                sm={6}
                className='hidden-md hidden-lg hidden-xl'
              >
                <Copyright />
              </Col>
            </Row>
          </div>
          <FooterBottom />
        </Section>
      </Section>
    )
  }
}
