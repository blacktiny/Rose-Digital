import { put, fork, call, takeLatest, select } from 'redux-saga/effects'
import {
  constants as caseStudyConstants,
  actions as caseStudyActions
} from '../modules/caseStudy'
import { caseSelector } from '../selectors/caseStudySelector'
import { getCaseStudyList, getCaseStudy } from '../../common/api/module/content'

export function * fetchCaseStudy () {
  const project = yield select(caseSelector)
  yield put(caseStudyActions.updateCaseStudy(null))
  const response = yield call(getCaseStudy, project.project)
  if (response.status === 200) {
    yield put(caseStudyActions.updateCaseStudy(response.data))
  }
}

export function * fetchCaseStudyList () {
  const response = yield call(getCaseStudyList)
  if (response.status === 200) {
    yield put(caseStudyActions.updateCaseStudyList(response.data))
  } else {
    yield put(caseStudyActions.updateCaseStudyList(null))
  }
}

function * watchGetCaseStudy () {
  yield takeLatest(caseStudyConstants.SET_CASE_STUDY, fetchCaseStudy)
}

function * watchGetCaseStudyList () {
  yield takeLatest(caseStudyConstants.GET_CASE_STUDY_LIST, fetchCaseStudyList)
}

export const caseStudySaga = [
  fork(watchGetCaseStudy),
  fork(watchGetCaseStudyList)
]
