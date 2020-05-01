import React from 'react'
import LoadingModal from '../Components/LoadingModal/LoadingModal'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import HistoryPush from '../Components/HistoryPush'

const PrivateRoute = ({ Component, role, ...rest }) => {
  const { user, permissions } = useSelector((state) => state.authorization)
  const isRoleMatch =
    permissions.indexOf(user.role) >= permissions.indexOf(role) ? true : false
  return (
    <Route
      {...rest}
      render={(props) =>
        isRoleMatch ? (
          <Component {...props} />
        ) : user.loading ? (
          <LoadingModal />
        ) : role === 'user' ? (
          <HistoryPush path='/login' />
        ) : (
          <HistoryPush path='/home' />
        )
      }
    />
  )
}

export default PrivateRoute
