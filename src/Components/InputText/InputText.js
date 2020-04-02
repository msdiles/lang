import React from 'react'

import './inputtext.scss'

const InputText = ({
  name ='',
  placeholder = '',
  value = '',
  onChange = f => f,
  disabled=false,
  className='default'
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
    ></input>
  )
}

export default InputText
