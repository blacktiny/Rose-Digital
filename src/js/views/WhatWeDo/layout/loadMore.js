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
      <Row>
        <Col
          lg={4}
          lgOffset={7}
          md={5}
          mdOffset={6}
          sm={10}
          smOffset={1}
          xs={10}
          xsOffset={1}
        >
          <Typography
            variant='header'
            align='right'
            color='what-we-do'
            onClick={onLoadMore}
            classN='load-more'
          >
            {copy}
            <IconTemplate
              iconName='arrow-down'
              variant='small'
              color='what-we-do'
            />
          </Typography>
        </Col>
      </Row>
    )
  }
}

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired
}
