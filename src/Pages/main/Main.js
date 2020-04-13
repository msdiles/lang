import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Edit from '../edit/edit'
import Home from '../home/Home'
import SignUp from '../signUp/SignUp'

export const Main = () => {
  return (
    <div className='main'>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/edit' component={Edit} />
        <Route path='/login' component={SignUp} />
      </Switch>
    </div>
  )
}
