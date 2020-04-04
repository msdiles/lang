//TODO split and refactor WordInfo

import React, { useEffect, useState } from 'react'
import './wordinfo.scss'
import WordInfo from './WordInfo'
import { useHistory } from 'react-router-dom'

const WordInfoContainer = ({
  result = {},
  translateTo = '',
  requestWord = '',
  translateFrom=''
}) => {
  const [parameters, setParameters] = useState({})
  useEffect(() => {
    const processResult = () => {
      const action = result.action
      switch (action) {
        case 'find': {
          actionFind()
          break
        }
        case 'add':
          actionAdd()
          break
        case 'update':
          actionUpdate()
          break
        case 'delete':
          actionDelete()
          break

        default:
          break
      }
    }
    processResult()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  const actionFind = () => {
    let filteredResult = JSON.parse(JSON.stringify(result))
    if (filteredResult.response) {
      filteredResult.response.translations = [
        filteredResult.response.translations.filter(
          (item) => item.language === translateTo
        )[0],
      ]
      if (filteredResult.response.translations[0] === undefined) {
        filteredResult = { display: true, existed: false, action: 'find' }
      }
    } else {
      if (result.existed !== undefined) {
        filteredResult = { display: true, existed: false, action: 'find' }
      } else {
        filteredResult = { display: false, existed: false, action: 'find' }
      }
    }
    setParameters(filteredResult)
  }

  const actionAdd = () => {
    if (
      result.response.word ||
      result.response.transcription ||
      result.response.translations
    ) {
      const translations =
        typeof result.response.translations !== 'string'
          ? result.response.translations
          : []
      setParameters({
        existed: true,
        display: false,
        response: { ...result.response, translations: translations },
        action: 'add',
      })
    } else {
      setParameters({ existed: false, display: false, action: 'add' })
    }
  }

  const actionUpdate = () => {
    if (typeof result.response === 'undefined') {
      setParameters({ existed: false, display: false, action: 'update' })
      if (result.existed === false) {
        setParameters({
          existed: false,
          display: true,
          action: 'update',
        })
      }
    } else if (result.response.existed === undefined) {
      setParameters({
        existed: true,
        display: false,
        response: result.response,
        action: 'update',
      })
    }
    setParameters({ ...result })
  }
  const actionDelete = () => {
    if (typeof result.response === 'undefined') {
      setParameters({ existed: false, display: false, action: 'delete' })
      if (result.existed === false) {
        setParameters({
          existed: false,
          display: true,
          action: 'delete',
        })
      }
    } else if (result.response.existed === undefined) {
      setParameters({
        existed: true,
        display: false,
        response: result.response,
        action: 'delete',
      })
    }
    setParameters({ ...result })
  }
  const history = useHistory()
  const handleClick = (e) => {
    switch (e.target.name) {
      case 'add':
        history.push({
          pathname: '/home/add',
          props: { ...result, action: 'add', word: requestWord ,translateFrom:translateFrom },
        })
        break
      case 'update':
        history.push({
          pathname: '/home/update',
          props: { ...result, action: 'update' },
        })
        break
      case 'delete':
        console.log('history switch:  ', result)
        history.push({
          pathname: '/home/delete',
          props: { ...result, action: 'delete' },
        })
        break
      default:
        break
    }
  }
  return <WordInfo result={parameters} handleClick={handleClick} />
}

export default WordInfoContainer
