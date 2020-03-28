import React from 'react'
import { HashRouter } from 'react-router-dom'

import './App.scss'

import { Main } from './Pages/main/Main'
import { MainLayout } from './Pages/main/MainLayout'

const App = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Main />
      </MainLayout>
    </HashRouter>
  )
}

export default App
