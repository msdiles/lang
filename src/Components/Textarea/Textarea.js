import React from 'react'
import './textarea.scss'

const Textarea = ({
  name ='',
  placeholder = '',
  value = '',
  onChange = f => f,
  disabled=false
}) => {
  return (
    <input
      disabled={disabled}
      name={name}
      type='textarea'
      placeholder={placeholder}
      autoComplete='off'
      value={value}
      onChange={onChange}

    ></input>
  )
}

export default Textarea
