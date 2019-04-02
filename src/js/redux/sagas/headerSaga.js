import { put, fork, call, takeLatest } from 'redux-saga/effects'
import {
  constants as headerConstants,
  actions as headerActions
} from '../modules/header'
import { getHeader } from '../../common/api/module/content'

export function * fetchHeader () {
  const response = yield call(getHeader)
  if (response.status === 200) {
    yield put(headerActions.updateHeader(response.data))
  } else {
    yield put(headerActions.updateHeader(null))
  }
}

function * watchGetHeader () {
  yield takeLatest(headerConstants.GET_HEADER, fetchHeader)
}

export const headerSaga = [fork(watchGetHeader)]
