import { createAction, handleActions } from 'redux-actions'
import immutable from 'immutability-helper'

const SET_CASE_STUDY = 'SET_CASE_STUDY'
const UPDATE_CASE_STUDY = 'UPDATE_CASE_STUDY'
const GET_CASE_STUDY_LIST = 'GET_CASE_STUDY_LIST'
const UPDATE_CASE_STUDY_LIST = 'UPDATE_CASE_STUDY_LIST'

export const constants = {
  SET_CASE_STUDY,
  UPDATE_CASE_STUDY,
  GET_CASE_STUDY_LIST
}

// ------------------------------------
// Actions
// ------------------------------------
export const setCaseStudy = createAction(SET_CASE_STUDY, project => ({
  project
}))
export const getCaseStudyList = createAction(GET_CASE_STUDY_LIST, () => ({}))
export const updateCaseStudy = createAction(UPDATE_CASE_STUDY, caseStudy => ({
  caseStudy
}))
export const updateCaseStudyList = createAction(
  UPDATE_CASE_STUDY_LIST,
  caseStudyList => ({ caseStudyList })
)

export const actions = {
  setCaseStudy,
  getCaseStudyList,
  updateCaseStudy,
  updateCaseStudyList
}

export const reducers = {
  // [REHYDRATE]: state => state.set('caseStudyList', []),
  [SET_CASE_STUDY]: (state, { payload }) => {
    return immutable(state, {
      case: { $set: payload.project }
    })
  },
  [UPDATE_CASE_STUDY]: (state, { payload }) => {
    return immutable(state, {
      caseStudy: { $set: payload.caseStudy }
    })
  },
  [UPDATE_CASE_STUDY_LIST]: (state, { payload }) => {
    return immutable(state, {
      caseStudyList: { $set: payload.caseStudyList }
    })
  }
}

export const initialState = () => {
  return {
    caseStudyList: null,
    caseStudy: null,
    case: null
  }
}

export default handleActions(reducers, initialState())
