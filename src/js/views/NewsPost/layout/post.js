import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid'
import Masonry from 'react-masonry-css'

import Section from '~layout/Section'

import NewsPreview from '~layout/Post/NewsPreview'

import { getNewsPostsSelector } from '../../../redux/selectors/newsSelector'

class Post extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visiblePostsLimited: 2
    }
  }

  postPieces = () => {
    const { visiblePostsLimited } = this.state
    const { newsPosts } = this.props
    let postPieces = []

    newsPosts.map((postContent, i) => {
      let subtitle = ''

      postContent.rd_tags.map(type => {
        subtitle = `${subtitle} ${type.title} \xA0\xA0\xA0`
      })

      if (i < visiblePostsLimited) {
        postPieces.push(
          <NewsPreview
            key={i + 1}
            src={postContent.hero.image.url}
            title={postContent.title}
            subtitle={subtitle}
            publishDate={postContent.publish_date}
            link={`/news${postContent.url}`}
          />
        )
      }
    })

    return postPieces
  }

  render () {
    const breakptColumns = {
      default: 2,
      1100: 2,
      700: 1,
      500: 1
    }

    return (
      <Section section='post'>
        <Row>
          <Col
            lg={10}
            lgOffset={1}
            md={10}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
          >
            <div className='all-news'>
              <Masonry
                breakpointCols={breakptColumns}
                className='masonry'
                columnClassName='masonry-column'
              >
                {this.postPieces()}
              </Masonry>
            </div>
          </Col>
        </Row>
      </Section>
    )
  }
}

function mapStateToProps (state) {
  return {
    newsPosts: getNewsPostsSelector(state)
  }
}

export default connect(mapStateToProps)(Post)
