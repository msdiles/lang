import React from 'react'

import './inputtext.scss'

const InputText = ({
  name ='',
  placeholder = '',
  value = '',
  onChange = f => f,
  disabled=false,
  className='default',
  handleKeyPress=f=>f
}) => {
  return (
    <input
    className={className}
      name={name}
      type='text'
      placeholder={placeholder}
      autoComplete='off'
      value={value}
      onChange={onChange}
      disabled={disabled}
      onKeyPress={handleKeyPress}
    ></input>
  )
}

export default InputText
