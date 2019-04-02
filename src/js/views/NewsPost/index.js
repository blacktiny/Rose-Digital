import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid'
import classNames from 'classnames'
import parse from 'html-react-parser'
import SVG from 'react-inlinesvg'
import readingTime from 'reading-time'

import { getCopy } from '~lib/copyDefaults'
import Section from '~layout/Section'
import HeroMedia from '~layout/HeroMedia'

import BackButton from './layout/backButton'
import PostTitle from './layout/postTitle'
import NextPost from './layout/nextPost'
import Post from './layout/post'
import Tags from './layout/tags'

import { actions as newsActions } from '../../redux/modules/news'
import {
  getNewsPostsSelector,
  getNewsIndividualPostSelector,
  getSortTypeSelector,
  getFilterSelector,
  getLimitedSelector,
  getSkipSelector
} from '../../redux/selectors/newsSelector'

import timerIcon from '~assets/icons/timer.svg'

import './layout/style.scss'

class NewsPost extends React.Component {
  constructor (props) {
    super(props)
    const { post } = this.props.match.params
    const copy = getCopy('posts')
    this.state = {
      currentPost: post,
      postURL: post,
      postCopy: copy[post],
      visiblePostBlocks: 2
    }
  }

  componentDidMount () {
    const { post } = this.props.match.params

    const { sortType, filter, limited, getIndividualNewsPost, getNewsPosts } = this.props

    this.setState({ postURL: post })

    getNewsPosts({ sort: sortType, limit: limited, skip: 0, tag: filter })
    getIndividualNewsPost(post)
  }

  componentDidUpdate () {
    const { post } = this.props.match.params
    const { postURL } = this.state
    const { getIndividualNewsPost } = this.props

    if (postURL !== post) {
      this.setState({ postURL: post })

      getIndividualNewsPost(post)
    }
  }

  getPostTags = (newsPosts, title) => {
    let postTags = []

    if (newsPosts) {
      newsPosts.map((post, index) => {
        if (post.title === title) {
          if (post.rd_tags) {
            post.rd_tags.map((tag, index) => {
              postTags.push(tag.title)
            })
          }
          return postTags
        }
      })
    }

    return postTags
  }

  getNextPostURL = (newsPosts, title) => {
    let nextPostURL = ''
    if (newsPosts) {
      newsPosts.map((post, index) => {
        if (post.title === title) {
          if (index < newsPosts.length - 1) {
            nextPostURL = newsPosts[index + 1].url
            return nextPostURL
          }
        }
      })
    }

    return nextPostURL
  }

  renderSectionOfPost = section => {
    const key = Object.keys(section)[0]

    if (key === 'text') {
      return <div className='post-body-copy'>{parse(section[key].content)}</div>
    } else if (key === 'pull_quote') {
      return <div className='post-body-quote'>{section[key].quote}</div>
    } else if (key === 'image') {
      return (
        <div className='post-body-media'>
          <HeroMedia src={section[key].file.url} type={key} />
        </div>
      )
    } else if (key === 'video') {
      return (
        <div className='post-body-media'>
          {section[key].file ? (
            <HeroMedia src={section[key].file.url} type={key} />
          ) : (
            <HeroMedia src={section[key].embed_link.href} type={key} />
          )}
        </div>
      )
    }
  }

  render () {
    const { newsPosts, currentPost } = this.props
    const title = currentPost ? currentPost.title : ''
    const date = currentPost ? currentPost.publish_date : ''
    const hero = currentPost ? currentPost.hero : null
    const content = currentPost ? currentPost.content : null
    let timeStamp = ''
    const postTags = this.getPostTags(newsPosts, title)
    const nextPostURL = this.getNextPostURL(newsPosts, title)
    let readingText = ''

    const postContent = content
      ? content.map((section, i) => {
        const key = Object.keys(section)[0]
        if (key === 'text') {
          readingText += section.text.content
        }
        return (
          <Row key={i} className='post-body-section'>
            <Col
              lg={key === 'image' || key === 'video' ? 10 : 8}
              lgOffset={1}
              md={10}
              mdOffset={1}
              sm={10}
              smOffset={1}
              xs={10}
              xsOffset={1}
            >
              {this.renderSectionOfPost(section)}
            </Col>
          </Row>
        )
      })
      : ''

    const readingStats = readingTime(readingText)
    if (readingStats) {
      timeStamp = readingStats.text.replace(' read', '')
    }

    return (
      <Section section='news-post'>
        {hero && <HeroMedia src={hero.image.url} type={'image'} />}
        <Row className='section-news-post-back-button'>
          <Col lgOffset={1} mdOffset={1} smOffset={1} xsOffset={1}>
            <BackButton />
          </Col>
        </Row>
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
            <div className='post-topics-horizontal'>
              <Tags copy={postTags} arrangement='horizontal' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            lg={8}
            lgOffset={1}
            md={10}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
          >
            <PostTitle title={title} date={date} />
            <div style={{ display: 'flex' }}>
              <SVG src={timerIcon} className='timer-icon' alt='timer_icon' />
              <span className={classNames('post-timeStamp', 'color-news')}>
                {timeStamp}
              </span>
            </div>
          </Col>
          <Col lg={1} md={1} sm={1} xs={1}>
            <div className='post-topics'>
              {postTags.length > 0 && <div className='post-topics-header'>topics</div>}
              <Tags copy={postTags} arrangement='vertical' />
            </div>
          </Col>
        </Row>
        <div className='post-body'>{postContent}</div>
        <NextPost nextPostURL={nextPostURL} title={title} />
        <Post visiblePostBlocks={this.state.visiblePostBlocks} />
      </Section>
    )
  }
}

function mapStateToProps (state) {
  return {
    newsPosts: getNewsPostsSelector(state),
    currentPost: getNewsIndividualPostSelector(state),
    sortType: getSortTypeSelector(state),
    filter: getFilterSelector(state),
    limited: getLimitedSelector(state),
    skip: getSkipSelector(state)
  }
}

const mapDispatchToProps = {
  ...newsActions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPost)
