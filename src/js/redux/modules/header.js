import { createAction, handleActions } from 'redux-actions'
import immutable from 'immutability-helper'

const GET_HEADER = 'GET_HEADER'
const UPDATE_HEADER = 'UPDATE_HEADER'

export const constants = {
  GET_HEADER,
  UPDATE_HEADER
}

// ------------------------------------
// Actions
// ------------------------------------
export const getHeader = createAction(GET_HEADER, () => ({}))
export const updateHeader = createAction(UPDATE_HEADER, header => ({ header }))

export const actions = {
  getHeader,
  updateHeader
}

export const reducers = {
  [UPDATE_HEADER]: (state, { payload }) => {
    return immutable(state, {
      header: { $set: payload.header }
    })
  }
}

export const initialState = () => {
  return {
    header: null
  }
}

export default handleActions(reducers, initialState())
