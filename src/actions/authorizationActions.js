import {
  LOG_OUT,
  LOGIN_USER,
  LOGIN_LOADING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './actionTypes'
import { getFingerprint } from '../utils/getFingetprint'

export const loginUser = (user) => ({
  type: LOGIN_USER,
  user,
})

export const loginLoading = () => ({
  type: LOGIN_LOADING,
})

export const loginFailure = (err) => ({
  type: LOGIN_FAILURE,
  err,
})

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
})

export const fetchLogIn = (user) => {
  return (dispatch) => {
    return getFingerprint()
      .then((fingerprint) => {
        dispatch(logIn(user, fingerprint))
      })
      .catch((err) => dispatch(loginFailure(err)))
  }
}

//изменить catch на getFingerprint
export const logIn = (user, fingerprint) => {
  const { email, password } = user
  return (dispatch) => {
    dispatch(loginLoading())
    return fetch('/api/profile/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email, password, fingerprint: fingerprint }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) {
          dispatch(loginFailure(result.error))
        } else if (result.success === false) {
          dispatch(
            loginFailure({
              message: 'Неверно указан адрес эл. почты или пароль.',
            })
          )
        } else if (result.success === true) {
          localStorage.setItem('accessToken', result.accessToken)
          localStorage.setItem('refreshToken', result.refreshToken)
          dispatch(loginSuccess(result.user))
          // history.push('/home')
        } else {
          dispatch(
            loginFailure({
              message:
                'Упс. Что-то пошло не так. Регистрация пользователя не удалась.',
            })
          )
        }
      })
      .catch((err) =>
        dispatch(
          loginFailure({
            message:
              'Упс. Что-то пошло не так. Регистрация пользователя не удалась.',
          })
        )
      )
  }
}

export const logOutUser = () => ({
  type: LOG_OUT,
})

export const fetchLogOut = () => {
  return (dispatch) => {
    return getFingerprint()
      .then((fingerprint) => {
        dispatch(logOut(fingerprint))
      })
      .catch((err) => console.log(err))
  }
}

export const logOut = (fingerprint) => {
  return (dispatch) => {
    const token = localStorage.getItem('refreshToken')
    if (token) {
      return fetch('/api/profile/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ refreshToken: token, fingerprint: fingerprint }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.err) {
            console.log(result.err)
          } else {
            dispatch(logOutUser())
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
          }
        })
        .catch((err) => console.log(err))
    }
  }
}

export const fetchRefreshToken = (url, method, body) => {
  return (dispatch) => {
    return getFingerprint()
      .then((fingerprint) => {
        dispatch(refreshToken(fingerprint, url, method, body))
      })
      .catch((err) => dispatch(loginFailure(err)))
  }
}

export const refreshToken = (fingerprint, url, method, body) => {
  return (dispatch) => {
    const token = localStorage.getItem('refreshToken')
    if (token) {
      return fetch('/api/profile/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ token: token, fingerprint: fingerprint }),
      })
        .then((response) => {
          if (response.status === 403) {
            dispatch(fetchLogOut())
          } else return response.json()
        })
        .then((result) => {
          if (result.success === true) {
            localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('refreshToken', result.refreshToken)
            // dispatch(fetchRequest(url, method, body))
            dispatch(getUser())
          }
        })
        .catch((err) => dispatch(loginFailure(err)))
    }
  }
}

//доступ к страницам с токеном
export const getUser = () => {
  return (dispatch) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      dispatch(loginLoading())
      return fetch('/api/profile/refresh', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.status === 401) dispatch(fetchRefreshToken())
          return response.json()
        })
        .then((result) => {
          if (result.success === true) {
            dispatch(loginSuccess(result.result.user))
          }
        })
        .catch((err) => dispatch(loginFailure(err)))
    }
  }
}
