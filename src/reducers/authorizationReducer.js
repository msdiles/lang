import {
  LOG_OUT,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAILURE,
} from '../actions/actionTypes'

export const authorizationReducer = (
  state = {
    permissions: ['guest', 'user', 'moderator', 'admin'],
    user: { loading: false, error: false, startFetching: false, role: 'guest' },
  },
  action
) => {
  switch (action.type) {
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
          errors: action.err,
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
    default:
      return state
  }
}
