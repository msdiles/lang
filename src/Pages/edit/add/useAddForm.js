import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentWord,changeRequestType, clearResult } from '../../../actions/actions'

export const useAddForm = ({ translateTo, initial }) => {
  const dispatch = useDispatch()
  const [wordFrom, setWordFrom] = useState(initial.word)
  const [wordTo, setWordTo] = useState('')
  const [addedTo, setAddedTo] = useState([])
  const [transcription, setTranscription] = useState('')
  const [active, setActive] = useState(true)
  const [response, setResponse] = useState({
    word: wordFrom,
    transcription: '',
    translations: '',
  })

  useEffect(() => {
    if (response.word && response.transcription  && response.translations.length) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [response])

  const handleChange = (e) => {
    dispatch(clearResult())
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
  useEffect(() => {
    dispatch(setCurrentWord({ response }))
    dispatch(changeRequestType('add'))
  }, [dispatch, response])

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
    transcription,
    active,
  }
}
