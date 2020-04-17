import React from 'react'
import NavigationPanel from '../../Components/NavigationPanel/NavigationPanel'
import './header.scss'

export const Header = () => {
  const listLinks = [
    { route: '/home', element: 'Home' },
    { route: '/edit', element: 'Edit' },
  ]
  return (
    <div className='header'>
      <NavigationPanel
        className={'nav-panel'}
        listLinks={listLinks}
        isNan={true}
      />
    </div>
  )
}
