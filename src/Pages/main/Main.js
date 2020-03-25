import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home/Home'
import Admin from '../admin/Admin'
import About from '../about/About'
import Edit from '../edit/Edit'
import { LeftSidebar } from './LeftSidebar'
import { RightSidebar } from './RightSidebar'
import './main.scss'

export const Main = () => {
  return (
    <div className='main'>
      <LeftSidebar />
      <div className='main-mid'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/admin' component={Admin} />
          <Route path='/edit' component={Edit} />
        </Switch>
      </div>
      <RightSidebar />
    </div>
  )
}
