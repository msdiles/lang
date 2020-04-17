import {
  LOG_OUT,
  LOGIN_USER,
} from './actionTypes'

export const loginUser = (user) => ({
  type: LOGIN_USER,
  user,
})

export const fetchLogIn = (user) => {
  const { email, password } = user
  return (dispatch) => {
    return fetch('/api/profile/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message) {
        } else {
          localStorage.setItem('token', result.token)
          dispatch(loginUser(result.user))
        }
      })
  }
}

export const logOut = () => ({
  type: LOG_OUT,
})

export const refreshToken = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token')
    if (token) {
      console.log('asdasd')
      return fetch('/api/profile/refresh', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          if (result.error) {
            localStorage.removeItem('token')
            console.log(result.error.message)
          } else {
            console.log(result.user)
            dispatch(loginUser(result.user))
          }
        })
    }
  }
}
