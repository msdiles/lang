import { useState, useEffect } from 'react'

export const useFind = ({
  action = '',
  translateFrom = '',
  translateTo = '',
  initial = {},
}) => {
  const [requestWord, setRequestWord] = useState(initial.requestWord)
  const [filteredResponse, setFilteredResponse] = useState(initial.result)
  const [display, setDisplay] = useState(false)
  const [result, setResult] = useState({})

  const sortResponse = (action, response) => {
    let completedResult = { ...response, action: action, display: true }
    if (action === 'find') {
      completedResult = {
        ...response,
        display: display,
        action: action,
        translateTo: translateTo,
      }
    }
    if (response.response !== undefined) {
      completedResult = {
        ...response,
        display: display,
        action: action,
      }
    }
    setFilteredResponse(completedResult)
  }

  useEffect(() => {
    setResult(filteredResponse)
  }, [filteredResponse])

  const handleSubmit = (e) => {
    e.preventDefault()
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
      .then((response) => sortResponse(action, response))
      .then(setDisplay(true))
      .catch((err) => console.log(err))
  }

  return {
    result,
    requestWord,
    handleSubmit,
    setRequestWord,
  }
}
