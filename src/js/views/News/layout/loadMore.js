import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import PropTypes from 'prop-types'

import { getCopy } from '~lib/copyDefaults'
import Typography from '~layout/Typography'
import IconTemplate from '~layout/Misc/IconTemplate'

export default class LoadMore extends React.Component {
  render () {
    const { onLoadMore } = this.props
    const copy = getCopy('loadMore')

    return (
      <div>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant='header'
              align='center'
              color='news'
              onClick={onLoadMore}
              classN='load-more'
            >
              {copy}
              <IconTemplate
                iconName='arrow-down'
                variant='small'
                color='news'
              />
            </Typography>
          </Col>
        </Row>
        <div className='load-more-sep' />
      </div>
    )
  }
}

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired
}
