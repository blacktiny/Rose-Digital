import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid'
import { connect } from 'react-redux'

import NewsPreview from '~layout/Post/NewsPreview'
import Section from '~layout/Section'
import Typography from '~layout/Typography'
import Link from '~layout/Link'
import Title from '~layout/Title'

import { actions as newsActions } from '../../../redux/modules/news'
import { newsSelector } from '../../../redux/selectors/newsSelector'

class News extends React.PureComponent {
  static propTypes = {
    newsList: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { getNewsList } = this.props

    getNewsList()
  }

  render() {
    const { newsList } = this.props
    const list = newsList.newsList

    const newsPreviewBlocks =
      list &&
      list.newsPreview.map((news, i) => {
        return (
          <Col xl={6} lg={6} mdOffset={0} md={6} xs={10} sm={10} key={i}>
            <NewsPreview
              src={news.src}
              title={news.title}
              subtitle={news.subtitle}
              publishDate={new Date()}
            />
          </Col>
        )
      })

    return (
      <Section section="news">
        <Row>
          <Col
            xl={2}
            xlOffset={1}
            lg={2}
            lgOffset={1}
            md={3}
            mdOffset={1}
            sm={10}
            smOffset={1}
            xs={10}
            xsOffset={1}
          >
            <Link type="new" variant="path" link="/news">
              <Title
                title={list && list.title}
                noHighlight
                icon="new-window"
                iconColor="news"
              />
            </Link>
          </Col>
        </Row>
        <Row className="newsletter-row">
          <Col
            xlOffset={1}
            lg={10}
            lgOffset={1}
            md={10}
            mdOffset={1}
            smOffset={1}
            xsOffset={1}
            className="outer-col"
          >
            <Row>{newsPreviewBlocks}</Row>
          </Col>
        </Row>
        <Row>
          <Col
            xl={3}
            xlOffset={8}
            lg={4}
            lgOffset={7}
            md={4}
            mdOffset={7}
            sm={10}
            smOffset={1}
            xsOffset={1}
            className="home-header-link"
          >
            <Typography variant="header" align="right" classN="left-mobile">
              <Link
                variant="path"
                link="/news"
                icon="arrow-down"
                iconClass="right"
                iconColor="news"
                color="news"
                size="size16"
              >
                {list && list.link}
              </Link>
            </Typography>
          </Col>
        </Row>
      </Section>
    )
  }
}

const mapStateToProps = state => ({
  newsList: newsSelector(state),
})

const mapDispatchToProps = {
  ...newsActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
