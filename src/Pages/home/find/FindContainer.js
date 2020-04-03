import React, { useState, useEffect } from 'react'
import Find from './Find'

const FindContainer = () => {
  const options = ['English', 'Russian', 'Germany']
  const [requestWord, setRequestWord] = useState('')
  const [response, setResponse] = useState({})
  const [translateFrom, setTranslateFrom] = useState(options[0])
  const [translateTo, setTranslateTo] = useState(options[1])
  const [display, setDisplay] = useState(false)
  const [result, setResult] = useState({})

  useEffect(() => {
    const sortResult = response => {
      let completedResult = {
        ...response.result,
        display: display,
        action: 'find',
        translateTo: translateTo
      }
      setResult(completedResult)
    }
    sortResult(response)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  const handleChange = e => {
    const word = e.target.value
    setRequestWord(word)
  }

  const selectLanguage = e => {
    const { language, name } = e.target.dataset
    if (language && name) {
      if (name === 'from') {
        setTranslateFrom(language)
      } else if (name === 'to') {
        setTranslateTo(language)
      }
    }
  }

  const swapLanguage = () => {
    const swap = translateFrom
    setTranslateFrom(translateTo)
    setTranslateTo(swap)
  }

  const handleSubmit = () => {
    setDisplay(false)
    const language = translateFrom.toLowerCase()
    fetch('/api/word/read', {
      method: 'POST',
      body: JSON.stringify({ language: language, word: requestWord }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => setResponse({ result }))
      .then(setDisplay(true))
      .catch(err => console.log(err))
  }

  return (
    <Find
      result={result}
      requestWord={requestWord}
      translateFrom={translateFrom}
      translateTo={translateTo}
      options={options}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      selectLanguage={selectLanguage}
      swapLanguage={swapLanguage}
    />
  )
}

export default FindContainer
