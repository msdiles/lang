import React from 'react'
import { HashRouter } from 'react-router-dom'

import './App.scss'
import { Header } from './Pages/main/Header'
import { Main } from './Pages/main/Main'
import { Footer } from './Pages/main/Footer'

const App = () => {
  return (
    <div className='app'>
      <HashRouter>
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
