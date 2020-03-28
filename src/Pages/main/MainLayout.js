import React from 'react'
import './header.scss'
import { LeftSidebar } from './LeftSidebar'
import { Footer } from './Footer'
import { Header } from './Header'

export const MainLayout = ({children}) => {

  return (
    <div className='app'>
      <Header/>
      <LeftSidebar/>
      {children}
      <Footer/>
    </div>
  )
}
