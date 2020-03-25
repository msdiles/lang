import React from 'react'

import './inputtext.scss'

const InputText = ({
  name ='',
  placeholder = '',
  value = '',
  onChange = f => f
}) => {
  return (
    <input
      name={name}
      type='text'
      placeholder={placeholder}
      autoComplete='off'
      value={value}
      onChange={onChange}
    ></input>
  )
}

export default InputText
