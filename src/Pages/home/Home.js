import React from 'react'
import NavigationPanel from '../../Components/NavigationPanel/NavigationPanel'
import { Route } from 'react-router-dom'
import './edit.scss'
import AddContainer from './add/AddContainer'
import FindContainer from './find/FindContainer'
import UpdateContainer from './update'

const Edit = () => {
  const listLinks = [
    { route: '/home/find', element: 'Find' },
    { route: '/home/add', element: 'Add' },
    { route: '/home/update', element: 'Update' },
    { route: '/home/delete', element: 'Delete' }
  ]
  return (
    <div className='edit'>
      <NavigationPanel
        listLinks={listLinks}
        className={'nav-panel-edit'}
        isNan={false}
      />
      <div className='edit-main'>
        <Route exact path='/home/find' component={FindContainer} />
        <Route path='/home/add' component={AddContainer} />
        <Route path='/home/update' component={UpdateContainer} />
        <Route path='/home/delete' component={AddContainer} />
      </div>
    </div>
  )
}

export default Edit
