import React, { useState } from 'react'
import Find from './Find'

const FindContainer = () => {
  const options = ['English', 'Russian', 'Germany']
  const [requestWord, setRequestWord] = useState('')
  const [response, setResponse] = useState({})
  const [translateFrom, setTranslateFrom] = useState(options[0])
  const [translateTo, setTranslateTo] = useState(options[1])

  function handleChange(e) {
    const word = e.target.value
    setRequestWord(word)
  }

  function selectLanguage(e) {
    const { language, name } = e.target.dataset
    if (language && name) {
      if (name === 'from') {
        setTranslateFrom(language)
      } else if (name === 'to') {
        setTranslateTo(language)
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const language=translateFrom.toLowerCase()
    console.log(JSON.stringify({ language:language,word:requestWord}))
    fetch('/api/word/read', {
      method: 'POST',
      body: JSON.stringify({ language:language,word:requestWord}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(result => setResponse({ result }))
      .then(result=>console.log(result))
      .catch(err => console.log(err))
      console.log(response)

  }

  return (
    <Find
      requestWord={requestWord}
      response={response}
      translateFrom={translateFrom}
      translateTo={translateTo}
      options={options}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      selectLanguage={selectLanguage}
    />
  )
}

export default FindContainer
