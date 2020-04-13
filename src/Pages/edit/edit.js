import React from 'react'
import NavigationPanel from '../../Components/NavigationPanel/NavigationPanel'
import { Route } from 'react-router-dom'
import './edit.scss'
import Add from './add/Add'
import Find from './find/Find'
import Update from './update/Update'
import Delete from './delete/Delete'

const Edit = () => {
  const listLinks = [
    { route: '/edit/find', element: 'Find' },
    { route: '/edit/add', element: 'Add' },
    { route: '/edit/update', element: 'Update' },
    { route: '/edit/delete', element: 'Delete' }
  ]
  return (
    <div className='edit'>
      <NavigationPanel
        listLinks={listLinks}
        className={'nav-panel-edit'}
        isNan={false}
      />
      <div className='edit-main'>
        <Route exact path='/edit/find' component={Find} />
        <Route path='/edit/add' component={Add} />
        <Route path='/edit/update' component={Update} />
        <Route path='/edit/delete' component={Delete} />
      </div>
    </div>
  )
}

export default Edit
