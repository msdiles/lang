import React from 'react'

import './inputtext.scss'

const InputText = ({
  name = '',
  placeholder = '',
  value = '',
  onChange = (f) => f,
  disabled = false,
  className = 'default',
  handleKeyPress = (f) => f,
  id = '',
  type = 'text',
  autoCorrect = 'off',
  autoComplete = 'off',
  onBlur=f=>f
}) => {
  return (
    <input
      className={className}
      name={name}
      id={id}
      type={type}
      autoComplete={autoComplete}
      autoCorrect={autoCorrect}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      onKeyPress={handleKeyPress}
      onBlur={onBlur}
    ></input>
  )
}

export default InputText
