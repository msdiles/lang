import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'

import './App.scss'

import { Main } from './Pages/main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './actions/authorizationActions'
import LoadingModal from './Components/LoadingModal/LoadingModal'

const App = () => {
  console.log('Rendering App')
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.authorization.user)
  useEffect(() => {
    if (!loading) {
      dispatch(getUser())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <React.Fragment>
      {loading && <LoadingModal />}
      <HashRouter>
        <Main />
      </HashRouter>
    </React.Fragment>
  )
}

export default App
