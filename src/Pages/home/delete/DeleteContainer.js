//TODO complete DeleteContainer
import React from 'react'
import Delete from './Delete'
import { useLocation } from 'react-router-dom'

const DeleteContainer = () => {
  const location = useLocation()
  const initial =
    typeof location.props === 'undefined'
      ? { result: '' }
      : { result: location.props }
  return <Delete result={initial.result}/>
}

export default DeleteContainer
