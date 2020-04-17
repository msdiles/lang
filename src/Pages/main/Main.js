import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Edit from '../edit/edit'
import Home from '../home/Home'
import SignUp from '../signUp/SignUp'
import Login from '../logIn/LogIn'
import { LogOut } from '../logOut/LogOut'
import { Profile } from '../profile/Profile'

export const Main = () => {
  return (
    <div className='main'>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/edit' component={Edit} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={LogOut} />
        <Route path='/register' component={SignUp} />
        <Route path='/profile' component={Profile} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </div>
  )
}
