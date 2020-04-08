import {
  FETCH_ADD_FAILURE,
  FETCH_ADD_SUCCESS,
  FETCH_ADD_REQUEST,
  CHANGE_REQUEST_TYPE,
  SET_CURRENT_WORD,
} from '../actions/actionTypes'
import { combineReducers } from 'redux'

const fetchReducer = (
  state = {
    isFetching: false,
    errors: false,
    requestType: '',
    result: {},
    currentWord: {},
  },
  action
) => {
  switch (action.type) {
    case FETCH_ADD_REQUEST:
      return { ...state, isFetching: true, errors: false }
    case FETCH_ADD_FAILURE:
      return { ...state, isFetching: false, errors: action.error }
    case FETCH_ADD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errors: false,
        result: action.result,
      }
    case CHANGE_REQUEST_TYPE:
      return { ...state, requestType: action.requestType }
    case SET_CURRENT_WORD:
      return {...state,currentWord:action.response}
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  fetch: fetchReducer,
})
