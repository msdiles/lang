import {
  FETCH_ADD_FAILURE,
  FETCH_ADD_SUCCESS,
  FETCH_ADD_REQUEST,
  FETCH_FIND_REQUEST,
  FETCH_FIND_SUCCESS,
  FETCH_FIND_FAILURE,
  FETCH_UPDATE_SUCCESS,
  FETCH_UPDATE_FAILURE,
  FETCH_UPDATE_REQUEST,
  FETCH_DELETE_REQUEST,
  FETCH_DELETE_SUCCESS,
  FETCH_DELETE_FAILURE,
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

export const fetchFindSuccess = (result) => ({
  type: FETCH_ADD_SUCCESS,
  result,
})

export const fetchFindFailure = (error) => ({
  type: FETCH_ADD_FAILURE,
  error,
})

export const fetchFindRequest = (word) => ({
  type: FETCH_ADD_REQUEST,
  word,
})

export const fetchUpdateSuccess = (result) => ({
  type: FETCH_ADD_SUCCESS,
  result,
})

export const fetchUpdateFailure = (error) => ({
  type: FETCH_ADD_FAILURE,
  error,
})

export const fetchUpdateRequest = (word) => ({
  type: FETCH_ADD_REQUEST,
  word,
})

export const fetchDeleteSuccess = (result) => ({
  type: FETCH_ADD_SUCCESS,
  result,
})

export const fetchDeleteFailure = (error) => ({
  type: FETCH_ADD_FAILURE,
  error,
})

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

export const fetchFind = (word, language, requestType) => {
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

export const fetchAdd = () => {}
export const fetchUpdate = () => {}
export const fetchDelete = () => {}
