import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFind } from '../actions/actions'

export const useFind = ({ action = '', translateFrom = '',initial={} }) => {
  const requestTypeFromState = useSelector((state) => state.fetch.requestType)
  const resultFromState = useSelector((state) => state.fetch.currentWord)
  const [requestWord, setRequestWord] = useState(initial.requestWord)
  const [result, setResult] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    const data = action === requestTypeFromState ? resultFromState : {}
    const completedResult = {
      ...data,
      action: action,
    }
    setResult(completedResult)
  }, [action, requestTypeFromState, resultFromState])

  const handleSubmit = (e) => {
    e.preventDefault()
    const language = translateFrom.toLowerCase()
    dispatch(fetchFind(requestWord, language, action))
  }
  return {
    result,
    requestWord,
    handleSubmit,
    setRequestWord,
  }
}
