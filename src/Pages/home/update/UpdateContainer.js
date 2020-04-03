import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Update from './Update'

const UpdateContainer = () => {

  const location = useLocation()
  const initial =
    typeof location.props === 'undefined'
      ? { result: '' }
      : { result: location.props }
      console.log(location)
      console.log('UpdateContainer:  ',initial)
  // const [result, setResult] = useEffect(initial.result)

  // const handleSubmit = e => {
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
  // }

  return <Update result={initial.result} />
}

export default UpdateContainer
