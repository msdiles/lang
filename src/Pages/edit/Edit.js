import React from 'react'
import NavigationPanel from '../../Components/NavigationPanel/NavigationPanel'
import { Route } from 'react-router-dom'
import EditStart from './EditStart'
import './edit.scss'
import AddContainer from './add/AddContainer'
import FindContainer from './find/FindContainer'

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
        <Route path='/edit/add' component={AddContainer} />
        <Route path='/edit/find' component={FindContainer} />
      </div>
    </div>
  )
}

export default Edit
