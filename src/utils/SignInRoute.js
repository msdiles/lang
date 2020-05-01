import React from 'react'
import LoadingModal from '../Components/LoadingModal/LoadingModal'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import HistoryPush from '../Components/HistoryPush'

const SignInRoute = ({ Component, ...rest }) => {
  console.log('Rendering SignInrRoute component')
  const { user, permissions } = useSelector((state) => state.authorization)
  const isRoleMatch =
    permissions.indexOf(user.role) > permissions.indexOf('guest') ? false : true
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
        ) : null
      }
    />
  )
}

export default SignInRoute
