import { createSelector } from 'reselect'

const sortTypeSelector = state => {
  let newsMap = state.news
  if (newsMap) {
    const sortType = newsMap.get('sortType')
    return sortType
  } else {
    return null
  }
}

const filterSelector = state => {
  let newsMap = state.news
  if (newsMap) {
    const filter = newsMap.get('filter')
    return filter
  } else {
    return null
  }
}

const limitedSelector = state => {
  let newsMap = state.news
  if (newsMap) {
    const limited = newsMap.get('limited')
    return limited
  } else {
    return null
  }
}

const skipSelector = state => {
  let newsMap = state.news
  if (newsMap) {
    const skip = newsMap.get('skip')
    return skip
  } else {
    return null
  }
}

const newsTagsSelector = state => {
  let newsMap = state.news
  if (newsMap) {
    const newsTagsMap = newsMap.get('newsTags')
    const newsTags = []
    newsTagsMap.map((tag, index) => {
      newsTags.push(tag.title)
    })
    return newsTags
  } else {
    return null
  }
}

const topNewsPostsSelector = state => {
  let newsMap = state.news
  if (newsMap) {
    const topPosts = newsMap.get('topPosts')
    return topPosts
  } else {
    return null
  }
}

const newsPostsSelector = state => {
  let newsMap = state.news
  if (newsMap) {
    const newsPosts = newsMap.get('newsPosts')
    return newsPosts
  } else {
    return null
  }
}

const newsIndividualPostSelector = state => {
  let newsMap = state.news
  if (newsMap) {
    const newsPosts = newsMap.get('currentPost')
    if (newsPosts) {
      return newsPosts[0]
    } else {
      return null
    }
  } else {
    return null
  }
}

const newsDataSelector = state => {
  let newsMap = state.news
  const payloadMap = newsMap.get('payload')
  if (payloadMap) {
    const newsList = payloadMap.get('newsList')
    const title = newsList.get('title')
    const link = newsList.get('link')
    const newsPreview = newsList.get('newsPreview')
    const list = newsPreview.map(item => {
      const result = {}
      item.forEach((value, key) => {
        result[key] = value
      })
      return result
    })
    return {
      title,
      newsPreview: list.toArray(),
      link
    }
  }
  return null
}

const resultSelector = createSelector(
  newsDataSelector,
  items => items
)

export const getSortTypeSelector = createSelector(
  sortTypeSelector,
  sortType => sortType
)
export const getFilterSelector = createSelector(
  filterSelector,
  filter => filter
)
export const getLimitedSelector = createSelector(
  limitedSelector,
  limited => limited
)
export const getSkipSelector = createSelector(
  skipSelector,
  skip => skip
)
export const getNewsTagsSelector = createSelector(
  newsTagsSelector,
  newsTags => newsTags
)
export const getTopNewsPostsSelector = createSelector(
  topNewsPostsSelector,
  topPosts => topPosts
)
export const getNewsPostsSelector = createSelector(
  newsPostsSelector,
  newsPosts => newsPosts
)
export const getNewsIndividualPostSelector = createSelector(
  newsIndividualPostSelector,
  currentPost => currentPost
)

export const newsSelector = state => ({
  newsList: resultSelector(state)
})
