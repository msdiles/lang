import { useState } from 'react'

export const useSwapLanguage = (initial={translateFrom:'',translateTo:''}) => {
  const options = ['English', 'Russian', 'German', 'Japan', 'Italian']
  const [translateFrom, setTranslateFrom] = useState(initial.translateFrom || options[0])
  const [translateTo, setTranslateTo] = useState(initial.translateTo || options[1])

  const selectLanguage = (e) => {
    const { value, name } = e.target.dataset
    if (value && name) {
      if (name === 'from') {
        setTranslateFrom(value)
      } else if (name === 'to') {
        setTranslateTo(value)
      }
    }
  }

  const swapLanguage = () => {
    const swap = translateFrom
    setTranslateFrom(translateTo)
    setTranslateTo(swap)
  }
  return {
    translateFrom,
    translateTo,
    selectLanguage,
    swapLanguage,
    options,
  }
}
