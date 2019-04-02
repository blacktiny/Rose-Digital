import React from 'react'

import Typography from '~layout/Typography'
import { connect } from 'react-redux'
import { footerSelector } from '../../../../redux/selectors/footerSelector'
import { getCopy } from '~lib/copyDefaults'
import './style.scss'

const mapStateToProps = (state) => ({
  footer: footerSelector(state),
})

@connect(mapStateToProps)
export default class AddressInfo extends React.Component {
  render () {
    const { footer } = this.props
    const content = footer.footer
    const copy = getCopy('footer').address

    let address = null;
    if (content) {
      address =
        (
          <a href={`https://maps.google.com/?q=${content.address_line_1} ${content.address_line_2}`} target='_new' className='no-underline'>
            <Typography variant='body2'>
              {content.address_line_1}
            </Typography>
            <Typography variant='body2'>
              {content.address_line_2}
            </Typography>
          </a>
        )
    } else {
      address = copy.map((address, i) => {
        return (
          <Typography variant='body2' key={i}>
            <a href={`https://maps.google.com/?q=${address}`} target='_new'>{address}</a>
          </Typography>
        )
      })
    }
    return <div>{address}</div>
  }
}
