import React, { Fragment } from 'react'
import Section from '~layout/Section'
import HeroMedia from '~layout/HeroMedia'
import ClientWorkTypeAndDescription from './layout/clientWorkTypeAndDescription'
import Media from './layout/media'
import KeyPerformance from './layout/keyPerformance'
import ViewNext from './layout/viewNext'
import CaseStudyList from '../CaseStudyList'
import PropTypes from 'prop-types'
import './layout/style.scss'
import { connect } from 'react-redux'
import {
  caseStudySelector,
  caseSelector
} from '../../redux/selectors/caseStudySelector'
import { actions as caseStudyActions } from '../../redux/modules/caseStudy'

const _ = require('lodash')

class CaseStudy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      viewNext: {
        link: 'view next project'
      },
      keyPerformance: {
        title: 'key performance indicators'
      }
    }
  }

  componentDidUpdate () {
    const { project } = this.props.match.params
    const { setCaseStudy, projectCase } = this.props
    if (projectCase.project !== project) {
      setCaseStudy(project)
      this.setState({
        currentWorkStudy: project
      })
    }
  }

  render () {
    const { caseStudy } = this.props

    let heroMedia = {}
    let clientWorkTypeAndDescription = {}
    let media = {}
    let keyPerformanceBody = {}
    let next = null

    const { currentWorkStudy } = this.state
    const { viewNext, keyPerformance } = this.state

    let kpis = null

    if (caseStudy.caseStudy) {
      const {
        hero,
        case_study_details,
        next_case_study,
        media_section
      } = caseStudy.caseStudy
      kpis = caseStudy.caseStudy.kpis
      if (hero) {
        if (hero.length > 0) {
          if (hero[0].image) {
            heroMedia.type = 'image'
            heroMedia.media = hero[0].image.file.url
          } else if (hero[0].video) {
            heroMedia.type = 'video'
            heroMedia.media = hero[0].video.video.url
          }
        }
      }
      clientWorkTypeAndDescription.body = []
      clientWorkTypeAndDescription.body.push({
        copy: case_study_details.description
      })
      clientWorkTypeAndDescription.skillDescription = case_study_details.bullets
      clientWorkTypeAndDescription.title = case_study_details.title
      clientWorkTypeAndDescription.workType = ''
      const agencyPartnerLogo = case_study_details.agency_partner_logo
      clientWorkTypeAndDescription.agencyPartner = {
        logo: agencyPartnerLogo && agencyPartnerLogo.url,
        name: agencyPartnerLogo && 'agency partner'
      }
      next = next_case_study.title.substring(1)
      media = _.cloneDeep(media_section)
      media = media.map(item => {
        if (item.image) {
          if (item.version === 'beforeAfter') {
            item.image = item.image.map(image => image.url)
          } else if (item.version === 'img4Img6') {
            item.image = item.image.map(image => image.url)
            item.description = item.caption
          } else if (item.version === 'img5Img5') {
            item.image = item.image.map(image => image.url)
            item.description = item.caption
          } else if (item.image.length > 0) {
            item.image = item.image[0].url
          }
        }
        return item
      })
    }

    return (
      <Fragment>
        {caseStudy.caseStudy && (
          <Section section='case-studies' noMargin>
            <HeroMedia src={heroMedia.media} type={heroMedia.type} />
            <ClientWorkTypeAndDescription copy={clientWorkTypeAndDescription} />
            <Media copy={media} />
            {kpis && (
              <KeyPerformance
                copy={keyPerformanceBody}
                kpis={kpis}
                title={keyPerformance.title}
              />
            )}
            <ViewNext copy={viewNext} next={next} />
          </Section>
        )}
        <CaseStudyList currentWorkStudy={currentWorkStudy} />
      </Fragment>
    )
  }
}

CaseStudy.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  })
}

const mapDispatchToProps = {
  ...caseStudyActions
}
const mapStateToProps = state => ({
  caseStudy: caseStudySelector(state),
  projectCase: caseSelector(state)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CaseStudy)
