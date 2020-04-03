//TODO change WordInfoContainer for add,find,update

import React, { useEffect, useState } from 'react'
import './wordinfo.scss'
import WordInfo from './WordInfo'
import { useHistory } from 'react-router-dom'

const WordInfoContainer = ({ result = {}, translateTo = '' }) => {
  console.log('WordContainer result:  ', result)
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
    let filteredResult = result
    if (filteredResult.response) {
      filteredResult.response.translations = [
        filteredResult.response.translations.filter(
          item => (item.language = translateTo)
        )[0]
      ]
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
        action: 'add'
      })
    } else {
      setParameters({ existed: false, display: false, action: 'add' })
    }
  }

  const actionUpdate = () => {
    console.log('actionUpdate:  ', result.response)
    setParameters({
      existed: true,
      display: false,
      response: result.response,
      action: 'update'
    })
  }
  const actionDelete = () => {
    setParameters({
      existed: true,
      display: false,
      response: result.response,
      action: 'delete'
    })
  }
  const history = useHistory()
  const handleClick = e => {
    switch (e.target.name) {
      case 'add':
        history.push({
          pathname: '/home/add',
          props: { ...result, action: 'add' }
        })
        break
      case 'update':
        history.push({
          pathname: '/home/update',
          props: { ...result, action: 'update' }
        })
        break
      case 'delete':
        console.log('history switch:  ', result)
        history.push({
          pathname: '/home/delete',
          props: { ...result, action: 'delete' }
        })
        break
      default:
        break
    }
  }

  return <WordInfo result={parameters} handleClick={handleClick} />
}

export default WordInfoContainer
