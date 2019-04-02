import { createSelector } from 'reselect'

const caseStudyListDataSelector = state => {
  const caseStudyList = state.caseStudy
  const result = caseStudyList.caseStudyList ? caseStudyList.caseStudyList : []
  return result ? result.sort((a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }) : null
}

const caseStudyDataSelector = state => {
  const caseStudy = state.caseStudy
  return caseStudy.caseStudy
}

const getCaseSelector = state => {
  const project = state.caseStudy
  return project.case
}

const resultSelector = createSelector(
  caseStudyDataSelector,
  items => items
)

const resultListSelector = createSelector(
  caseStudyListDataSelector,
  items => items
)

export const caseStudyListSelector = state => ({
  caseStudyList: resultListSelector(state)
})

export const caseStudySelector = state => ({
  caseStudy: resultSelector(state)
})

export const caseSelector = state => ({
  project: getCaseSelector(state)
})
