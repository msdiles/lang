import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../home/Home'
import './main.scss'

export const Main = () => {
  return (
    <div className='main'>
      <div className='main-mid'>
        <Switch>
          <Route path='/home' component={Home} />
          <Redirect from='/' to='home/find' />
        </Switch>
      </div>
    </div>
  )
}
