import {
  FETCH_DELETE_REQUEST,
  FETCH_DELETE_SUCCESS,
  FETCH_DELETE_FAILURE,
} from './actionTypes'

import { changeRequestType, setCurrentWord } from './actions'

export const fetchDeleteSuccess = (result) => ({
  type: FETCH_DELETE_SUCCESS,
  result,
})

export const fetchDeleteFailure = (error) => ({
  type: FETCH_DELETE_FAILURE,
  error,
})

export const fetchDeleteRequest = () => ({
  type: FETCH_DELETE_REQUEST,
})

export const fetchDelete = (language, id) => {
  return (dispatch) => {
    dispatch(fetchDeleteRequest())
    return fetch('/api/word/delete', {
      method: 'DELETE',
      body: JSON.stringify({ language: language.toLowerCase(), id: id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(fetchDeleteSuccess(response))
        dispatch(changeRequestType('delete'))
        dispatch(setCurrentWord({}))
      })
      .catch((err) => dispatch(fetchDeleteFailure(err)))
  }
}
