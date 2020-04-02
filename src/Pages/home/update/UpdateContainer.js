import React from 'react'
import { useLocation } from 'react-router-dom'
import Update from './Update'

const UpdateContainer = () => {
  const location = useLocation()
  const initial = typeof location.props === undefined ?
  { result:location.props.result,
    wordFrom:location.props.wordFrom
  }:{result:{},
    wordFrom:''

  }





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

  return <Update result={initial.result}/>
}

export default UpdateContainer
