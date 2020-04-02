//TODO change WordInfoContainer for add,find,update

import React from 'react'
import './wordinfo.scss'
import WordInfo from './WordInfo'
import { useHistory } from 'react-router-dom'

const WordInfoContainer = ({ result = {} }) => {
  console.log(result)
  const history = useHistory()
  const handleClick = e => {
    switch (e.target.name) {
      case 'add':
        history.push({
          pathname: '/home/add',
          props: { result: result }
        })
        break
      case 'update':
        history.push({
          pathname: '/home/update',
          props: { result: result }
        })
        break
      default:
        break
    }
  }

  return <WordInfo result={result} handleClick={handleClick} />
}

export default WordInfoContainer
