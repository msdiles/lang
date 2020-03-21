import React from 'react'
import {HashRouter} from 'react-router-dom'

import './App.scss'
import { Header } from './Pages/Header'
import { LeftSidebar } from './Pages/LeftSidebar'
import { Main } from './Pages/Main'
import { RightSidebar } from './Pages/RightSidebar'
import { Footer } from './Pages/Footer'

const App = () => {
  return (
    <div className='app'>
      <HashRouter>
        <Header />
        <LeftSidebar />
        <Main />
        <RightSidebar />
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
