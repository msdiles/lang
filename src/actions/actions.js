import {
  FETCH_ADD_REQUEST,
  CLEAR_RESULT,
  CHANGE_REQUEST_TYPE,
  SET_CURRENT_WORD,
} from './actionTypes'

export const fetchDeleteRequest = (word) => ({
  type: FETCH_ADD_REQUEST,
  word,
})

export const changeRequestType = (requestType) => ({
  type: CHANGE_REQUEST_TYPE,
  requestType,
})

export const clearResult = () => ({
  type: CLEAR_RESULT,
})

export const setCurrentWord = (response) => ({
  type: SET_CURRENT_WORD,
  response,
})
