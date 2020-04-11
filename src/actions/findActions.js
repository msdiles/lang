import {
  FETCH_FIND_FAILURE,
  FETCH_FIND_SUCCESS,
  FETCH_FIND_REQUEST,
} from './actionTypes'

import { changeRequestType, setCurrentWord } from './actions'

export const fetchFindSuccess = (result) => ({
  type: FETCH_FIND_SUCCESS,
  result,
})

export const fetchFindFailure = (error) => ({
  type: FETCH_FIND_FAILURE,
  error,
})

export const fetchFindRequest = () => ({
  type: FETCH_FIND_REQUEST,
})

export const fetchFind = (word, language, requestType) => {
  return (dispatch) => {
    dispatch(fetchFindRequest())
    return fetch('/api/word/read', {
      method: 'POST',
      body: JSON.stringify({ language: language.toLowerCase(), word: word }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(fetchFindSuccess(response))
        dispatch(changeRequestType(requestType))
        dispatch(setCurrentWord(response))
      })
      .catch((err) => dispatch(fetchFindFailure(err)))
  }
}
