import { createSelector } from 'reselect'

const footerDataSelector = state => {
  const footer = state.footer
  return footer.footer
}

const resultSelector = createSelector(
  footerDataSelector,
  items => items
)

export const footerSelector = state => ({
  footer: resultSelector(state)
})
