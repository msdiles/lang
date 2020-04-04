import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Update from './Update'

const UpdateContainer = () => {
  const location = useLocation()
  const initial =
    typeof location.props === 'undefined'
      ? { result: '' }
      : { result: location.props }
  const options = ['English', 'Russian', 'Germany', 'Japan', 'Italian']
  const [requestWord, setRequestWord] = useState('')
  const [response, setResponse] = useState({})
  const [translateFrom, setTranslateFrom] = useState(options[0])
  const [display, setDisplay] = useState(false)
  const [result, setResult] = useState(initial.result)

  useEffect(() => {
    if (response.result !== undefined) {
      const sortResult = (response) => {
        let completedResult = {
          ...response.result,
          display: display,
          action: 'update',
        }
        setResult(completedResult)
      }
      sortResult(response)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  const handleChange = (e) => {
    const word = e.target.value
    setRequestWord(word)
  }

  const selectLanguage = (e) => {
    const { language, name } = e.target.dataset
    if (language && name) {
      setTranslateFrom(language)
    }
  }

  const handleSubmitFind = () => {
    setDisplay(false)
    const language = translateFrom.toLowerCase()
    fetch('/api/word/read', {
      method: 'POST',
      body: JSON.stringify({ language: language, word: requestWord }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => setResponse({ result }))
      .then(setDisplay(true))
      .catch((err) => console.log(err))
  }
  //TODO to do handleSubmitUpdate

  const handleSubmitUpdate = e => {
    console.log('update')
  //   e.preventDefault()
  // fetch('/api/word/create', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     language: languageFrom.toLowerCase(),
  //     add: {
  //       word: addedFrom,
  //       transcription: 'transcription',
  //       translations: [{ language: languageTo, words: addedTo }]
  //     }
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))
  }

  return (
    <Update
      result={result}
      requestWord={requestWord}
      translateFrom={translateFrom}
      options={options}
      handleChange={handleChange}
      handleSubmitFind={handleSubmitFind}
      handleSubmitUpdate={handleSubmitUpdate}
      selectLanguage={selectLanguage}
    />
  )
}

export default UpdateContainer
