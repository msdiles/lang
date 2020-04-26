import React from 'react'
import './header.scss'
import { Footer } from './Footer'
import { Header } from './Header'

export const MainLayout = ({ children }) => {
  return (
    <div className='app'>
      <Header />
      <div className='main'>{children}</div>
      <Footer />
    </div>
  )
}
