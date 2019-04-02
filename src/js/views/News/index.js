import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid'

import { getCopy } from '~lib/copyDefaults'
import Section from '~layout/Section'
import Title from '~layout/Title'
import HeroMedia from '~layout/HeroMedia'
import DropdownMenu from '~layout/DropdownMenu'
import Typography from '~layout/Typography'
import Tag from '~layout/Tag'

import Post from './layout/post'
import LoadMore from './layout/loadMore'

import NewsHeroImg from '~assets/Images/Miscellaneous/RD_Header_News.jpg'

import { actions as newsActions } from '../../redux/modules/news'
import {
  getSortTypeSelector,
  getFilterSelector,
  getLimitedSelector,
  getSkipSelector,
  getNewsTagsSelector,
  getNewsPostsSelector
} from '../../redux/selectors/newsSelector'

import './layout/style.scss'

class News extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addVisiblePostsNumbers: 10
    }
  }

  componentDidMount () {
    const { sortType, filter, limited } = this.props
    const { getNewsTags, getNewsPosts } = this.props

    getNewsPosts({ sort: sortType, limit: limited, skip: 0, tag: filter })
    getNewsTags()
  }

  onLoadMore = () => {
    const { addVisiblePostsNumbers } = this.state
    const {
      sortType,
      filter,
      limited,
      skip,
      getNewsPosts
    } = this.props

    getNewsPosts({
      sort: sortType,
      limit: limited,
      skip: skip + addVisiblePostsNumbers,
      tag: filter
    })
  }

  onSortChanged = itemName => {
    const { filter, limited, skip, getNewsPosts, setSortType } = this.props

    setSortType(itemName)
    getNewsPosts({ sort: itemName, limit: limited, skip, tag: filter })
  }

  onFilterSelected = itemName => {
    const { sortType, limited, getNewsPosts } = this.props

    getNewsPosts({ sort: sortType, limit: limited, skip: 0, tag: itemName })
  }

  onCloseFilterTag = tag => {
    let {
      sortType,
      filter,
      limited,
      getNewsPosts
    } = this.props
    if (filter === tag) {
      getNewsPosts({ sort: sortType, limit: limited, skip: 0, tag: '' })
    }
  }

  render () {
    const copy = getCopy('newsletter')
    const { newsTags, filter, sortType, newsPosts, limited, skip } = this.props

    const filterTag = filter ? (
      <Tag
        name={filter}
        active
        color={'white'}
        backColor={'news'}
        onClose={filter => this.onCloseFilterTag(filter)}
      />
    ) : (
      ''
    )
    const filterTagforMobile = filter ? (
      <Tag
        name={filter}
        active
        color={'news'}
        backColor={'white'}
        onClose={filter => this.onCloseFilterTag(filter)}
      />
    ) : (
      ''
    )

    return (
      <Section section='news-main' noMargin>
        <HeroMedia src={NewsHeroImg} type='image' />
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
            <div className='image-title'>
              <Title title='news' noHighlight color='news' />
              <Title
                title='web & mobile products for the enterprise'
                noHighlight
              />
            </div>
          </Col>
        </Row>
        <Row className='news-menubar'>
          <Col
            lg={10}
            lgOffset={1}
            md={10}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
            className='news-header'
          >
            <Typography variant='span' color='accent-1' classN='header-text'>
              {copy.header}
            </Typography>
            <DropdownMenu
              menuName={'sort'}
              menuItems={copy.sort}
              multiSelection={false}
              classN={'sort-menu'}
              onItemSelected={itemName => this.onSortChanged(itemName)}
              currentSelectedItem={sortType}
            />
            <DropdownMenu
              menuName={'filter'}
              menuItems={newsTags}
              multiSelection={false}
              classN={'filter-menu'}
              color={'news'}
              clearButtonShow
              clearButtonName={'clear filters'}
              onItemSelected={itemName => this.onFilterSelected(itemName)}
              currentSelectedItem={filter}
            />
          </Col>
        </Row>
        <Row className='news-menubar-mobile'>
          <Col
            lg={10}
            lgOffset={1}
            md={10}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
            className='news-header'
          >
            <div className='dropdown-menu-section'>
              <DropdownMenu
                menuName={'sort'}
                menuItems={copy.sort}
                multiSelection={false}
                onItemSelected={itemName => this.onSortChanged(itemName)}
                menuStyle={'second'}
              />
              <DropdownMenu
                menuName={'filter'}
                menuItems={newsTags}
                multiSelection={false}
                color={'news'}
                clearButtonShow
                clearButtonName={'clear all filters'}
                onItemSelected={itemName => this.onFilterSelected(itemName)}
                currentSelectedItem={filter}
                menuStyle={'second'}
                menuItemDispType={'mobile'}
              />
            </div>
            <Typography variant='span' color='accent-1' classN='header-text'>
              {copy.header}
            </Typography>
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
            className='filter-tags'
          >
            {filterTag}
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
            className='filter-tags-mobile'
          >
            {filterTagforMobile}
          </Col>
        </Row>
        <Post newsPosts={newsPosts} />
        {newsPosts.length === (limited + skip) && (
          <LoadMore onLoadMore={this.onLoadMore} />
        )}
      </Section>
    )
  }
}

function mapStateToProps (state) {
  return {
    sortType: getSortTypeSelector(state),
    filter: getFilterSelector(state),
    limited: getLimitedSelector(state),
    skip: getSkipSelector(state),
    newsTags: getNewsTagsSelector(state),
    newsPosts: getNewsPostsSelector(state)
  }
}

const mapDispatchToProps = {
  ...newsActions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
