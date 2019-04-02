import { put, fork, takeLatest } from 'redux-saga/effects'
import {
  constants as newsConstants,
  actions as newsActions
} from '../modules/news'
import { getCopy } from '~lib/copyDefaults'

export function * fetchNews () {
  // pretend there is an api call
  const copy = getCopy('home').news

  yield put(newsActions.updateNewsList(copy))
}

function * watchGetNews () {
  yield takeLatest(newsConstants.GET_NEWS_LIST, fetchNews)
}

export const newsSaga = [fork(watchGetNews)]
