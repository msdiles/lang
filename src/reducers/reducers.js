import {
  FETCH_FIND_FAILURE,
  FETCH_FIND_SUCCESS,
  FETCH_FIND_REQUEST,
  CHANGE_REQUEST_TYPE,
  SET_CURRENT_WORD,
  FETCH_DELETE_REQUEST,
  FETCH_DELETE_FAILURE,
  FETCH_DELETE_SUCCESS,
  FETCH_UPDATE_REQUEST,
  FETCH_UPDATE_FAILURE,
  FETCH_UPDATE_SUCCESS,
  FETCH_ADD_REQUEST,
  FETCH_ADD_FAILURE,
  FETCH_ADD_SUCCESS,
  CLEAR_RESULT,
  LOG_OUT,
  FETCH_REQUEST,
  FETCH_REQUEST_LOADING,
  FETCH_REQUEST_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
} from '../actions/actionTypes'
import { combineReducers } from 'redux'

//TODO разделить на отдельные редьюсеры
const fetchReducer = (
  state = {
    permissions: ['guest', 'user', 'moderator', 'admin'],
    isFetching: false,
    errors: false,
    requestType: '',
    result: {},
    currentWord: {},
    user: { loading: false, error: false, startFetching: false, role: 'guest' },
    response: { isFetching: false, errors: false, result: {} },
  },
  action
) => {
  switch (action.type) {
    case FETCH_FIND_REQUEST:
      return { ...state, isFetching: true, errors: false }
    case FETCH_FIND_FAILURE:
      return { ...state, isFetching: false, errors: action.error }
    case FETCH_FIND_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errors: false,
        result: action.result,
      }
    case FETCH_DELETE_REQUEST:
      return { ...state, isFetching: true, errors: false }
    case FETCH_DELETE_FAILURE:
      return { ...state, isFetching: false, errors: action.error }
    case FETCH_DELETE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errors: false,
        result: action.result,
      }
    case FETCH_UPDATE_REQUEST:
      return { ...state, isFetching: true, errors: false }
    case FETCH_UPDATE_FAILURE:
      return { ...state, isFetching: false, errors: action.error }
    case FETCH_UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errors: false,
        result: action.result,
      }
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
      return { ...state, currentWord: action.response }
    case CLEAR_RESULT:
      return { ...state, result: {} }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          loading: false,
          error: false,
          ...action.user,
          startFetching: true,
        },
      }
    case LOGIN_LOADING:
      return {
        ...state,
        user: {
          loading: true,
          error: false,
          startFetching: true,
          role: 'guest',
        },
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        user: {
          loading: false,
          error: true,
          errors:action.err,
          startFetching: true,
          role: 'guest',
        },
      }
    case LOG_OUT:
      return {
        ...state,
        user: {
          loading: false,
          error: false,
          startFetching: true,
          role: 'guest',
        },
      }
    case FETCH_REQUEST:
      return {
        ...state,
        response: {
          ...state.response,
          isFetching: false,
          errors: false,
          result: action.result,
        },
      }
    case FETCH_REQUEST_LOADING:
      return {
        ...state,
        response: { ...state.response, isFetching: true, errors: false },
      }
    case FETCH_REQUEST_FAILURE:
      return {
        ...state,
        response: { ...state.response, isFetching: false, errors: action.err },
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  fetch: fetchReducer,
})
