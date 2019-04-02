import { createAction, handleActions } from 'redux-actions'
import immutable from 'immutability-helper'

const GET_FOOTER = 'GET_FOOTER'
const UPDATE_FOOTER = 'UPDATE_FOOTER'

export const constants = {
  GET_FOOTER,
  UPDATE_FOOTER
}

// ------------------------------------
// Actions
// ------------------------------------
export const getFooter = createAction(GET_FOOTER, () => ({}))
export const updateFooter = createAction(UPDATE_FOOTER, footer => ({ footer }))

export const actions = {
  getFooter,
  updateFooter
}

export const reducers = {
  [UPDATE_FOOTER]: (state, { payload }) => {
    return immutable(state, {
      footer: { $set: payload.footer }
    })
  }
}

export const initialState = () => {
  return {
    footer: null
  }
}

export default handleActions(reducers, initialState())
