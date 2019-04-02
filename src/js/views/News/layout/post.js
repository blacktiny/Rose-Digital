import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import Masonry from 'react-masonry-css'

import Section from '~layout/Section'

import NewsPreview from '~layout/Post/NewsPreview'
import TopPosts from './topPosts'

export default class Post extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMobileView: false
    }
  }

  updateDimensions = () => {
    if (window.innerWidth < 700) this.setState({ isMobileView: true })
    else this.setState({ isMobileView: false })
  }

  componentWillMount () {
    this.updateDimensions()
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  postPieces = () => {
    const { newsPosts } = this.props
    const { isMobileView } = this.state
    let postPieces = []

    newsPosts.map((postContent, i) => {
      let subtitle = ''

      postContent.rd_tags.map(type => {
        subtitle = `${subtitle} ${type.title} \xA0\xA0\xA0`
      })

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
    })

    let topPosts = <TopPosts key={0} />
    if (isMobileView) postPieces.splice(0, 0, topPosts)
    else postPieces.splice(1, 0, topPosts)
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

Post.propTypes = {
  newsPosts: PropTypes.array.isRequired
}
