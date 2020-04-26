import React, { useState, useEffect } from 'react'
import './inputcheck.scss'

export const InputCheck = ({
  label = '',
  idName = '',
  type = '',
  placeholder = '',
  validateForm = (f) => f,
  errors = [],
  autoComplete = 'off',
  autoCorrect = 'off',
  value = '',
  handleChange = (f) => f,
}) => {
  const [isErrors, setIsErrors] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    console.log(errors)
    if (errors.length > 0) {
      setIsErrors('')
      setErrorMessage('')
    }
  }, [errors])

  useEffect(() => {
    if (errors.length > 0) {
      setIsErrors(errors.filter((item) => item.value === true))
    }
  }, [errors])

  useEffect(() => {
    if (errors.length > 0) {
      for (let i = 0; i < errors.length; i++) {
        if (errors[i].value === true) {
          setErrorMessage(<p className='error-message'>{errors[i].message}</p>)
          setChecked(true)
          break
        }
      }
    }
  }, [errors, value.length])
  return (
    <div className='flex-column-start input-block'>
      <label htmlFor={idName}>{label}</label>
      <div className='flex-row-center'>
        <input
          id={idName}
          type={type}
          name={idName}
          placeholder={placeholder}
          autoCorrect={autoCorrect}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => {
            validateForm(e.target.name)
            setChecked(true)
          }}
        />
        <div
          className={
            errors.length > 0 &&
            isErrors.length === 0 &&
            value.length > 0 &&
            checked
              ? 'validate-good'
              : errors.length > 0 && isErrors !== 0 && checked
              ? 'validate-bad'
              : 'validate-not'
          }
        ></div>
      </div>
      {errorMessage}
    </div>
  )
}
