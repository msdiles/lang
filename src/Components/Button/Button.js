import React from 'react'
import './button.scss'

const Button = ({buttonText='',onClick=f=>f}) => {
  return(
    <button type='button' onClick={onClick}>{buttonText}</button>
  )
}

export default Button
