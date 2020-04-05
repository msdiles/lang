import React, { useState, useEffect } from 'react'
import Add from './Add'
import { useLocation } from 'react-router-dom'

export const useAdd = ({translateTo,initial}) => {


  const [wordFrom, setWordFrom] = useState(initial.wordFrom)
  const [wordTo, setWordTo] = useState('')
  const [addedTo, setAddedTo] = useState([])
  const [transcription, setTranscription] = useState('')
  const [active, setActive] = useState(true)
  const [response, setResponse] = useState({
    word: '',
    transcription: '',
    translations: '',
  })

  useEffect(() => {
    if (wordFrom || transcription || wordTo || addedTo.length) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [transcription, wordFrom, wordTo, addedTo])

  const handleChange = (e) => {
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
  //TODO to do handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('added')
    // fetch('/api/word/create', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     language: translateFrom.toLowerCase(),
    //     add: {
    //       word: wordTo,
    //       transcription: 'transcription',
    //       translations: [{ language: translateTo, words: addedTo }],
    //     },
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err))
  }

  const handleAdd = () => {
    if (wordTo !== '') {
      const to = wordTo
      let translations = addedTo
      if (translations.length > 0) {
        let index = translations.length
        for (let i = 0; i < translations.length; i++) {
          if (translations[i].language === translateTo) {
            index = i
            break
          }
        }
        const words = addedTo[index]
          ? addedTo[index].words.includes(to)
            ? addedTo[index].words
            : addedTo[index].words.concat(to)
          : [to]
        translations[index] = { language: translateTo, words: words }
      } else {
        translations.push({ language: translateTo, words: [to] })
      }
      setAddedTo(translations)
      setResponse({ ...response, translations: translations })
    }
  }
  const handleClear = () => {
    setWordFrom('')
    setWordTo('')
    setAddedTo([])
    setTranscription('')
    setResponse({
      word: '',
      transcription: '',
      translations: '',
    })
  }

  return {
    wordFrom,
    wordTo,
    handleChange,
    handleAdd,
    handleClear,
    handleSubmit,
    transcription,
    active,
    response,
  }
}
