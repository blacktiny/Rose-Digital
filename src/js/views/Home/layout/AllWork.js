import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import PostPreview from '~layout/Post/PostPreview'
import Section from '~layout/Section'
import DescriptionBox from '~layout/DescriptionBox'
import Typography from '~layout/Typography'
import Link from '~layout/Link'

import { getCopy } from '~lib/copyDefaults'

import { connect } from 'react-redux'
import { caseStudyListSelector } from '../../../redux/selectors/caseStudySelector'
import { actions as caseStudyActions } from '../../../redux/modules/caseStudy'

class AllWork extends React.PureComponent {
  componentDidMount () {
    const { getCaseStudyList } = this.props
    getCaseStudyList()
  }

  render () {
    const { caseStudyList } = this.props
    const copy = getCopy('home')
    const { about, whatWeDo, allWorkTitle } = copy
    let allWorkList = null
    if (caseStudyList.caseStudyList) {
      allWorkList = caseStudyList.caseStudyList
    }

    const postPreviewArray = allWorkList &&
      allWorkList.map((caseStudy, i) => {
        const { hero, case_study_details } = caseStudy
        let { url } = caseStudy
        if (url.startsWith('/')) {
          url = url.substring(1)
        }
        let src = ''
        let type = ''
        let content = case_study_details.work_category[0].title
        const variant = 'default'
        const { title, description } = case_study_details
        if (hero && hero.length) {
          if (hero[0].video) {
            type = 'video'
            src = hero[0].video.video.url
          } else if (hero[0].image) {
            type = 'image'
            src = hero[0].image.file.url
          }
        }

        return (
          <PostPreview
            type={type}
            src={src}
            title={title}
            description={content}
            content={description
              .replace(/(<([^>]+)>)/gi, '')
              .replace(/&nbsp;/g, ' ')}
            variant={variant}
            path={url}
          />
        )
      })

    return (
      <Section section='case-studies'>
        <Row>
          <Col
            xs={10}
            xsOffset={1}
            sm={10}
            smOffset={1}
            md={5}
            mdOffset={1}
            lg={7}
            lgOffset={1}
          >
            {postPreviewArray[0]}
          </Col>
          <Col xsOffset={1} xs={10} sm={10} mdOffset={0} md={5} lg={3} xl={3}>
            <DescriptionBox
              color='about'
              accent='accent-navy'
              sectionTitle={about.sectionTitle}
              title={about.title}
              path={about.path}
            >
              {about.content}
            </DescriptionBox>
          </Col>
        </Row>
        <Row>
          <Col
            xs={10}
            xsOffset={1}
            sm={10}
            smOffset={1}
            md={10}
            mdOffset={1}
            lg={10}
            lgOffset={1}
          >
            <Row>
              {postPreviewArray[1]}
              {postPreviewArray[2]}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            xs={10}
            xsOffset={1}
            sm={10}
            smOffset={1}
            md={10}
            mdOffset={1}
            lg={10}
            lgOffset={1}
          >
            <Row>
              <Col md={6} lg={6} xl={6}>
                <DescriptionBox
                  color='what-we-do'
                  accent='accent-green'
                  sectionTitle={whatWeDo.sectionTitle}
                  path={whatWeDo.path}
                  title={whatWeDo.title}
                >
                  {whatWeDo.content}
                </DescriptionBox>
              </Col>
              {postPreviewArray[3]}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            xs={10}
            xsOffset={1}
            sm={10}
            smOffset={1}
            md={10}
            mdOffset={1}
            lg={10}
            lgOffset={1}
          >
            {postPreviewArray[4]}
          </Col>
        </Row>
        <Row>
          <Col
            xs={10}
            xsOffset={1}
            sm={10}
            smOffset={1}
            md={10}
            mdOffset={1}
            lg={10}
            lgOffset={1}
          >
            {postPreviewArray[5]}
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
            className='home-header-link'
          >
            <Typography variant='header' align='right' classN='left-mobile'>
              <Link
                variant='path'
                link='/work'
                icon='arrow-down'
                iconClass='right'
                iconColor='case-studies'
                color='case-studies'
                size='size16'
              >
                {allWorkTitle}
              </Link>
            </Typography>
          </Col>
        </Row>
      </Section>
    )
  }
}

const mapDispatchToProps = {
  ...caseStudyActions
}
const mapStateToProps = state => ({
  caseStudyList: caseStudyListSelector(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllWork)
