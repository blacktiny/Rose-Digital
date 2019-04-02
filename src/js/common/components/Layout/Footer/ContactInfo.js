import React from 'react'

import Typography from '~layout/Typography'
import { getCopy } from '~lib/copyDefaults'
import { connect } from 'react-redux'
import { footerSelector } from '../../../../redux/selectors/footerSelector'
import './style.scss'

const mapStateToProps = (state) => ({
  footer: footerSelector(state),
})

@connect(mapStateToProps)
export default class ContactInfo extends React.Component {
  render () {
    const { footer } = this.props
    const content = footer.footer
    const copy = getCopy('footer')

    return (
      <div>
        <a href={`tel:${content ? content.phone_number : copy.phoneNumber}`} target='_top' className='no-underline'>
          <Typography variant='body2'>{content ? content.phone_number : copy.phoneNumber}</Typography>
        </a>
        <a href={`mailto:${content ? content.contact_email : copy.email}?Subject=Hello`} target='_top' className='no-underline'>
          <Typography variant='subheader'>{content ? content.contact_email : copy.email}</Typography>
        </a>
      </div>
    )
  }
}
