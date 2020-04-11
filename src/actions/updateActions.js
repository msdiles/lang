import {
  FETCH_UPDATE_SUCCESS,
  FETCH_UPDATE_FAILURE,
  FETCH_UPDATE_REQUEST,
} from './actionTypes'

import { changeRequestType, setCurrentWord } from './actions'

export const fetchUpdateSuccess = (result) => ({
  type: FETCH_UPDATE_SUCCESS,
  result,
})

export const fetchUpdateFailure = (error) => ({
  type: FETCH_UPDATE_FAILURE,
  error,
})

export const fetchUpdateRequest = () => ({
  type: FETCH_UPDATE_REQUEST,
})

export const fetchUpdate = (word) => {
  console.log(word)
  return (dispatch) => {
    dispatch(fetchUpdateRequest())
    return fetch('/api/word/update', {
      method: 'PUT',
      body: JSON.stringify({ word: word, id: word._id,language:word.language }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(fetchUpdateSuccess(response))
        dispatch(changeRequestType('update'))
        dispatch(setCurrentWord({}))
      })
      .catch((err) => dispatch(fetchUpdateFailure(err)))
  }
}
