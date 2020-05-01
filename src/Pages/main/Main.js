import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../home/Home'
import { SignUp } from '../signUp/SignUp'
import Login from '../logIn/LogIn'
import { LogOut } from '../logOut/LogOut'
import Profile from '../profile/Profile'
import { MainLayout } from './MainLayout'
import ResetRequest from '../logIn/ResetRequest'
import PrivateRoute from '../../utils/PrivateRoute'
import SignInRoute from '../../utils/SignInRoute'
import ResetCheckToken from '../logIn/ResetCheckToken'
import Edit from '../edit/edit'

export const Main = () => {
  return (
    <Switch>
      <Route
        exact
        path='/home'
        render={() => (
          <MainLayout>
            <Home />
          </MainLayout>
        )}
      />
      <Route
        path='/edit'
        render={() => (
          <MainLayout>
            <PrivateRoute Component={Edit} role='admin' />
          </MainLayout>
        )}
      />
      <Route
        exact
        path='/profile'
        render={() => (
          <MainLayout>
            <PrivateRoute Component={Profile} role='user' />
          </MainLayout>
        )}
      />
      <Route
        exact
        path='/logout'
        render={() => (
          <MainLayout>
            <PrivateRoute Component={LogOut} role='user' />
          </MainLayout>
        )}
      />
      <Route
        exact
        path='/login'
        render={() => <SignInRoute Component={Login} />}
      />
      <Route
        exact
        path='/signup'
        render={() => <SignInRoute Component={SignUp} />}
      />
      <Route
        exact
        path='/reset'
        render={() => <SignInRoute Component={ResetRequest} />}
      />
      <Route
        path='/reset/:id/:token/'
        render={() => <SignInRoute Component={ResetCheckToken} />}
      />
      <Redirect to='/home' />
    </Switch>
  )
}
