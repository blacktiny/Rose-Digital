import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Title from '~layout/Title'

import TopNewsPreview from '~layout/Post/TopNewsPreview'

import { actions as newsActions } from '../../../redux/modules/news'
import {
  getSkipSelector,
  getTopNewsPostsSelector
} from '../../../redux/selectors/newsSelector'

class TopPosts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      limit: 3
    }
  }

  componentDidMount () {
    const { limit } = this.state
    const { skip, getTopNewsPosts } = this.props

    getTopNewsPosts({ limit, skip })
  }

  render () {
    const { topPosts } = this.props

    const postPieces = topPosts.map((postContent, i) => {
      let subtitle = ''
      postContent.rd_tags.map(type => {
        subtitle = `${subtitle} ${type.title} \xA0\xA0\xA0`
      })
      return (
        <TopNewsPreview
          key={i}
          src={postContent.hero.image.url}
          title={postContent.title}
          subtitle={subtitle}
        />
      )
    })

    return (
      <div>
        <Row>
          <Col lg={12} sm={12} xs={12}>
            <Title title={'top posts'} />
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            {postPieces}
            <div
              className={classNames('top-posts-seperator', `back-color-news`)}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    topPosts: getTopNewsPostsSelector(state),
    skip: getSkipSelector(state)
  }
}

const mapDispatchToProps = {
  ...newsActions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPosts)
