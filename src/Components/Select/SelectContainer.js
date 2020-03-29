import React, { useState, useRef, useEffect } from 'react'
import Select from './Select'
import './select.scss'

const SelectContainer = ({
  name = '',
  options = [],
  handleSelect = f => f,
  currentOption = 0
}) => {
  const [isClosed, setIsClosed] = useState(true)
  const [focusedOption, setFocusedOption] = useState(0)
  const selectorRef = useRef()

  function handleBlur(e) {
    if (selectorRef.current && !selectorRef.current.contains(e.target)) {
      setIsClosed(true)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleBlur)
    return () => document.removeEventListener('mousedown', handleBlur)
  })

  //Keyboard Accessibility//
  function handleKey(e) {
    const focusedElement = focusedOption
    if (e.keyCode === 38) {
      if (
        e.target.className !== 'closed selector' &&
        e.target.className !== 'selector'
      ) {
        e.preventDefault()
        const newOption =
          focusedElement === 0 ? options.length - 1 : focusedElement - 1
        const NextElement = e.target.parentNode.childNodes[newOption]
        setFocusedOption(newOption)
        NextElement.focus()
      }
    }
    if (e.keyCode === 40) {
      if (
        e.target.className !== 'closed selector' &&
        e.target.className !== 'selector'
      ) {
        e.preventDefault()
        const newOption =
          focusedElement === options.length - 1 ? 0 : focusedElement + 1
        const NextElement = e.target.parentNode.childNodes[newOption]
        setFocusedOption(newOption)
        NextElement.focus()
      } else if (e.target.className === 'selector') {
        e.preventDefault()
        setFocusedOption(0)
        const NextElement = e.target.childNodes[1].childNodes[0]
        NextElement.focus()
      }
    }
    if (e.keyCode === 13) {
      if (e.target.className === 'selector') {
        e.preventDefault()
        const isSelectorClosed = e.target === 'closed selector' ? true : false
        const optionsElement = e.target.childNodes[1].childNodes
        e.target.className =
          isSelectorClosed === true ? 'selector' : 'closed selector'
        if (isSelectorClosed === true) {
          optionsElement[focusedElement].focus()
        }
      } else {
        handleSelect(e)
        e.target.parentNode.parentNode.focus()
      }
      setIsClosed(!isClosed)
    }
    if (e.keyCode === 9 && !e.shiftKey) {
      if (e.target.className !== 'selector') {
        const newOption =
          +e.target.id === options.length - 1 ? 0 : +e.target.id + 1
        if (+e.target.id ===options.length - 1) {
          setIsClosed(!isClosed)
        }
        setFocusedOption(newOption)
      }
    }
    if (e.keyCode === 9 && e.shiftKey) {
      if (+e.target.id === 0) {
        setIsClosed(true)
      }
      const newOption = +e.target.id === 0 ? 0 : e.target.id - 1
      setFocusedOption(newOption)
    }
  }

  return (
    <Select
      selectorRef={selectorRef}
      name={name}
      options={options}
      currentOption={currentOption}
      isClosed={isClosed}
      handleSelect={handleSelect}
      toggleClass={() => setIsClosed(!isClosed)}
      handleBlur={handleBlur}
      handleKey={handleKey}
    />
  )
}

export default SelectContainer
