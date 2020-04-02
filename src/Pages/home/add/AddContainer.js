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

  const options = ['English', 'Russian', 'Germany']
  const [wordFrom, setWordFrom] = useState(initial.wordFrom)
  const [wordTo, setWordTo] = useState('')
  const [addedFrom, setAddedFrom] = useState('')
  const [addedTo, setAddedTo] = useState([])
  const [languageFrom, setLanguageFrom] = useState(options[0])
  const [languageTo, setLanguageTo] = useState(options[1])
  const [transcription, setTranscription] = useState('')
  const [active,setActive] = useState(true)
  const [response, setResponse] = useState({
    word: '',
    transcription: '',
    translations: []
  })

  useEffect(()=>{
    if(wordFrom || transcription ||wordTo || addedFrom ){
      setActive(false)
    }
    else{
      setActive(true)
    }
  })


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

  const handleSubmit = e => {
    e.preventDefault()
    fetch('/api/word/create', {
      method: 'POST',
      body: JSON.stringify({
        language: languageFrom.toLowerCase(),
        add: {
          word: addedFrom,
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

  // const handleAdd = () => {

  //   const from = wordFrom
  //   if (wordTo !== '' && !addedTo.includes(wordTo)) {
  //     const to = wordTo
  //     setAddedFrom(from)
  //     setAddedTo([...addedTo, to])
  //   }
  // }

  const handleAdd = () => {
    console.log('addedTo: ', addedTo)
    // if (wordTo !== '' && !addedTo.includes(wordTo)) {
    if (wordTo !== '') {
      const to = wordTo
      const translations = addedTo
      if (translations.length > 0) {
        let index
        for (let i = 0; i < translations.length; i++) {
          if (translations[i].language === languageTo) {
            index = i
            break
          } else {
            index = translations.length
          }
        }
        const words = addedTo[index].words.includes(to)
          ? addedTo[index].words
          : addedTo[index].words.concat(to)
        translations[index] = { language: languageTo, words: words }
      } else {
        translations[0] = { language: languageTo, words: [to] }
      }
      setAddedTo(translations)
      setResponse({ ...response, translations: translations })
    }
  }

  const handleClear = () => {
    setWordFrom('')
    setWordTo('')
    setAddedFrom('')
    setAddedTo([])
    setTranscription('')
  }

  const swapLanguage = () => {
    const swap = languageFrom
    setLanguageFrom(languageTo)
    setLanguageTo(swap)
  }

  const selectLanguage = e => {
    const { language, name } = e.target.dataset
    if (language && name) {
      if (name === 'from') {
        setLanguageFrom(language)
      } else if (name === 'to') {
        setLanguageTo(language)
        if (addedTo.filter(item => item.language === language).length !== 1) {
          setAddedTo([...addedTo, { language: language, words: [] }])
        }
      }
    }
  }

  return (
    <Add
      wordFrom={wordFrom}
      wordTo={wordTo}
      addedTo={addedTo}
      addedFrom={addedFrom}
      handleChange={handleChange}
      handleAdd={handleAdd}
      handleClear={handleClear}
      handleSubmit={handleSubmit}
      swapLanguage={swapLanguage}
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
