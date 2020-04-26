import React from 'react'
import LoadingModal from '../Components/LoadingModal/LoadingModal'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import HistoryPush from '../Components/HistoryPush'

const SignInRoute = ({ Component, ...rest }) => {
  console.log('SIGNINROUTE')
  const { user, permissions } = useSelector((state) => state.fetch)
  const isRoleMatch =
    permissions.indexOf(user.role) > permissions.indexOf('guest') ? false : true
  console.log(permissions.indexOf(user.role), permissions.indexOf('guest'))
  console.log(user.role)
  return (
    <Route
      {...rest}
      render={(props) =>
        isRoleMatch ? (
          <Component {...props} />
        ) : user.loading ? (
          <LoadingModal />
        ) : user.role !== 'guest' ? (
          <HistoryPush path='/home' />
        ) : (
          console.log('asdasd ')
        )
      }
    />
  )
}

export default SignInRoute
