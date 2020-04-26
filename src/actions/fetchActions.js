// import {
//   FETCH_REQUEST,
//   FETCH_REQUEST_LOADING,
//   FETCH_REQUEST_FAILURE,
// } from './actionTypes'
// import { fetchRefreshToken } from './authorizationActions'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRefreshToken } from './authorizationActions'

// export const fetchResponse = (result) => ({
//   type: FETCH_REQUEST,
//   result: result,
// })

// export const fetchResponseLoading = () => ({
//   type: FETCH_REQUEST_LOADING,
// })

// export const fetchResponseFailure = (err) => ({
//   type: FETCH_REQUEST_FAILURE,
//   error: err,
// })

// export const fetchRequest = (url, method, body) => {
//   return (dispatch) => {
//     const token = localStorage.getItem('accessToken')
//     console.log('asdasd')
//     if (token) {

//       dispatch(fetchResponseLoading())
//       if (method === 'GET') {
//         return fetch(url, {
//           method: method,
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         })
//           .then((response) => {
//             if (response.status === 401) {
//               dispatch(fetchRefreshToken(url, method, body))
//             }
//             return response.json()
//           })
//           .then(
//             (response) =>
//               response.success &&
//               response.success === true &&
//               dispatch(fetchResponse(response.result))
//           )
//           .catch((err) => fetchResponseFailure(err))
//       } else {
//         return fetch(url, {
//           method: method,
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ body }),
//         })
//           .then((response) => {
//             if (response.status === 401) {
//               dispatch(fetchRefreshToken(url, method, body))
//             }
//             return response.json()
//           })
//           .then(
//             (response) =>
//               response.success &&
//               response.success === true &&
//               dispatch(fetchResponse(response.result))
//           )
//           .catch((err) => fetchResponseFailure(err))
//       }
//     }
//   }
// }

export const useFetchRequest = (url, method, body) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [result, setResult] = useState({})
  const user = useSelector((state) => state.fetch.user)
  const dispatch = useDispatch()
  const token = localStorage.getItem('accessToken')
  console.log('asdasd')
  useEffect(() => {
    if (!isLoading) {
      if (token) {
        if (method === 'GET') {
          setIsLoading(true)
          fetch(url, {
            method: method,
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              if (response.status === 401) {
                dispatch(fetchRefreshToken(url, method, body))
              }
              return response.json()
            })
            .then((response) => {
              console.log('response', response)
              if (response.success && response.success === true) {
                setIsLoading(false)
                setResult(response.result)
              }
            })
            .catch((err) => {
              setError(err)
              setIsLoading(false)
            })
        }
      }
    }
  }, [])

  return { isLoading, error, result }
}
