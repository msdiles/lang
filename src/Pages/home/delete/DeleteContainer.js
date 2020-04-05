import React, { useState, useEffect } from 'react'
import Delete from './Delete'
import { useLocation } from 'react-router-dom'

// const DeleteContainer = () => {
//   const location = useLocation()
//   const initial =
//     typeof location.props === 'undefined'
//       ? { result: '' }
//       : { result: location.props }
//   const options = ['English', 'Russian', 'Germany', 'Japan', 'Italian']
//   const [requestWord, setRequestWord] = useState('')
//   const [response, setResponse] = useState({})
//   const [translateFrom, setTranslateFrom] = useState(options[0])
//   const [display, setDisplay] = useState(false)
//   const [result, setResult] = useState(initial.result)

//   useEffect(() => {
//     if (response.result !== undefined) {
//       const sortResult = (response) => {
//         let completedResult = {
//           ...response.result,
//           display: display,
//           action: 'delete',
//         }
//         setResult(completedResult)
//       }
//       sortResult(response)
//     }
//   }, [display, response])

//   const handleChange = (e) => {
//     const word = e.target.value
//     setRequestWord(word)
//   }

//   const selectLanguage = (e) => {
//     const { language, name } = e.target.dataset
//     if (language && name) {
//       setTranslateFrom(language)
//     }
//   }

//   const handleSubmitFind = (e) => {
//     e.preventDefault()
//     setDisplay(false)
//     const language = translateFrom.toLowerCase()
//     fetch('/api/word/read', {
//       method: 'POST',
//       body: JSON.stringify({ language: language, word: requestWord }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((result) => setResponse({ result }))
//       .then(setDisplay(true))
//       .catch((err) => console.log(err))
//   }
// //TODO to do handleSubmitDelete
//   const handleSubmitDelete = e => {

//     console.log('delete')
//   //   e.preventDefault()
//   // fetch('/api/word/create', {
//   //   method: 'POST',
//   //   body: JSON.stringify({
//   //     language: languageFrom.toLowerCase(),
//   //     add: {
//   //       word: addedFrom,
//   //       transcription: 'transcription',
//   //       translations: [{ language: languageTo, words: addedTo }]
//   //     }
//   //   }),
//   //   headers: {
//   //     'Content-Type': 'application/json'
//   //   }
//   // })
//   //   .then(response => response.json())
//   //   .then(result => console.log(result))
//   //   .catch(err => console.log(err))
//   }

//   return (
//     <Delete
//       result={result}
//       requestWord={requestWord}
//       translateFrom={translateFrom}
//       options={options}
//       handleChange={handleChange}
//       handleSubmitFind={handleSubmitFind}
//       selectLanguage={selectLanguage}
//       handleSubmitDelete={handleSubmitDelete}
//     />
//   )
// }

const DeleteContainer = () => {
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

  
//TODO to do handleSubmitDelete
  const handleSubmitDelete = e => {

    console.log('delete')
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
    <Delete
      result={result}
      requestWord={requestWord}
      translateFrom={translateFrom}
      options={options}
      handleChange={handleChange}
      handleSubmitFind={handleSubmitFind}
      selectLanguage={selectLanguage}
      handleSubmitDelete={handleSubmitDelete}
    />
  )
}

export default DeleteContainer
