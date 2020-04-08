import { useState } from 'react'

export const useSwapLanguage = (initial={translateFrom:'',translateTo:''}) => {
  const options = ['English', 'Russian', 'Germany', 'Japan', 'Italian']
  const [translateFrom, setTranslateFrom] = useState(initial.translateFrom || options[0])
  const [translateTo, setTranslateTo] = useState(initial.translateTo || options[1])

  const selectLanguage = (e) => {
    const { language, name } = e.target.dataset
    if (language && name) {
      if (name === 'from') {
        setTranslateFrom(language)
      } else if (name === 'to') {
        setTranslateTo(language)
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
