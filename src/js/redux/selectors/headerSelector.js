import { createSelector } from 'reselect'

const headerDataSelector = state => {
  const header = state.header
  return header.header
}

const resultSelector = createSelector(
  headerDataSelector,
  items => items
)

export const headerSelector = state => ({
  header: resultSelector(state)
})
