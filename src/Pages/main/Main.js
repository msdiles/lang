import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../home/Home'
import { SignUp } from '../signUp/SignUp'
import Login from '../logIn/LogIn'
import { LogOut } from '../logOut/LogOut'
import Profile from '../profile/Profile'
import { MainLayout } from './MainLayout'
import Reset from '../logIn/Reset'
import PrivateRoute from '../../utils/PrivateRoute'
import SignInRoute from '../../utils/SignInRoute'

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
            <PrivateRoute Component={Profile} role='admin' />
          </MainLayout>
        )}
      />
      <Route
        path='/profile'
        render={() => (
          <MainLayout>
            <PrivateRoute Component={Profile} role='user' />
          </MainLayout>
        )}
      />
      <Route
        path='/logout'
        render={() => (
          <MainLayout>
            <PrivateRoute Component={LogOut} role='user' />
          </MainLayout>
        )}
      />
      <Route path='/login' render={() => <SignInRoute Component={Login} />} />
      <Route path='/signup' render={() => <SignInRoute Component={SignUp} />} />
      <Route path='/reset' render={() => <SignInRoute Component={Reset} />} />
      <Redirect to='/home' />
    </Switch>
  )
}
