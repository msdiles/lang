import React from 'react'
import NavigationPanel from '../../Components/NavigationPanel/NavigationPanel'
import { Route } from 'react-router-dom'
import Add from './Add'
import Find from './Find'
import EditStart from './EditStart'
import './edit.scss'

const Edit = () => {
  const listLinks = [
    { route: '/edit/add', element: 'Add' },
    { route: '/edit/find', element: 'Find' }
  ]
  return (
    <div className='edit'>
      <NavigationPanel
        listLinks={listLinks}
        className={'nav-panel-edit'}
        isNan={false}
      />
      <div className='edit-main'>
        <Route exact path='/edit' component={EditStart} />
        <Route path='/edit/add' component={Add} />
        <Route path='/edit/find' component={Find} />
      </div>
    </div>
  )
}

export default Edit
