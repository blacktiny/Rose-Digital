import React from 'react'
import { Row } from 'react-flexbox-grid'
import classNames from 'classnames'

import { getCopy } from '~lib/copyDefaults'
import PropTypes from 'prop-types'
import PostPreview from '~layout/Post/PostPreview'

import { connect } from 'react-redux'
import { caseStudyListSelector } from '../../../redux/selectors/caseStudySelector'
import { actions as caseStudyActions } from '../../../redux/modules/caseStudy'

class CaseStudyListContainer extends React.Component {
  componentDidMount () {
    const { getCaseStudyList } = this.props
    getCaseStudyList()
  }

  render () {
    const { caseStudyList } = this.props
    const isMobile = getCopy('window-width').mobileWindowWidth
    const caseStudyItems = caseStudyList.caseStudyList &&
      caseStudyList.caseStudyList.map(item => {
        const caseStudyDetails = item.case_study_details
        const title = caseStudyDetails ? caseStudyDetails.title : ''
        const content = caseStudyDetails
          ? caseStudyDetails.description.replace(/(<([^>]+)>)/gi, '')
          : ''
        let description = caseStudyDetails.work_category[0].title
        const { media_section } = caseStudyDetails
        if (media_section) {
          if (media_section.length > 0) {
            const { caption } = media_section[0]
            if (caption.length > 0) {
              descripton = caption[0]
            }
          }
        }
        let type = ''
        let src = ''
        const { hero, style } = item
        if (hero) {
          if (hero.length > 0) {
            if (hero[0].video) {
              type = 'video'
              src = hero[0].video.video.url
            } else if (hero[0].image) {
              type = 'image'
              src = hero[0].image.file.url
            }
          }
        }
        let { url } = item
        if (url.startsWith('/')) {
          url = url.substring(1)
        }

        const result = {
          postPreviewTitle: title,
          description,
          content,
          variant: style ? style.variant : 'default',
          align: style ? style.align : '',
          type,
          src,
          path: url,
        }
        return result
      })

    const { currentWorkStudy } = this.props
    let halfWidthCounter = 0
    let siblingIndex
    let hidePostIndex
    let startsHalfRowWidthIndexes = []

    caseStudyItems.forEach((caseStudy, i) => {
      const { variant, path } = caseStudy
      const hidePostPreview = path === currentWorkStudy
      if (hidePostPreview) hidePostIndex = i

      if (variant === 'halfWidth') {
        halfWidthCounter++
        const startsHalfRow = halfWidthCounter % 2 === 1
        const isLastTwoBlocks = hidePostIndex >= caseStudyItems.length - 2
        startsHalfRow && startsHalfRowWidthIndexes.push(i)
        if (hidePostPreview && !isLastTwoBlocks) {
          siblingIndex = startsHalfRow
            ? caseStudyItems[i + 1] && i + 1
            : caseStudyItems[i - 1] && i - 1
        }
      }
    })

    const caseStudiesContainer = caseStudyItems.map((caseStudy, i) => {
      const {
        type,
        src,
        align,
        postPreviewTitle,
        description,
        content,
        variant,
        path
      } = caseStudy

      const isLastBlock = hidePostIndex === caseStudyItems.length - 1
      const variantCaseStudy = siblingIndex === i ? 'fullWidthFlex' : variant
      const displayContentBlock = hidePostIndex !== i
      const isBottomRow =
        !isMobile &&
        isLastBlock &&
        i >= caseStudyItems.length - 3 &&
        'bottom-row'
      const startsHalfRow =
        (startsHalfRowWidthIndexes.includes(i) || siblingIndex === i) &&
        'starts-half-width-row'

      const postPreview = displayContentBlock && (
        <PostPreview
          key={i}
          type={type}
          src={src}
          align={align}
          title={postPreviewTitle}
          description={description}
          content={content}
          variant={variantCaseStudy}
          path={path}
          classN={classNames(startsHalfRow, isBottomRow)}
        />
      )
      return postPreview
    })

    return <Row>{caseStudiesContainer}</Row>
  }
}

CaseStudyListContainer.propTypes = {
  currentWorkStudy: PropTypes.string
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
)(CaseStudyListContainer)
