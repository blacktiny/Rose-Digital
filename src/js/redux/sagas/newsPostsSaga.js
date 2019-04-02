import { put, fork, call, takeLatest } from 'redux-saga/effects'
import { actions as newsActions } from '../modules/news'
import { ActionTypes } from '../modules/constants'
import {
  getBlogTags,
  getBlogPosts,
  getIndividualBlogPost
} from '../../common/api/module/content'

export function * fetchNewsPosts (action) {
  if (action.payload) {
    let sort = 'popular'
    if (action.payload.sort === 'recent') {
      sort = 'desc'
    } else if (action.payload.sort === 'oldest') {
      sort = 'asc'
    }

    const response = yield call(getBlogPosts, {
      sort,
      limit: action.payload.limit,
      skip: action.payload.skip,
      tag: action.payload.tag
    })

    if (response.status === 200) {
      yield put(newsActions.updateNewsPosts({ newsPosts: response.data, skip: action.payload.skip, tag: action.payload.tag }))
    } else {
      yield put(newsActions.updateNewsPosts(null))
    }
  } else {
    yield put(newsActions.updateNewsPosts(null))
  }
}

export function * fetchTopNewsPosts (action) {
  if (action.payload) {
    const response = yield call(getBlogPosts, {
      sort: 'popular',
      limit: action.payload.limit,
      skip: action.payload.skip,
      tag: ''
    })
    if (response.status === 200) {
      yield put(newsActions.updateTopNewsPosts(response.data))
    } else {
      yield put(newsActions.updateTopNewsPosts(null))
    }
  } else {
    yield put(newsActions.updateTopNewsPosts(null))
  }
}

export function * fetchNewsTags () {
  const response = yield call(getBlogTags)
  if (response.status === 200) {
    yield put(newsActions.updateNewsTags(response.data))
  } else {
    yield put(newsActions.updateNewsTags(null))
  }
}

export function * fetchIndividualPost (action) {
  const response = yield call(getIndividualBlogPost, action.payload)
  if (response.status === 200) {
    yield put(newsActions.updateIndividualNewsPost(response.data))
  } else {
    yield put(newsActions.updateIndividualNewsPost(null))
  }
}

function * watchGetNewsPosts () {
  yield takeLatest(ActionTypes.GET_NEWS_POSTS, fetchNewsPosts)
}

function * watchGetTopNewsPosts () {
  yield takeLatest(ActionTypes.GET_TOP_NEWS_POSTS, fetchTopNewsPosts)
}

function * watchGetNewsTags () {
  yield takeLatest(ActionTypes.GET_NEWS_TAGS, fetchNewsTags)
}

function * watchGetIndividualPost () {
  yield takeLatest(ActionTypes.GET_INDIVIDUAL_NEWS_POST, fetchIndividualPost)
}

export const newsPostsSaga = [
  fork(watchGetNewsPosts),
  fork(watchGetTopNewsPosts),
  fork(watchGetNewsTags),
  fork(watchGetIndividualPost)
]
