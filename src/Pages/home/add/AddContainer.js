import React, { useState, useEffect } from 'react'
import Add from './Add'
import { useLocation } from 'react-router-dom'

const AddContainer = () => {
  const location = useLocation()
  const initial =
    typeof location.props === 'undefined'
      ? {
          wordFrom: ''
        }
      : {
          wordFrom: location.props.wordFrom
        }

  const options = ['English', 'Russian', 'Germany', 'Japan', 'Italian']
  const [wordFrom, setWordFrom] = useState(initial.wordFrom)
  const [wordTo, setWordTo] = useState('')
  const [addedTo, setAddedTo] = useState([])
  const [languageFrom, setLanguageFrom] = useState(options[0])
  const [languageTo, setLanguageTo] = useState(options[1])
  const [transcription, setTranscription] = useState('')
  const [active, setActive] = useState(true)
  const [response, setResponse] = useState({
    word: '',
    transcription: '',
    translations: ''
  })

  useEffect(() => {
    if (wordFrom || transcription || wordTo || addedTo.length) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [transcription, wordFrom, wordTo, addedTo])

  const handleChange = e => {
    const { value, name } = e.target
    switch (name) {
      case 'wordFrom':
        setWordFrom(value)
        setResponse({ ...response, word: value })
        break
      case 'wordTo':
        setWordTo(value)
        break
      case 'transcription':
        setTranscription(value)
        setResponse({ ...response, transcription: value })
        break

      default:
        break
    }
  }
  //TODO add to input onSubmit on enter key
  //TODO to do handleSubmit
  const handleSubmit = e => {
    e.preventDefault()
    fetch('/api/word/create', {
      method: 'POST',
      body: JSON.stringify({
        language: languageFrom.toLowerCase(),
        add: {
          word: wordTo,
          transcription: 'transcription',
          translations: [{ language: languageTo, words: addedTo }]
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  const handleAdd = () => {
    if (wordTo !== '') {
      const to = wordTo
      let translations = addedTo
      if (translations.length > 0) {
        let index = translations.length
        for (let i = 0; i < translations.length; i++) {
          if (translations[i].language === languageTo) {
            index = i
            break
          }
        }
        const words = addedTo[index]
          ? addedTo[index].words.includes(to)
            ? addedTo[index].words
            : addedTo[index].words.concat(to)
          : [to]
        translations[index] = { language: languageTo, words: words }
      } else {
        translations.push({ language: languageTo, words: [to] })
      }
      setAddedTo(translations)
      setResponse({ ...response, translations: translations })
    }
  }
  //BUG handleClear doesn't work with WordInfo
  const handleClear = () => {
    setWordFrom('')
    setWordTo('')
    setAddedTo([])
    setTranscription('')
  }

  const selectLanguage = e => {
    const { language, name } = e.target.dataset
    if (language && name) {
      if (name === 'from') {
        setLanguageFrom(language)
      } else if (name === 'to') {
        setLanguageTo(language)
      }
    }
  }

  return (
    <Add
      wordFrom={wordFrom}
      wordTo={wordTo}
      handleChange={handleChange}
      handleAdd={handleAdd}
      handleClear={handleClear}
      handleSubmit={handleSubmit}
      options={options}
      languageFrom={languageFrom}
      languageTo={languageTo}
      handleSelect={selectLanguage}
      transcription={transcription}
      active={active}
      response={response}
    />
  )
}

export default AddContainer
