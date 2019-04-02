import { put, fork, call, takeLatest } from 'redux-saga/effects'
import {
  constants as footerConstants,
  actions as footerActions
} from '../modules/footer'
import { getFooter } from '../../common/api/module/content'

export function * fetchFooter () {
  const response = yield call(getFooter)
  if (response.status === 200) {
    yield put(footerActions.updateFooter(response.data))
  } else {
    yield put(footerActions.updateFooter(null))
  }
}

function * watchGetFooter () {
  yield takeLatest(footerConstants.GET_FOOTER, fetchFooter)
}

export const footerSaga = [fork(watchGetFooter)]
