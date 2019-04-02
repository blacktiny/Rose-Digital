import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'
import { ActionTypes } from './constants'

const GET_NEWS_LIST = 'GET_NEWS_LIST'
const UPDATE_NEWS_LIST = 'UPDATE_NEWS_LIST'

export const constants = {
  GET_NEWS_LIST,
  UPDATE_NEWS_LIST
}

export const getNewsPosts = createAction(ActionTypes.GET_NEWS_POSTS)
export const updateNewsPosts = createAction(
  ActionTypes.UPDATE_NEWS_POSTS,
  data => (data)
)
export const getTopNewsPosts = createAction(ActionTypes.GET_TOP_NEWS_POSTS)
export const updateTopNewsPosts = createAction(
  ActionTypes.UPDATE_TOP_NEWS_POSTS,
  topPosts => ({ topPosts })
)
export const getNewsTags = createAction(ActionTypes.GET_NEWS_TAGS, () => ({}))
export const updateNewsTags = createAction(
  ActionTypes.UPDATE_NEWS_TAGS,
  newsTags => ({ newsTags })
)
export const setSortType = createAction(
  ActionTypes.SET_SORT_TYPE,
  sortType => ({ sortType })
)
export const setFilter = createAction(ActionTypes.SET_FILTERS, filter => ({
  filter
}))
export const setPostsLimited = createAction(
  ActionTypes.SET_POSTS_LIMITED,
  limited => ({ limited })
)

export const getIndividualNewsPost = createAction(
  ActionTypes.GET_INDIVIDUAL_NEWS_POST
)
export const updateIndividualNewsPost = createAction(
  ActionTypes.UPDATE_INDIVIDUAL_NEWS_POST,
  blogPost => ({ blogPost })
)

export const getNewsList = createAction(GET_NEWS_LIST, () => ({}))
export const updateNewsList = createAction(UPDATE_NEWS_LIST, newsList => ({
  newsList
}))

export const actions = {
  getNewsPosts,
  updateNewsPosts,
  getTopNewsPosts,
  updateTopNewsPosts,
  getNewsTags,
  updateNewsTags,
  setSortType,
  setFilter,
  setPostsLimited,

  getIndividualNewsPost,
  updateIndividualNewsPost,

  getNewsList,
  updateNewsList
}

export const reducers = {
  [ActionTypes.UPDATE_NEWS_POSTS]: (state, { payload }) => {
    let newsPosts = state.get('newsPosts')
    const filter = state.get('filter')

    if (filter !== payload.tag || !payload.skip) {
      state = state.set('filter', payload.tag)
      state = state.set('newsPosts', payload.newsPosts)
    } else {
      state = state.set('newsPosts', newsPosts.concat(payload.newsPosts))
    }

    state = state.set('skip', payload.skip)

    return state
  },
  [ActionTypes.UPDATE_TOP_NEWS_POSTS]: (state, { payload }) => {
    return state.set('topPosts', payload.topPosts)
  },
  [ActionTypes.UPDATE_NEWS_TAGS]: (state, { payload }) => {
    return state.set('newsTags', payload.newsTags)
  },
  [ActionTypes.SET_SORT_TYPE]: (state, { payload }) => {
    return state.set('sortType', payload.sortType)
  },
  [ActionTypes.SET_FILTERS]: (state, { payload }) => {
    return state.set('filter', payload.filter)
  },
  [ActionTypes.SET_POSTS_LIMITED]: (state, { payload }) => {
    return state.set('skip', payload.limited)
  },
  [ActionTypes.UPDATE_INDIVIDUAL_NEWS_POST]: (state, { payload }) => {
    return state.set('currentPost', payload.blogPost)
  },
  [UPDATE_NEWS_LIST]: (state, { payload }) => {
    return state.merge({
      payload
    })
  }
}

export const initialState = () =>
  Map({
    sortType: 'recent',
    newsTags: [],
    filter: '',
    skip: 0,
    limited: 10,
    topPosts: [],
    newsPosts: [],

    currentPost: null,

    newsList: null
  })

export default handleActions(reducers, initialState())
