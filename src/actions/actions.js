import {
  FETCH_ADD_FAILURE,
  FETCH_ADD_SUCCESS,
  FETCH_ADD_REQUEST,
  CLEAR_RESULT,
  CHANGE_REQUEST_TYPE,
  SET_CURRENT_WORD,
} from './actionTypes'

export const fetchAddSuccess = (result) => ({
  type: FETCH_ADD_SUCCESS,
  result,
})

export const fetchAddFailure = (error) => ({
  type: FETCH_ADD_FAILURE,
  error,
})

export const fetchAddRequest = (word) => ({
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

export const setCurrentWord=(response)=>({
  type:SET_CURRENT_WORD,
response
})

export const fetchAdd = (word, language, requestType) => {
  return (dispatch) => {
    dispatch(fetchAddRequest(word))
    return fetch('/api/word/read', {
      method: 'POST',
      body: JSON.stringify({ language: language.toLowerCase(), word: word }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(fetchAddSuccess(response))
        dispatch(changeRequestType(requestType))
        dispatch(setCurrentWord(response))

      })
      .catch((err) => dispatch(fetchAddFailure(err)))
  }
}
