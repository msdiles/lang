import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentWord } from '../../../actions/actions'

export const useUpdateWordInfo = ({ filteredResult = {} }) => {
  const [stringifiedResult, setStringifiedResult] = useState(filteredResult)
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const textareaRef = useRef()

  const handleChange = (e) => {
    adaptHeight(e.target)
    setStringifiedResult(e.target.value)
    setChecked(false)
  }

  const adaptHeight = (e) => {
    e.style.height = e.scrollHeight + 'px'
  }

  const checkObject = () => {
    let dispatchedWord = {}
    try {
      dispatchedWord = {
        ...filteredResult,
        response: JSON.parse(stringifiedResult),
      }
      setChecked(true)
    } catch (error) {
      dispatchedWord = filteredResult
      setChecked(true)
    }
    dispatch(setCurrentWord(dispatchedWord))
  }

  useEffect(() => {
    setStringifiedResult(JSON.stringify(filteredResult.response, null, '    '))
  }, [filteredResult])

  useEffect(() => {
    if (textareaRef.current) {
      adaptHeight(textareaRef.current)
    }
  }, [stringifiedResult])

  return { stringifiedResult, handleChange, checked, checkObject, textareaRef }
}
