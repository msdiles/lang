import {
  FETCH_ADD_FAILURE,
  FETCH_ADD_SUCCESS,
  FETCH_ADD_REQUEST,
} from './actionTypes'

import { changeRequestType, setCurrentWord } from './actions'

export const fetchAddSuccess = (result) => ({
  type: FETCH_ADD_SUCCESS,
  result,
})

export const fetchAddFailure = (error) => ({
  type: FETCH_ADD_FAILURE,
  error,
})

export const fetchAddRequest = () => ({
  type: FETCH_ADD_REQUEST,
})

export const fetchAdd = (language, word) => {
  return (dispatch) => {
    dispatch(fetchAddRequest)
    return fetch('/api/word/create', {
      method: 'POST',
      body: JSON.stringify({ language: language.toLowerCase(), word: word }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(fetchAddSuccess(response))
        dispatch(changeRequestType('add'))
        dispatch(setCurrentWord({}))
      })
      .catch((err) => dispatch(fetchAddFailure(err)))
  }
}
