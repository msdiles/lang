import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'

import './App.scss'

import { Main } from './Pages/main/Main'
import { MainLayout } from './Pages/main/MainLayout'
import { useDispatch } from 'react-redux'
import { refreshToken } from './actions/authorizationActions'

const App = () => {
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(refreshToken())
  },[dispatch])

  return (
    <HashRouter>
      <MainLayout>
        <Main />
      </MainLayout>
    </HashRouter>
  )
}

export default App
